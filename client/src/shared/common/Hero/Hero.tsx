import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="HERO"
      className="container min-h-[70vh] md:min-h-screen grid place-content-center"
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-telegraf-bold text-center text-3xl md:text-6xl">
          <span className="text-primary">Ai</span>
          &nbsp;& <span className="text-primary">Machine Learning</span>
          <br />
          for Structural Engineers
        </h1>

        <div className="space-y-2 font-telegraf-regular text-center italic font-bold">
          <p className="text-lg md:text-2xl">
            Let's Learn Artifical intelligence
          </p>
          <p className="text-lg md:text-2xl">
            Machine Learning & Automation for
          </p>
          <p className="text-lg md:text-2xl">
            our Structural engineering tasks
          </p>
        </div>

        <Button
          type="button"
          className="cursor-pointer rounded-3xl font-telegraf-regular border border-primary hover:bg-primary-300 hover:bg-transparent hover:text-primary"
        >
          LEARN NOW
        </Button>
      </div>
    </section>
  );
};

export default Hero;
