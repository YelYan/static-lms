import { Button } from "@/components/ui/button";
import LOGO from "/img/skilltech-white.png";
import useResponsive from "@/shared/hooks/useResponsive";

const EngineeringAIAbout = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-7xl">OUR ENGINEERING AI</h1>
      </div>
      {/* underline */}
      <hr className="h-[3px] w-full bg-foreground my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* video */}
        <div className="h-fit">
          <img
            src={LOGO}
            alt="AI structural engineering course video"
            className="object-cover object-center h-fit rounded-lg"
          />
        </div>
        {/* explore courses */}
        <div className="flex flex-col iems-center gap-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-5xl">LET'S</h1>
            <h1 className="text-3xl md:text-5xl">LEARN</h1>
            <h1 className="text-3xl md:text-5xl">NOW</h1>
          </div>
          <Button
            type="button"
            className="border border-primary hover:bg-transparent hover:text-primary cursor-pointer rounded-4xl py-5 mx-auto"
          >
            <a href="#COURSES" className="flex flex-col gap-1">
              EXPLORE COURSES
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

const DesktopAboutHome = () => {
  return (
    <div className="container py-20">
      <div className="w-full font-telegraf-bold">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-7xl">WHAT WE TEACH?</h1>
          <p>LOGO</p>
        </div>
        {/* underline */}
        <hr className="h-[3px] w-full bg-foreground my-4" />
        {/* about  */}
        <div className="font-telegraf-bold">
          <div className="relative grid place-content-center h-lvh">
            <div className="absolute top-20 left-40 border-3 border-primary rounded-2xl py-5 px-10 text-white w-3xs">
              <p className="text-center">
                PYTHON FOR <br />
                ENGINEERING <br />
                DESIGN
              </p>
            </div>
            <div className="absolute bottom-40 left-40 border-3 border-primary rounded-2xl py-5 px-10 text-white w-3xs">
              <p className="text-center">
                PYTHON FOR <br />
                AUTOMATION IN <br />
                ENGINEERING TASK
              </p>
            </div>
            <p>testing</p>
            <div className="absolute top-20  right-40 border-3 border-primary rounded-2xl py-5 px-10 text-white w-3xs">
              <p className="text-center">
                MACHINE LEARNING <br />
                & DEEP LEARNING <br />
                FOR STRUCTURAL <br />
                ENGINEER
              </p>
            </div>
            <div className="absolute bottom-30 right-40 border-3 border-primary rounded-2xl py-5 px-10 text-white w-3xs">
              <p className="text-center">
                GENERATIVE AI <br />
                FOR STRUCTURAL <br />
                ENGINEER
              </p>
            </div>
          </div>
        </div>

        {/* about home second part */}
        <EngineeringAIAbout />
      </div>
    </div>
  );
};

const MobileTabletAboutHome = () => {
  return (
    <div className="container py-20">
      <div className="w-full font-telegraf-bold">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-7xl">WHAT WE TEACH?</h1>
          <p>LOGO</p>
        </div>
        {/* underline */}
        <hr className="h-[3px] w-full bg-foreground my-4" />
        {/* about  */}
        <div className="font-telegraf-bold py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center align-middle gap-4">
            <div className="border-3 border-primary rounded-2xl p-5 text-white w-3xs h-auto">
              <p className="text-center w-full h-full">
                PYTHON FOR <br />
                ENGINEERING <br />
                DESIGN
              </p>
            </div>
            <div className=" border-3 border-primary rounded-2xl p-5 text-white w-3xs">
              <p className="text-center">
                PYTHON FOR <br />
                AUTOMATION IN <br />
                ENGINEERING TASK
              </p>
            </div>

            <div className="border-3 border-primary rounded-2xl p-5 text-white w-3xs">
              <p className="text-center">
                MACHINE LEARNING <br />
                & DEEP LEARNING <br />
                FOR STRUCTURAL <br />
                ENGINEER
              </p>
            </div>
            <div className="border-3 border-primary rounded-2xl p-5 text-white w-3xs">
              <p className="text-center">
                GENERATIVE AI <br />
                FOR STRUCTURAL <br />
                ENGINEER
              </p>
            </div>
          </div>
        </div>

        {/* about home second part */}
        <EngineeringAIAbout />
      </div>
    </div>
  );
};

const AboutHome = () => {
  const { mobileResponsive, desktopResponsive, tabletResponsive } =
    useResponsive();
  return (
    <section id="ABOUT" className="bg-foreground text-white">
      {desktopResponsive && <DesktopAboutHome />}
      {(mobileResponsive || tabletResponsive) && <MobileTabletAboutHome />}
    </section>
  );
};

export default AboutHome;
