import { AboutUs } from "@/components/AboutUs";
import { ContactSection } from "@/components/ContactSection";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Education } from "@/components/Education";
import { HealthPharma } from "@/components/HealthPharma";
import { HeroSection } from "@/components/HeroSection";
import { RestaurantHospitality } from "@/components/RestaurantHospitality";
import { RetailFMCG } from "@/components/RetailFMCG";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>

      <main>
        <HeroSection />
        <TrustBar />
        <HealthPharma />
        <RetailFMCG />
        <Education />
        <RestaurantHospitality />
        <WhyChooseUs />
        <AboutUs />
        <CustomerReviews />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </>
  );
}
