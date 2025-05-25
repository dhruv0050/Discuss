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
  const [formState, action] = useActionState(createTopics, {errors:{}})
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg transition-all duration-200 hover:shadow-purple-500/25">
          New Topic
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#2A2438] border-[#3F3C5B] text-[#EDE9FE]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle className="text-[#EDE9FE] text-xl font-semibold">
              Create a Topic to discuss
            </DialogTitle>
            <DialogDescription className="text-purple-300/80">
              Create a topic to discuss. You can create a topic
              for any subject you want.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#EDE9FE] font-medium">
                Name
              </Label>
              <Input 
                id="name" 
                name='name'
                className="bg-[#1E1B2E] border-[#3F3C5B] text-[#EDE9FE] placeholder:text-purple-400/60 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20 transition-colors"
                placeholder="Enter topic name..."
              />
              {formState.errors.name && (
                <p className='text-sm text-red-400 mt-1 flex items-center gap-1'>
                  <span className="text-red-400">⚠</span>
                  {formState.errors.name}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#EDE9FE] font-medium">
                Description
              </Label>
              <Textarea 
                id="description" 
                name='description'
                className="bg-[#1E1B2E] border-[#3F3C5B] text-[#EDE9FE] placeholder:text-purple-400/60 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20 min-h-[100px] resize-none transition-colors"
                placeholder="Describe what this topic is about..."
              />
              {formState.errors.description && (
                <p className='text-sm text-red-400 mt-1 flex items-center gap-1'>
                  <span className="text-red-400">⚠</span>
                  {formState.errors.description}
                </p>
              )}
            </div>
            
            {formState.errors.formError && (
              <div className='border border-red-400/50 bg-red-500/10 text-sm text-red-300 p-3 rounded-lg backdrop-blur-sm flex items-start gap-2'>
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>{formState.errors.formError}</span>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button 
              type="submit" 
              className='w-full bg-gradient-to-r from-[#8B5CF6] to-purple-600 hover:from-[#7C3AED] hover:to-purple-700 text-white font-medium py-2.5 shadow-lg hover:shadow-purple-500/25 transition-all duration-200'
            >
              Create Topic
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TopicCreateForm