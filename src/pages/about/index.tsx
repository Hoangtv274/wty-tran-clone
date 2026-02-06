import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHero from '../../components/about/AboutHero';
import CompanyInfo from '../../components/about/CompanyInfo';
import WorkingHours from '../../components/about/WorkingHours';
import ContactSection from '../../components/about/ContactSection';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">
                <AboutHero />
                <CompanyInfo />
                <WorkingHours />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
