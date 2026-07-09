import { HeroSection } from "./HeroSection";
import { MoviePosters } from "./MoviePosters";

export const Home = () => {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <MoviePosters />
    </div>
  );
};
