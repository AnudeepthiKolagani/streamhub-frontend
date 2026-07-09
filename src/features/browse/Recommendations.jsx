import { MovieList } from "../../components/MovieList";
import bahubali from "../../assets/bahubali.jpg";
import karthikeya from "../../assets/karthikeya.jpg";
import maaIntiBangaram from "../../assets/maa_inti_bangaram.jpg";
import padiPadiLechemanasu from "../../assets/padi_padi_leche_manasu.jpg";

const moviePosters = [
  bahubali,
  karthikeya,
  maaIntiBangaram,
  padiPadiLechemanasu,
];

const recommendationsList = [
  { title: "Boredom Busters", movies: moviePosters },
  { title: "You might Like", movies: moviePosters },
  { title: "Films set in India", movies: moviePosters },
  { title: "Familiar Favorite Series", movies: moviePosters },
];
export const Recommendations = () => {
  return (
    <div className="flex flex-col gap-10 text-primary-text mx-20 my-10">
      {recommendationsList.map((recommended, ind) => (
        <div className="flex flex-col gap-3"> 
          <h4 className="font-bold text-3xl">{recommended.title}</h4>
          <MovieList key={ind} moviePosters={recommended.movies} />
        </div>
      ))}
    </div>
  );
};
