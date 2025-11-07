import { Button } from "@/components/ui/button";
import LOGO from "/img/skilltech-white.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PYTHONLOGO from "/img/python-logo.svg";

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
        <div className="flex items-center justify-center">
          <h1 className="text-2xl md:text-7xl">WHAT WE TEACH?</h1>
        </div>
        {/* about  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 ">
          <Card className="bg-[#000C31] border-none p-4 h-[400px]">
            <CardHeader>
              <img
                src={PYTHONLOGO}
                alt=""
                width={90}
                height={90}
                className="mx-auto object-cover"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-center p-5">
              <h3 className="text-xl md:text-2xl text-white">
                PYTHON FOR ENGINEERING <br /> DESIGN
              </h3>
              <h3 className="text-xl md:text-2xl text-white">
                PYTHON FOR AUTOMATION <br /> IN ENGINEERING TASK
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-[#000C31] border-none p-4">
            <CardHeader>
              <img
                src={PYTHONLOGO}
                alt=""
                width={90}
                height={90}
                className="mx-auto object-cover"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-center p-5">
              <h3 className="text-xl md:text-2xl text-white">
                MACHINE LEARNING <br />& DEEP LEARNING
              </h3>
              <h3 className="text-xl md:text-2xl text-white">
                GENERATIVE AI FOR <br /> STRUCTURAL ENGINEER
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* about home second part */}
        <EngineeringAIAbout />
      </div>
    </div>
  );
};

const AboutHome = () => {
  return (
    <section id="ABOUT" className="bg-foreground text-white">
      <DesktopAboutHome />
    </section>
  );
};

export default AboutHome;
