import movie_1 from "../../assets/major.webp";
import movie_2 from "../../assets/padi_padi_leche_manasu.jpg";
const posters = [movie_1, movie_2, movie_1, movie_2, movie_1];

export const MoviePosters = () => {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-5  bg-black pb-20 text-primary-text px-5 md:px-40">
      {posters.map((poster, ind) => {
        return (
          <div
            key={ind}
            className="w-full mt-10  border border-dark-border rounded-card hover:transform-1 transition-transform duration-300  hover:scale-105 hover:cursor-pointer aspect-2/3"
          >
            <img
              src={poster}
              alt="Movie poster"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
