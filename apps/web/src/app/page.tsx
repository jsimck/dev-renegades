import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header/header';
import { Logo } from '@/components/header/logo';
import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-background mx-auto'>
      <Header />
      <Hero />

      <section id='about' className='max-w-5xl mx-auto'>
        <div className='container mx-auto px-6 py-24 md:py-32'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Work with experts, not agencies
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
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

            <p>
              Just experienced professionals who&apos;ve been there, done that,
              and know how to build software that actually works.
            </p>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='border border-border p-6'>
              <h3 className='text-xl font-semibold mb-2'>Senior Level</h3>
              <p className='text-muted-foreground'>
                Every developer has 10+ years of production experience
              </p>
            </div>

            <div className='border border-border p-6'>
              <h3 className='text-xl font-semibold mb-2'>Direct Access</h3>
              <p className='text-muted-foreground'>
                Talk directly to the people writing your code
              </p>
            </div>

            <div className='border border-border p-6'>
              <h3 className='text-xl font-semibold mb-2'>No Bureaucracy</h3>
              <p className='text-muted-foreground'>
                Skip the meetings, politics, and corporate nonsense
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='max-w-5xl mx-auto'>
        <div className='container mx-auto px-6 py-24 md:py-32'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Let&apos;s build something
          </h2>

          <p className='text-lg text-muted-foreground mb-12'>
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-card'>
        <div className='container mx-auto px-6 py-12 max-w-5xl'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
            <div>
              <Logo />{' '}
              <p className='text-sm text-muted-foreground max-w-md'>
                Senior developers without the agency overhead. Building
                applications the right way, one project at a time.
              </p>
            </div>

            <div className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} dev renegades
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
