import NavBar from "@/common/NavBar";
import FeatureSection from "@/components/sections/Feature";
import FooterSection from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import InvestmentSection from "@/components/sections/Investment";
import ReceiveTransmissionSection from "@/components/sections/ReceiveTransmission";
import TakeStepSection from "@/components/sections/TakeStep";
import TwoFourSevenSection from "@/components/sections/TwoFourSeven";

export default function Home () {
  return (
    <main className="bg-customDark">
      <NavBar />
      <HeroSection />
      <div className="px-4 md:px-[130px]">
        <FeatureSection />
      </div>
      <div className="flex flex-col gap-4 md:gap-16">
        <InvestmentSection />
        <TwoFourSevenSection />
        <TakeStepSection />
        <ReceiveTransmissionSection />
      </div>
        <FooterSection />
    </main>
  )
}