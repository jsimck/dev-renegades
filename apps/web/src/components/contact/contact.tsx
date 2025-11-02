import {
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';

import { ContactForm } from '@/components/contact/contact-form';
import { SectionHeader } from '@/components/sections/section-header';

import { BenefitItem } from './benefit-item';

export function Contact() {
  return (
    <section id='contact' aria-labelledby='contact-heading'>
      <div className='max-w-5xl mx-auto px-6 py-24 md:py-32'>
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <div>
            <SectionHeader>get in touch</SectionHeader>

            <h2
              id='contact-heading'
              className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'
            >
              Let&apos;s{' '}
              <span className='font-family-serif italic font-normal'>
                build
              </span>{' '}
              something
            </h2>

            <p className='text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed'>
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>

            <div className='space-y-3 text-muted-foreground'>
              <BenefitItem
                icon={CheckCircleIcon}
                title='No commitment required'
                description='Just a conversation about your needs'
              />

              <BenefitItem
                icon={ClockIcon}
                title='Fast responseIcon time'
                description='Usually within 24 hours'
              />

              <BenefitItem
                icon={CurrencyDollarSimpleIcon}
                title='Transparent pricing'
                description='Clear rates, no hidden fees'
              />
            </div>
          </div>

          <div className='border border-border p-8 md:p-10 relative overflow-hidden'>
            {/* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-2xl' />
            <div className='absolute bottom-0 left-0 w-20 h-20 bg-primary/5 blur-2xl' />
            <div className='relative'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
