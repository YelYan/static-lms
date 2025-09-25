const CourseDetails = () => {
  return (
    <div className="bg-foreground">
      <img
        src="https://placehold.co/400"
        alt="course-details-image"
        className="object-cover object-content w-full h-[40vh]"
      />

      <div className="container text-white py-18 flex flex-col gap-4">
        <h3 className="font-telegraf-bold text-xl md:text-5xl">Couse Title</h3>
        <p className="font-telegraf-regular text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          dignissimos, sequi voluptas quis, quod dolores labore esse mollitia,
          eligendi distinctio pariatur itaque nisi voluptates quam? Illo
          sapiente cupiditate esse neque!
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
