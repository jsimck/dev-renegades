import { About } from '@/components/about/about';
import { Contact } from '@/components/contact/contact';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Hero } from '@/components/hero/hero';
import { SectionDivider } from '@/components/sections/section-divider';
import { StructuredData } from '@/components/seo/structured-data';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className='min-h-screen bg-background mx-auto'>
        <Header />
        <Hero />

        <SectionDivider />

        <About />

        <SectionDivider />

        <Contact />

        <Footer />
      </div>
    </>
  );
}
