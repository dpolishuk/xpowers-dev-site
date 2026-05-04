import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Problems from '@/sections/Problems';
import Features from '@/sections/Features';
import Legacy from '@/sections/Legacy';
import Platforms from '@/sections/Platforms';
import Comparison from '@/sections/Comparison';
import Install from '@/sections/Install';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-ij-bg">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Legacy />
        <Platforms />
        <Comparison />
        <Install />
      </main>
      <Footer />
    </div>
  );
}
