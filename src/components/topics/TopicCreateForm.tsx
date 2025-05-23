"use client"
import React, { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '../ui/textarea'
import { createTopics } from '@/actions/create-topics'


const TopicCreateForm = () => {
  const [formState,action] = useActionState(createTopics, {errors:{}})
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
        <DialogHeader>
          <DialogTitle>Create a Topic to discuss</DialogTitle>
          <DialogDescription>
            Create a topic to discuss. You can create a topic
            for any subject you want.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">
              Name
            </Label>
            <Input id="name" name='name'/>
          </div>
          {formState.errors.name && <p className='text-sm text-red-500'>{formState.errors.name}</p>}
          <div>
            <Label htmlFor="description" className="text-right">
                Desciption
            </Label>
            <Textarea id="description" name='description'/>
          </div>
          {formState.errors.description && <p className='text-sm text-red-600'>{formState.errors.description}</p>}
          {formState.errors.formError && <div className='border border-red-400 bg-red-200 text-sm text-red-600 p-2 rounded'>{formState.errors.formError}</div>}
        </div>
        <DialogFooter>
          <Button type="submit" className='w-full'>Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TopicCreateForm