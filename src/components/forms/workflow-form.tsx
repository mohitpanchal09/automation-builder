import { WorkFlowFormSchema } from '@/lib/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '../ui/card'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '../ui/form'
import { Input } from '../ui/input'

type Props = {
    title?:string,
    subTitle?:string
}

const WorkFlowForm = ({title,subTitle}: Props) => {
    const form = useForm<z.infer<typeof WorkFlowFormSchema>>({
        mode:'onChange',
        resolver:zodResolver(WorkFlowFormSchema),
        defaultValues:{
            name:'',
            description:''
        }
    })
    const isLoading = form.formState.isLoading
    const router = useRouter()

    const handleSubmit=()=>{

    }
  return (
    <Card className="w-full max-w-[650px] border-none">
        {title && subTitle && (
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {subTitle}
                </CardDescription>
            </CardHeader>
        )}
        <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default WorkFlowForm