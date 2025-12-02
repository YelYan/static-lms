const courseVidoes = [
  {
    id: 1,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 3,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 4,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 5,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    course:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
];
const Highlight = () => {
  return (
    <div className="container py-20 h-full bg-accent-foreground">
      <div className="text-center mb-8 space-y-5">
        <h1 className="font-telegraf-bold text-2xl md:text-7xl text-white">
          Course Project Highlights
        </h1>
        <p className="text-white font-telegraf-regular w-full max-w-2xl mx-auto text-base md:text-lg lg:text-xl px-4 md:px-0">
          In this course, you won't just learn—you'll build. By the final
          module, you will have completed a set of real-world projects that not
          only solidify your understanding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {courseVidoes.map((video) => (
          <div key={video.id} className="shadow-md overflow-hidden rounded-lg">
            <video className="w-auto h-full" src={video.course} controls>
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <div className="text-center space-y-15 mt-20">
        <h1 className="font-telegraf-bold text-xl md:text-3xl text-white">
          Begineer Friendly Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <p className="text-blue-600 text-2xl font-telegraf-bold">
            No programming experience required
          </p>
          <p className="text-white text-2xl font-telegraf-bold">
            Self Paced Online Courses
          </p>
          <p className="text-blue-600 text-2xl font-telegraf-bold">
            Real World Engineering Application
          </p>
          <p className="text-white text-2xl font-telegraf-bold">
            Life Time Access
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
