import { SectionHeader } from '@/components/sections/section-header';

export function Hero() {
  return (
    <section
      className='max-w-5xl mx-auto px-6 py-24 md:py-32 lg:py-40 relative'
      aria-labelledby='hero-heading'
    >
      {/* Radial gradients with subtle glow - can flow beyond section */}
      <div className='absolute -top-32 -right-32 w-[700px] h-[700px] bg-primary/6 blur-3xl rounded-full pointer-events-none' />
      <div className='absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-primary/8 blur-3xl rounded-full pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 blur-3xl rounded-full pointer-events-none' />

      {/* Grid pattern - horizontal and vertical lines */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.02]'
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Thicker accent grid lines */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.015]'
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 0%, rgba(215, 38, 61, 0.3) 2px, transparent 2px),
            linear-gradient(to bottom, transparent 0%, rgba(215, 38, 61, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '240px 240px',
        }}
      />

      {/* Corner accent lines */}
      <div className='absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/10 pointer-events-none' />
      <div className='absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/10 pointer-events-none' />

      {/* Random decorative lines with pulsing animations */}
      {/* Top area - horizontal lines pulse randomly */}
      <div
        className='absolute top-24 left-1/4 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-h 3.5s ease-in-out infinite',
          animationDelay: '0s',
          width: '200px',
        }}
      />
      <div
        className='absolute top-32 right-1/3 h-0.5 bg-linear-to-r from-transparent via-border/60 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-h 4.2s ease-in-out infinite',
          animationDelay: '1.3s',
          width: '120px',
        }}
      />

      {/* Middle area - vertical lines pulse randomly */}
      <div
        className='absolute top-1/3 left-12 w-0.5 bg-linear-to-b from-transparent via-primary/40 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-v 3.8s ease-in-out infinite',
          animationDelay: '2.1s',
          height: '160px',
        }}
      />
      <div
        className='absolute top-1/2 right-20 w-0.5 bg-linear-to-b from-transparent via-border/50 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-v 4.5s ease-in-out infinite',
          animationDelay: '0.7s',
          height: '200px',
        }}
      />

      {/* Bottom area - horizontal random pulse */}
      <div
        className='absolute bottom-40 left-1/3 h-0.5 bg-linear-to-r from-transparent via-border/55 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-h 5s ease-in-out infinite',
          animationDelay: '1.8s',
          width: '240px',
        }}
      />
      <div
        className='absolute bottom-32 right-1/4 h-0.5 bg-linear-to-r from-transparent via-primary/40 to-transparent pointer-events-none'
        style={{
          animation: 'line-pulse-random-h 3.2s ease-in-out infinite',
          animationDelay: '2.5s',
          width: '160px',
        }}
      />

      {/* Diagonal accent lines - random pulse */}
      <div
        className='absolute top-1/4 right-1/4 h-0.5 bg-linear-to-r from-transparent via-primary/45 to-transparent rotate-45 pointer-events-none'
        style={{
          animation: 'line-pulse-random 4.8s ease-in-out infinite',
          animationDelay: '0.4s',
          width: '120px',
        }}
      />
      <div
        className='absolute bottom-1/3 left-1/3 h-0.5 bg-linear-to-r from-transparent via-border/50 to-transparent -rotate-45 pointer-events-none'
        style={{
          animation: 'line-pulse-random 3.6s ease-in-out infinite',
          animationDelay: '1.5s',
          width: '100px',
        }}
      />

      <div className='relative'>
        <SectionHeader>experts in software</SectionHeader>

        <h1
          id='hero-heading'
          className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight'
        >
          Senior developers who
          <br />
          <span className='font-family-serif italic font-normal text-primary'>
            build things right
          </span>
          .
        </h1>

        <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl'>
          No corporate overhead. No project managers. Just experienced
          professionals who deliver.
        </p>

        <nav className='flex flex-wrap gap-4' aria-label='Hero actions'>
          <a
            href='#contact'
            className='group inline-flex items-center justify-center px-8 py-3 text-2xl lowercase border border-primary bg-transparent font-medium text-primary hover:bg-primary/10 active:bg-primary/20 transition-all duration-300'
          >
            Get in Touch
            <span className='inline-block transition-transform group-hover:translate-x-1 ml-2'>
              →
            </span>
          </a>

          <a
            href='#about'
            className='inline-flex items-center justify-center px-8 py-3 border text-2xl lowercase border-border bg-transparent text-foreground font-medium hover:bg-secondary active:bg-secondary/70 transition-colors'
          >
            Learn More
          </a>
        </nav>
      </div>
    </section>
  );
}
