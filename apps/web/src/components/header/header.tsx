import { Logo } from './logo';

export function Header() {
  return (
    <header className='border-border sticky top-0 bg-background/80 backdrop-blur-md z-50'>
      <div className='container px-6 py-4 max-w-5xl mx-auto flex items-center justify-between'>
        <Logo />

        <nav className='hidden md:flex items-center gap-8'>
          <a
            href='#about'
            className='text-sm lowercase text-muted-foreground hover:text-foreground transition-colors'
          >
            about
          </a>
          <a
            href='#contact'
            className='text-sm lowercase text-muted-foreground hover:text-foreground transition-colors'
          >
            contact
          </a>
          <a
            href='#contact'
            className='inline-flex items-center justify-center px-6 py-2 text-sm lowercase border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 font-medium transition-colors'
          >
            get started
          </a>
        </nav>

        <button className='md:hidden text-foreground' aria-label='Toggle menu'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='3' y1='12' x2='21' y2='12' />
            <line x1='3' y1='6' x2='21' y2='6' />
            <line x1='3' y1='18' x2='21' y2='18' />
          </svg>
        </button>
      </div>
    </header>
  );
}
