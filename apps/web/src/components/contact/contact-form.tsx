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
    <form
      action={formAction}
      className='space-y-6'
      aria-label='Contact form'
      noValidate
    >
      <div className='space-y-3'>
        <Label
          htmlFor='name'
          className='text-sm lowercase text-muted-foreground'
        >
          name *
        </Label>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='Your name'
          required
          disabled={isPending}
          aria-required='true'
          autoComplete='name'
          className='bg-transparent border-border focus:border-primary transition-colors'
        />
      </div>

      <div className='space-y-3'>
        <Label
          htmlFor='email'
          className='text-sm lowercase text-muted-foreground'
        >
          email *
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='your@email.com'
          required
          disabled={isPending}
          aria-required='true'
          autoComplete='email'
          className='bg-transparent border-border focus:border-primary transition-colors'
        />
      </div>

      <div className='space-y-3'>
        <Label
          htmlFor='phone'
          className='text-sm lowercase text-muted-foreground'
        >
          phone <span className='text-muted-foreground/60'>(optional)</span>
        </Label>
        <Input
          id='phone'
          name='phone'
          type='tel'
          placeholder='+1 (555) 000-0000'
          disabled={isPending}
          aria-required='false'
          autoComplete='tel'
          className='bg-transparent border-border focus:border-primary transition-colors'
        />
      </div>

      <div className='space-y-3'>
        <Label
          htmlFor='message'
          className='text-sm lowercase text-muted-foreground'
        >
          message *
        </Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Tell us about your project...'
          required
          rows={6}
          disabled={isPending}
          aria-required='true'
          className='bg-transparent border border-border focus:border-primary transition-colors resize-none'
        />
      </div>

      {state && (
        <div
          role='alert'
          aria-live='polite'
          className={`p-4 border text-sm ${
            state.success
              ? 'bg-transparent text-foreground border-border'
              : 'bg-transparent text-destructive border-destructive'
          }`}
        >
          {state.success ? state.message : state.error}
        </div>
      )}

      <Button
        type='submit'
        disabled={isPending}
        aria-disabled={isPending}
        className='w-full border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 font-medium lowercase text-lg py-6 transition-colors disabled:opacity-50'
      >
        {isPending ? 'sending...' : 'send message'}
      </Button>
    </form>
  );
}
