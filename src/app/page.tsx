import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import AreaSection from '@/components/AreaSection';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import Tour from '@/components/Tour';
import WhyBuy from '@/components/WhyBuy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Amenities />
        <Location />
        <AreaSection />
        <Gallery />
        <VideoSection />
        <Tour />
        <WhyBuy />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
