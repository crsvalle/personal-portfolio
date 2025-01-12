'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import Link from 'next/link'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm = async (data) => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <section className='relative isolate bg-black text-white' id="contact">
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-zinc-700 opacity-25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700'
        aria-hidden='true'
      >
        {/* SVG Content */}
      </svg>

      <div className='relative mb-12'>
        <h2 className="text-3xl font-bold text-center mb-6">Questions?</h2>

        <form
          onSubmit={handleSubmit(processForm)}
          className='mt-16 lg:flex-auto'
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 '>
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='given-name'
                className='bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:ring-2 focus:ring-blue-500'
                {...register('name')}
              />

              {errors.name?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                className='bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:ring-2 focus:ring-blue-500'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder='Message'
                className='bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:ring-2 focus:ring-blue-500'
                {...register('message')}
              />

              {errors.message?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white'
            >
              {isSubmitting ? 'Submitting...' : 'Contact Me'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-zinc-400'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold text-blue-500'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>

  )
}
