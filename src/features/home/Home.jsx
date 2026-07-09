import { MovieList } from "../../components/MovieList";
import { HeroSection } from "./HeroSection";
import movie_1 from "../../assets/major.webp";
import movie_2 from "../../assets/padi_padi_leche_manasu.jpg";

const posters = [movie_1, movie_2, movie_1, movie_2, movie_1];

export const Home = () => {
  return (
    <div className="flex flex-col bg-primary-bg">
      <HeroSection />
      <div className="mx-20 my-10">
        <MovieList moviePosters={posters} />
      </div>
    </div>
  );
};
