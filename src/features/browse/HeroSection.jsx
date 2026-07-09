import { Info, Play } from "lucide-react";
import moviePoster from "../../assets/nani.jpg";
import { Header } from "./Header";
export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src={moviePoster}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 mx-20">
        <Header />
      </div>
      <div className="relative z-10 mx-20 grid grid-cols-3 text-center mt-30 text-primary-text">
        <div className="flex flex-col gap-8 justify-left">
          <h4 className="text-4xl font-bold ">MAA INTI BANGARAM</h4>
          <div className="text-left text-xl font-semibold">
            Watch in tamil, teligu, Hindi, Malayamlam, kannada (list of
            lanaguages to watch)
          </div>
          <div className="text-left text-lg">
            About the movie description in 2-3 lines, movie zenre, story line,
            thirller/comedy/love story/family entertainer etc
          </div>
          <div className="flex flex-row gap-5">
            <button className="bg-primary-text text-black flex flex-row items-center px-8 py-2 rounded-button">
              <Play /> Play
            </button>
            <button className="bg-gray-600 text-primary-text flex flex-row items-center px-8 py-2 rounded-button">
              <Info /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
