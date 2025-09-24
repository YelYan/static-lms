import AboutHome from "../components/homeabout/AboutHome";
import Goal from "../components/goal/Goal";
import Hero from "../components/Hero/Hero";
import CoursesHome from "../components/homecourses/CoursesHome";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <Goal />
      <CoursesHome />
    </>
  );
};

export default Home;
