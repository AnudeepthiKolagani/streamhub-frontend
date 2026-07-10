import bgImage from "../..//assets/the_netflix_home_background.jpg";

export const HeroSection = () => {
  return (
    <div className="relative max-w-full min-h-screen overflow-hidden bg-primary-bg">
      <img
        src={bgImage}
        alt="Background image for home page"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-primary-bg/70" />
      {/* Header */}
      <div className="relative z-10">
        <div className="flex flex-row justify-between  px-5 md:px-30 py-5">
          <h4 className="text-3xl text-primary font-bold">StramHub</h4>
          <div className="flex flex-row gap-6 text-base">
            <button className="text-primary-text border border-primary-border bg-transparent rounded-button  px-4 py-1">
              English
            </button>
            <button className="text-primary-text bg-primary rounded-button px-4 py-1">
              Sign in
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto text-center text-primary-text px-5">
          <div className="text-6xl font-extrabold">
            Unlimited moves, shows and more
          </div>
          <div>Plan starts at @149. Cancel anytime</div>
          <div>Ready to watch ? Enter your email to start your membership.</div>
          <div className="flex flex-row gap-4">
            <input
              placeholder="Email Address"
              onChange={() => {}}
              className="w-full  bg-transparent border border-primary-border text-primary-text py-2 rounded-button px-4"
            />
            <button
              className="bg-primary cursor-pointer text-primary-text py-2 rounded-button w-full"
              onClick={() => {
                console.log("Clicked for trial period");
              }}
            >
              Try 30 Days for 0
            </button>
          </div>
          <p>New members only. Terms below</p>
        </div>
      </div>
    </div>
  );
};
