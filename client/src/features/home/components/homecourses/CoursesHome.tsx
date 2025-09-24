import LOGOPYTHON from "/img/python-logo.svg";
import LOGOTENSOR from "/img/tensorflow-logo.png";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const courseContent = [
  {
    id: 1,
    title: "Course 1 title",
    desc: "Brief Intro about your courses and explain about your courses",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Course 2 title",
    desc: "Brief Intro about your courses and explain about your courses",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Course 3 title",
    desc: "Brief Intro about your courses and explain about your courses",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Course 4 title",
    desc: "Brief Intro about your courses and explain about your courses",
    image: "https://placehold.co/600x400",
  },
];

const CoursesHome = () => {
  return (
    <section id="COURSES">
      <div className="container py-20">
        <div className="w-full">
          <div className="flex items-center justify-between font-telegraf-bold">
            <div className="flex items-center gap-2">
              <img src={LOGOPYTHON} width={55} height={55} alt="python logo" />
              <img src={LOGOTENSOR} width={70} height={70} alt="python logo" />
            </div>
            <h1 className="text-3xl md:text-7xl text-primary">COURSES</h1>
          </div>
          {/* underline */}
          <hr className="h-[3px] w-full bg-primary my-4" />

          {/* courses card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-18">
            {courseContent.map(({ id, title, desc, image }) => (
              <Card className="font-telegraf-bold" key={id}>
                <CardHeader className="text-center space-y-2 px-4">
                  <img
                    src={image}
                    alt="courses content"
                    className="object-cover object-center max-w-full inline-block rounded"
                  />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardFooter className="mx-auto px-4">
                  <Link to={`/course-details/${id}`}>
                    <Button
                      type="button"
                      size={"sm"}
                      className="cursor-pointer border border-primary hover:bg-transparent hover:text-primary rounded-3xl"
                    >
                      course details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-xl text-primary font-telegraf-bold mt-18">
            Upgrade your career to be ready for AI world !
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesHome;
