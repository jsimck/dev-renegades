'use client';

import { useActionState } from 'react';

import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      return await submitContactForm(formData);
    },
    null,
  );

  return (
    <form action={formAction} className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='name' className='text-sm font-medium'>
          Name *
        </Label>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='Your name'
          required
          disabled={isPending}
          className='bg-card border-border'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email' className='text-sm font-medium'>
          Email *
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='your@email.com'
          required
          disabled={isPending}
          className='bg-card border-border'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='phone' className='text-sm font-medium'>
          Phone <span className='text-muted-foreground'>(optional)</span>
        </Label>
        <Input
          id='phone'
          name='phone'
          type='tel'
          placeholder='+1 (555) 000-0000'
          disabled={isPending}
          className='bg-card border-border'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message' className='text-sm font-medium'>
          Message *
        </Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Tell us about your project...'
          required
          rows={6}
          disabled={isPending}
          className='bg-card border-border resize-none'
        />
      </div>

      {state && (
        <div
          className={`p-4 border ${
            state.success
              ? 'bg-secondary text-foreground border-border'
              : 'bg-destructive/10 text-destructive border-destructive'
          }`}
        >
          {state.success ? state.message : state.error}
        </div>
      )}

      <Button
        type='submit'
        disabled={isPending}
        className='w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium'
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
