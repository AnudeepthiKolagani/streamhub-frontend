import { HeroSection } from "./HeroSection";
import { Recommendations } from "./Recommendations";

export const Browse = () => {
  return (
    <div className="flex flex-col gap-6 bg-primary-bg">
      <HeroSection />
      <Recommendations />
    </div>
  );
};
