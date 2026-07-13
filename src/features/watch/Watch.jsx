import demoVideo from "../../assets/file_example_MP4_480_1_5MG.mp4";
export const Watch = () => {
  return (
    <div className="w-full h-screen">
      <video src={demoVideo} controls autoPlay className="w-full h-full"/>
    </div>
  );
};
