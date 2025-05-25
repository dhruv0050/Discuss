"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea"; 
import { useActionState } from "react";
import { createPost } from "@/actions/create-post";

type CreatePostFormProps = {
    slug: string
}

const PostCreateForm: React.FC<CreatePostFormProps> = ({slug}) => {
    const [formState, action] = useActionState(createPost.bind(null, slug), {errors:{}})
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    className="w-full font-semibold transition-all duration-200 hover:scale-[1.02]"
                    style={{ 
                        backgroundColor: '#8B5CF6',
                        color: '#EDE9FE',
                        border: 'none'
                    }}
                >
                    <svg 
                        className="w-4 h-4 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    Create New Post
                </Button>
            </DialogTrigger>
            
            <DialogContent 
                className="sm:max-w-[500px] border-0"
                style={{ 
                    backgroundColor: '#2A2438',
                    borderColor: '#3F3C5B'
                }}
            >
                <form action={action}>
                    <DialogHeader className="pb-4">
                        <DialogTitle 
                            className="text-xl font-bold"
                            style={{ color: '#EDE9FE' }}
                        >
                            Create a New Post
                        </DialogTitle>
                        <DialogDescription style={{ color: '#A78BFA' }}>
                            Share your thoughts with the community. Fill out the form below to create your post.
                        </DialogDescription>
                        <div 
                            className="h-px w-full mt-2"
                            style={{ backgroundColor: '#3F3C5B' }}
                        />
                    </DialogHeader>
                    
                    <div className="grid gap-6 py-4">
                        <div className="space-y-2">
                            <Label 
                                htmlFor="title" 
                                className="text-sm font-medium"
                                style={{ color: '#EDE9FE' }}
                            >
                                Post Title
                            </Label>
                            <Input 
                                id="title" 
                                name="title" 
                                placeholder="Enter an engaging title..."
                                className="transition-all duration-200 focus:scale-[1.01]"
                                style={{ 
                                    backgroundColor: '#1E1B2E',
                                    borderColor: '#3F3C5B',
                                    color: '#EDE9FE'
                                }}
                            />
                            {formState.errors.title && (
                                <div className="flex items-center gap-2 text-sm p-2 rounded-md" style={{ backgroundColor: '#7F1D1D', color: '#FCA5A5' }}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {formState.errors.title}
                                </div>
                            )}
                        </div>
                        
                        <div className="space-y-2">
                            <Label 
                                htmlFor="content" 
                                className="text-sm font-medium"
                                style={{ color: '#EDE9FE' }}
                            >
                                Content
                            </Label>
                            <Textarea 
                                id="content" 
                                name="content" 
                                placeholder="What's on your mind? Share your thoughts..."
                                rows={4}
                                className="transition-all duration-200 focus:scale-[1.01] resize-none"
                                style={{ 
                                    backgroundColor: '#1E1B2E',
                                    borderColor: '#3F3C5B',
                                    color: '#EDE9FE'
                                }}
                            />
                            {formState.errors.content && (
                                <div className="flex items-center gap-2 text-sm p-2 rounded-md" style={{ backgroundColor: '#7F1D1D', color: '#FCA5A5' }}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {formState.errors.content}
                                </div>
                            )}
                        </div>
                        
                        {formState.errors.formError && (
                            <div 
                                className="border p-3 rounded-lg flex items-start gap-2" 
                                style={{ 
                                    borderColor: '#DC2626', 
                                    backgroundColor: '#7F1D1D', 
                                    color: '#FCA5A5' 
                                }}
                            >
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-medium">Error</p>
                                    <p className="text-sm">{formState.errors.formError}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <DialogFooter className="pt-4">
                        <div 
                            className="h-px w-full mb-4"
                            style={{ backgroundColor: '#3F3C5B' }}
                        />
                        <Button 
                            type="submit" 
                            className="w-full font-semibold transition-all duration-200 hover:scale-[1.02]"
                            style={{ 
                                backgroundColor: '#8B5CF6',
                                color: '#EDE9FE',
                                border: 'none'
                            }}
                        >
                            <svg 
                                className="w-4 h-4 mr-2" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                            </svg>
                            Publish Post
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default PostCreateForm;