import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header/header';
import { Logo } from '@/components/header/logo';
import { Hero } from '@/components/hero/hero';
import { SectionDivider } from '@/components/section-divider';

export default function Home() {
  return (
    <div className='min-h-screen bg-background mx-auto'>
      <Header />
      <Hero />

      <SectionDivider />

      <section id='about'>
        <div className='max-w-5xl mx-auto px-6 py-24 md:py-32'>
          <div className='mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight'>
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
                You work with skilled persons directly. No corporate overhead.
                No project managers who don&apos;t understand your technical
                needs. No junior devs learning on your dime.
              </p>

              <p className='text-foreground'>
                Just experienced professionals who&apos;ve been there, done
                that, and know how to build software that{' '}
                <span className='font-family-serif italic'>actually works</span>
                .
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 border border-border'>
            <div className='p-8 border-r border-border last:border-r-0 hover:bg-card/50 transition-colors'>
              <div className='text-4xl mb-4 text-primary'>10+</div>
              <h3 className='text-lg font-semibold mb-2 lowercase'>
                years experience
              </h3>
              <p className='text-sm text-muted-foreground'>
                Every developer has a decade of production experience
              </p>
            </div>

            <div className='p-8 border-r border-border last:border-r-0 hover:bg-card/50 transition-colors'>
              <div className='text-4xl mb-4 text-primary'>100%</div>
              <h3 className='text-lg font-semibold mb-2 lowercase'>
                direct access
              </h3>
              <p className='text-sm text-muted-foreground'>
                Talk directly to the people writing your code
              </p>
            </div>

            <div className='p-8 hover:bg-card/50 transition-colors'>
              <div className='text-4xl mb-4 text-primary'>0</div>
              <h3 className='text-lg font-semibold mb-2 lowercase'>
                bureaucracy
              </h3>
              <p className='text-sm text-muted-foreground'>
                Skip the meetings, politics, and corporate nonsense
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id='contact'>
        <div className='max-w-5xl mx-auto px-6 py-24 md:py-32'>
          <div className='grid md:grid-cols-2 gap-16 items-start'>
            <div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
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

              <div className='space-y-4 text-muted-foreground'>
                <div className='flex items-start gap-3'>
                  <div className='text-primary mt-1'>→</div>
                  <div>
                    <div className='font-medium text-foreground'>
                      No commitment required
                    </div>
                    <div className='text-sm'>
                      Just a conversation about your needs
                    </div>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='text-primary mt-1'>→</div>
                  <div>
                    <div className='font-medium text-foreground'>
                      Fast response time
                    </div>
                    <div className='text-sm'>Usually within 24 hours</div>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='text-primary mt-1'>→</div>
                  <div>
                    <div className='font-medium text-foreground'>
                      Transparent pricing
                    </div>
                    <div className='text-sm'>Clear rates, no hidden fees</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='border border-border p-8 md:p-10'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-neutral-900/50 border-border'>
        <div className='max-w-5xl mx-auto px-6 py-16'>
          <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
            <div className='max-w-md'>
              <Logo />
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Senior developers without the agency overhead. Building
                applications the right way, one project at a time.
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <nav className='flex flex-col gap-2 text-sm'>
                <a
                  href='#about'
                  className='text-muted-foreground hover:text-foreground transition-colors lowercase'
                >
                  about
                </a>
                <a
                  href='#contact'
                  className='text-muted-foreground hover:text-foreground transition-colors lowercase'
                >
                  contact
                </a>
              </nav>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
            <div className='text-xs text-muted-foreground lowercase'>
              © {new Date().getFullYear()} dev renegades. all rights reserved.
            </div>

            <div className='text-xs text-muted-foreground'>
              Building software{' '}
              <span className='font-family-serif italic'>differently</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
