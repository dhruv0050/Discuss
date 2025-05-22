import React from 'react'
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

const TopicCreateForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
          <div>
            <Label htmlFor="description" className="text-right">
                Desciption
            </Label>
            <Textarea id="description" name='description'/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className='w-full'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TopicCreateForm