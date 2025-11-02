export function Navigation() {
  return (
    <nav
      className='hidden md:flex items-center gap-6'
      aria-label='Main navigation'
    >
      {/* Navigation links */}
      <a
        href='#'
        className='group relative text-sm lowercase text-muted-foreground hover:text-foreground transition-colors duration-300'
      >
        <span className='relative'>
          home
          <span className='absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300' />
        </span>
      </a>

      <a
        href='#about'
        className='group relative text-sm lowercase text-muted-foreground hover:text-foreground transition-colors duration-300'
      >
        <span className='relative'>
          about
          <span className='absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300' />
        </span>
      </a>

      <a
        href='#contact'
        className='group relative text-sm lowercase text-muted-foreground hover:text-foreground transition-colors duration-300'
      >
        <span className='relative'>
          contact
          <span className='absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300' />
        </span>
      </a>

      {/* Subtle code divider */}
      <div className='text-border text-xs font-mono px-2'>/</div>

      {/* CTA Button */}
      <a
        href='#contact'
        className='group relative px-5 py-2 text-sm lowercase border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 font-medium transition-all duration-300'
        aria-label='Get started with dev renegades'
      >
        get started
      </a>
    </nav>
  );
}
