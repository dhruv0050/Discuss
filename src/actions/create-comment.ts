"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createCommentSchema = z.object({
    content: z.string().min(1, "Content is required").max(500, "Content must be less than 500 characters")
});

type CreateCommentState = {
    errors: {
        content?: string[];
        formError?: string[];
    }
}

export const createComment = async ({postId, parentId}: {postId:string; parentId?:string},prevState: CreateCommentState , formData: FormData): Promise<CreateCommentState> => {
    const result = createCommentSchema.safeParse({
        content: formData.get("content")
    });
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const session = await auth()
    if (!session || !session.user || !session.user.id) {
        return {
            errors: {
                formError: ["You must be logged in to comment."]
            }
        }
    }
    try {
        await prisma.comment.create({
            data:{
                content: result.data.content,
                postId: postId,
                userId: session.user.id,
                parentId: parentId
            }
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        } else{
            return {
                errors: {
                    formError: ["An unexpected error occurred."]
                }
            }
        }
    }

    const topic = await prisma.topic.findFirst({
        where:{
            posts:{
                some:{
                    id:postId
                }
            }
        }
    })
    if(!topic) {
        return {
            errors: {
                formError: ["Topic not found."]
            }
        }
    }
    revalidatePath(`/topics/${topic.slug}/posts/${postId}`);
    return {
        errors: {}
    }
}