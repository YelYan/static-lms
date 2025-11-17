import useResponsive from "@/shared/hooks/useResponsive";

const DesktopGoals = () => {
  return (
    <div className="container py-20 grid grid-cols-[1fr_2fr] gap-10 items-center h-lvh">
      <div className="h-full p-8 grid place-content-center w-full">
        <h1 className="font-telegraf-bold text-2xl md:text-7xl text-center text-white">
          Future is <br /> here!
        </h1>
      </div>
      <div className="px-8">
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          controls
        >
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

const MobileTabletGoals = () => {
  return (
    <div className="container py-10 grid grid-cols-1 gap-10 items-center h-lvh">
      <div className="h-full p-8 grid place-content-center w-full">
        <h1 className="font-telegraf-bold text-5xl text-center text-primary">
          Future is <br /> here!
        </h1>
      </div>
      <div className="">
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          controls
        >
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

const Goal = () => {
  const { mobileResponsive, tabletResponsive, desktopResponsive } =
    useResponsive();

  return (
    <section id="GOAL" className="bg-secondary-foreground">
      {desktopResponsive && <DesktopGoals />}
      {(mobileResponsive || tabletResponsive) && <MobileTabletGoals />}
    </section>
  );
};

export default Goal;
