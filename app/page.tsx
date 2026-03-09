import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MeetBri from '@/components/MeetBri';
import WhoIHelp from '@/components/WhoIHelp';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import WhyTrustBri from '@/components/WhyTrustBri';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main id="main">
                <Hero />
                <MeetBri />
                <WhoIHelp />
                <HowItWorks />
                <Services />
                <WhyTrustBri />
                <FAQ />
                <ConsultationForm />
            </main>
            <Footer />
            <StickyCTA />
        </>
    );
}
