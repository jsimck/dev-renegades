import { ListIcon } from '@phosphor-icons/react/dist/ssr';

import { Logo } from './logo';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header
      className='border-border sticky top-0 bg-background/40 backdrop-blur-lg z-50'
      role='banner'
    >
      <div className='container px-6 py-4 max-w-5xl mx-auto flex items-center justify-between relative'>
        <Logo />

        <Navigation />

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 border border-border hover:border-primary text-foreground transition-all duration-300 group'
          aria-label='Toggle navigation menu'
          aria-expanded='false'
        >
          <ListIcon className='w-5 h-5 transition-transform group-hover:rotate-90 duration-300' />
        </button>
      </div>

      {/* Subtle bottom accent */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent' />
    </header>
  );
}
