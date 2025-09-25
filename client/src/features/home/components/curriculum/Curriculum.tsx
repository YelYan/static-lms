import { Button } from "@/components/ui/button";
import LOGOPYTHON from "/img/python-logo.svg";

const curriculumContent = [
  {
    id: 1,
    title: "Course 1",
    subTitle: "Python For strucutral Engineering Analysis & design",
    content: [
      "Introduction",
      "Basic Python",
      "Intermediate Python",
      "Object Oriented Programming",
      "Reinforced Concrete Design using  Python",
      "Steel Connection Design Using Python",
      "Python for Structrual Analysis",
      "Real World Project",
    ],
  },
  {
    id: 2,
    title: "Course 2",
    subTitle: "Python For Automation in strucutral Engineering tasks",
    content: [
      "Introduction",
      "Basic Python",
      "Intermediate Python",
      "Object Oriented Programming",
      "Reinforced Concrete Design using  Python",
      "Steel Connection Design Using Python",
      "Python for Structrual Analysis",
      "Real World Project",
    ],
  },
  {
    id: 3,
    title: "Course 3",
    subTitle: "Python For strucutral Engineering Analysis & design",
    content: [
      "Introduction",
      "Basic Python",
      "Intermediate Python",
      "Object Oriented Programming",
      "Reinforced Concrete Design using  Python",
      "Steel Connection Design Using Python",
      "Python for Structrual Analysis",
      "Real World Project",
    ],
  },
  {
    id: 4,
    title: "Course 4",
    subTitle: "Python For Automation in strucutral Engineering tasks",
    content: [
      "Introduction",
      "Basic Python",
      "Intermediate Python",
      "Object Oriented Programming",
      "Reinforced Concrete Design using  Python",
      "Steel Connection Design Using Python",
      "Python for Structrual Analysis",
      "Real World Project",
    ],
  },
];

const Curriculum = () => {
  return (
    <section id="CURRICULUM">
      <div className="container py-20">
        <div className="w-full">
          <div className="flex items-center justify-between font-telegraf-bold">
            <h1 className="text-3xl md:text-7xl text-primary">CURRICULUM</h1>
            <img src={LOGOPYTHON} width={55} height={55} alt="python logo" />
          </div>
          {/* underline */}
          <hr className="h-[3px] w-full bg-primary my-4" />

          {/* curruculum */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-4 mt-20">
            {curriculumContent.map((curr) => {
              return (
                <div
                  className="px-4 pb-4 md:pb-0 grid gap-4 border-b md:border-b-0 md:border-r-2 border-primary"
                  key={curr.id}
                >
                  <h3 className="font-telegraf-bold text-primary text-xl">
                    {curr.title}
                  </h3>
                  <p className="font-telegraf-bold text-sm">{curr.subTitle}</p>

                  <ul className="grid gap-1 font-telegraf-regular text-xs">
                    {curr.content.map((c, index: number) => (
                      <li className="list-disc" key={index}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="grid place-items-center w-full mt-20">
            <Button
              size={"lg"}
              className="font-telegraf-bold cursor-pointer text-white rounded-3xl border border-primary hover:bg-transparent hover:text-primary"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
