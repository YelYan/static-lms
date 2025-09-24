import AboutHome from "../components/homeabout/AboutHome";
import Goal from "../components/goal/Goal";
import Hero from "../components/Hero/Hero";
import CoursesHome from "../components/homecourses/CoursesHome";
import Curriculum from "../components/curriculum/Curriculum";
import Reviews from "../components/reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <Goal />
      <CoursesHome />
      <Curriculum />
      <Reviews />
    </>
  );
};

export default Home;
