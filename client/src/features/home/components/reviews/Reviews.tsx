const contents = [
  {
    id: 1,
    img: "https://placehold.co/400",
  },
  {
    id: 2,
    img: "https://placehold.co/400",
  },
  {
    id: 3,
    img: "https://placehold.co/400",
  },
  {
    id: 4,
    img: "https://placehold.co/400",
  },
  {
    id: 5,
    img: "https://placehold.co/400",
  },
  {
    id: 6,
    img: "https://placehold.co/400",
  },
];

const Reviews = () => {
  return (
    <section id="REVIEW" className="bg-foreground py-20">
      <div className="container">
        <div className="flex items-center justify-between font-telegraf-bold">
          <h1 className="text-3xl md:text-7xl text-white">REVIEW</h1>
        </div>
        {/* underline */}
        <hr className="h-[1px] w-full bg-white my-4" />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 md:gap-4">
        <div className="grid grid-cols-3 gap-8 rounded-lg order-2 md:order-1">
          {contents.map((image) => (
            <img
              key={image.id}
              src={image.img}
              alt="review image"
              className="object-cover object-center rounded-2xl"
            />
          ))}
        </div>
        <div className="grid place-content-center text-white font-telegraf-bold order-1 md:order-2">
          <h3 className="text-center text-3xl">
            FEEDBACK <br /> & <br />
            REVIEWS
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
