import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MovieList = ({ moviePosters }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return null;

    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative ">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-3 text-white"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Movie Row */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide cursor-pointer"
      >
        {[...moviePosters, ...moviePosters, ...moviePosters].map(
          (poster, ind) => (
            <div
              key={ind}
              className="flex-shrink-0 w-70 h-40 rounded-lg overflow-hidden "
              onClick={() => navigate("/watch")}
            >
              <img
                src={poster}
                alt="Movie poster"
                className="w-full h-full object-cover"
              />
            </div>
          ),
        )}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-3 text-white"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};
