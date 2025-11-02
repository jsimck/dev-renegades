import {
  MedalIcon,
  UsersIcon,
  LightningIcon,
} from '@phosphor-icons/react/dist/ssr';

import { SectionHeader } from '@/components/sections/section-header';

import { StatCard } from './stat-card';

export function About() {
  return (
    <section id='about' aria-labelledby='about-heading'>
      <div className='max-w-5xl mx-auto px-6 py-24 md:py-32'>
        <div className='mb-16'>
          <SectionHeader>about us</SectionHeader>

          <h2
            id='about-heading'
            className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight'
          >
            Work with{' '}
            <span className='font-family-serif italic font-normal'>
              experts
            </span>
            ,<br />
            not agencies
          </h2>

          <div className='max-w-3xl space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed'>
            <p>
              We&apos;re really skilled senior developers that can help you
              figure out applications without the hassle of normal software
              agencies.
            </p>

            <p>
              You work with skilled persons directly. No corporate overhead. No
              project managers who don&apos;t understand your technical needs.
              No junior devs learning on your dime.
            </p>

            <p className='text-foreground'>
              Just experienced professionals who&apos;ve been there, done that,
              and know how to build software that{' '}
              <span className='font-family-serif italic'>actually works</span>.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-1 border border-border relative overflow-hidden'>
          {/* Subtle hover glow effect */}
          <div className='absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />

          <StatCard
            value='10'
            suffix='+'
            suffixOpacity='primary'
            icon={MedalIcon}
            title='years experience'
            description='Every developer has a decade of production experience'
          />

          <StatCard
            value='100'
            suffix='%'
            suffixOpacity='primary'
            icon={UsersIcon}
            title='direct access'
            description='Talk directly to the people writing your code'
          />

          <StatCard
            value='0'
            suffix='×'
            suffixOpacity='muted'
            icon={LightningIcon}
            title='bureaucracy'
            description='Skip the meetings, politics, and corporate nonsense'
          />
        </div>
      </div>
    </section>
  );
}
