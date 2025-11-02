export function Hero() {
  return (
    <div className='max-w-5xl mx-auto px-6 py-24 md:py-32 lg:py-40'>
      <div className='rounded' />

      <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight'>
        Senior developers who
        <br />
        <span className='font-family-serif italic font-normal'>
          build things right
        </span>
        .
      </h2>

      <div className='flex flex-wrap gap-4'>
        <a
          href='#contact'
          className='inline-flex items-center justify-center px-8 py-3 text-2xl lowercase border border-primary bg-transparent font-medium text-primary hover:bg-primary/10 active:bg-primary/20 transition-colors'
        >
          Get in Touch
        </a>

        <a
          href='#about'
          className='inline-flex items-center justify-center px-8 py-3 border text-2xl lowercase border-border bg-transparent text-foreground font-medium hover:bg-secondary active:bg-secondary/70 transition-colors'
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
