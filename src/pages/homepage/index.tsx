
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import {
  HeroSection,
  FeatureIcons,
  WhyChooseUs,
  RegistrationSteps,
  ServiceFlexibility,
  NewsSection,
  Testimonials
} from '../../components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FeatureIcons />
        <WhyChooseUs />
        <RegistrationSteps />
        <ServiceFlexibility />
        <NewsSection />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
