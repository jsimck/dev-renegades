import { Logo } from '@/components/header/logo';

export function Footer() {
  return (
    <footer
      className='bg-neutral-900/50 border-t border-border relative overflow-hidden'
      role='contentinfo'
    >
      {/* Subtle background gradient */}
      <div className='absolute inset-0 bg-linear-to-t from-primary/5 to-transparent pointer-events-none' />

      <div className='max-w-5xl mx-auto px-6 py-16 relative'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
          <div className='max-w-md'>
            <Logo />
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Senior developers without the agency overhead. Building
              applications the right way, one project at a time.
            </p>

            {/* Code-like decoration */}
            <div className='mt-6 font-mono text-xs text-muted-foreground/40'>
              <div>{'{'}</div>
              <div className='ml-4'>
                <span className='text-primary'>experience</span>: &quot;10+
                years&quot;,
              </div>
              <div className='ml-4'>
                <span className='text-primary'>overhead</span>: &quot;none&quot;
              </div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className='flex gap-16'>
            <div className='flex flex-col gap-4'>
              <div className='text-sm font-semibold text-foreground lowercase mb-2'>
                navigate
              </div>
              <nav
                className='flex flex-col gap-3 text-sm'
                aria-label='Footer navigation'
              >
                <a
                  href='#'
                  className='text-muted-foreground hover:text-primary transition-colors lowercase group flex items-center gap-2'
                >
                  <span className='inline-block transition-transform group-hover:translate-x-1'>
                    →
                  </span>
                  home
                </a>
                <a
                  href='#about'
                  className='text-muted-foreground hover:text-primary transition-colors lowercase group flex items-center gap-2'
                >
                  <span className='inline-block transition-transform group-hover:translate-x-1'>
                    →
                  </span>
                  about
                </a>
                <a
                  href='#contact'
                  className='text-muted-foreground hover:text-primary transition-colors lowercase group flex items-center gap-2'
                >
                  <span className='inline-block transition-transform group-hover:translate-x-1'>
                    →
                  </span>
                  contact
                </a>
              </nav>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='text-sm font-semibold text-foreground lowercase mb-2'>
                connect
              </div>
              <div className='flex flex-col gap-3 text-sm'>
                <div className='text-muted-foreground/50 lowercase'>
                  coming soon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='text-xs text-muted-foreground lowercase flex items-center gap-2'>
            <span className='text-primary'>©</span>
            {new Date().getFullYear()} dev renegades. all rights reserved.
          </div>

          <div className='text-xs text-muted-foreground flex items-center gap-2'>
            <span className='font-mono text-primary'>&#47;&#47;</span>
            Building software{' '}
            <span className='font-family-serif italic text-foreground'>
              differently
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
