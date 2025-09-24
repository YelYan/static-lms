import useResponsive from "@/shared/hooks/useResponsive";

const DesktopGoals = () => {
  return (
    <div className="container py-20 grid grid-cols-[1fr_2fr] gap-10 items-center h-lvh">
      <div className="h-full p-8 border-r-2 border-primary grid place-content-center w-full">
        <h1 className="font-telegraf-bold text-2xl md:text-7xl text-center text-primary">
          Future is <br /> here!
        </h1>
      </div>
      <div className="px-8">
        <ul className="space-y-14 font-telegraf-bold text-xl md:text-2xl">
          <li>No programming experience required</li>
          <li>Self Paced Online Courses</li>
          <li>Life Time Access</li>
          <li>100% Satisfaction Guarantee - 30 days refund!</li>
          <li className="text-primary">Real World Engineering Application </li>
          <li>Ready for Academic Research Work</li>
        </ul>
      </div>
    </div>
  );
};

const MobileTabletGoals = () => {
  return (
    <div className="container py-10 grid grid-cols-1 gap-10 items-center h-lvh">
      <div className="h-full p-8 border-b-2 border-primary grid place-content-center w-full">
        <h1 className="font-telegraf-bold text-5xl text-center text-primary">
          Future is <br /> here!
        </h1>
      </div>
      <div className="px-3">
        <ul className="flex flex-col gap-4 font-telegraf-bold text-xl md:text-2xl">
          <li className="list-disc">No programming experience required</li>
          <li className="list-disc">Self Paced Online Courses</li>
          <li className="list-disc">Life Time Access</li>
          <li className="list-disc">
            100% Satisfaction Guarantee - 30 days refund!
          </li>
          <li className="text-primary list-disc">
            Real World Engineering Application
          </li>
          <li className="list-disc">Ready for Academic Research Work</li>
        </ul>
      </div>
    </div>
  );
};

const Goal = () => {
  const { mobileResponsive, tabletResponsive, desktopResponsive } =
    useResponsive();

  return (
    <section id="GOAL">
      {desktopResponsive && <DesktopGoals />}
      {(mobileResponsive || tabletResponsive) && <MobileTabletGoals />}
    </section>
  );
};

export default Goal;
