import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Ethics } from "@/components/Ethics";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Ethics />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
