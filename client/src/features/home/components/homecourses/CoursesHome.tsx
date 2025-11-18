import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardFooter,
//   CardDescription,
// } from "@/components/ui/card";
// import { Dialog, DialogTrigger } from "@/components/ui/dialog";

// import CourseDialog from "./CourseDialog";

// Detailed course content for each module
// const courseContent = [
//   {
//     id: 1,
//     title: "Module 1: Getting Started with Python",
//     desc: "Master Python fundamentals and build a strong programming foundation",
//     image: "https://placehold.co/600x400",
//     course_link: "",
//     details: {
//       overview:
//         "This module introduces you to the world of Python programming, from setting up your development environment to writing your first programs and understanding core programming concepts.",
//       topics: [
//         "Getting started with Python",
//         "• Course Introduction and Learning Path",
//         "• Welcome to the Pythonic World",
//         "• Setting Up Your Python Environment (Anaconda, VS Code, Jupyter, Google Colab)",
//         "• Your First Python Program",
//         "• Understanding Variables and Data Types",
//         "• How to Learn Python in AI era",
//         "Control Flow in Python",
//         "• Conditionals in Python (if, elif, else)",
//         "• Comparison and Logical Operators",
//         "• Loops in Python (for and while loops)",
//         "• Break, Continue, and Pass Statements",
//         "• Practical Exercise: Simple Engineering Calculators",
//         "Functions and Data Structures",
//         "• Introduction to Functions",
//         "• Function Parameters and Return Values",
//         "• Lists, Tuples, and Dictionaries",
//         "• Working with Strings",
//         "• List Comprehensions (Introduction)",
//         "• Practical Exercise: Organizing Structural Data",
//         "Working with Files and Error Handling",
//         "• Reading and Writing Text Files",
//         "• Working with CSV Files",
//         "• Exception Handling Basics",
//         "• Try, Except, Finally Blocks",
//         "• Practical Exercise: Reading Load Data from Files",
//         "Practice and Mini-Project",
//         "• Code Review and Best Practices",
//         "• Debugging Techniques",
//         "• Mini-Project: Load Combination Calculator",
//         "• Module Assessment",
//       ],
//       duration: "6-8 hours",
//       level: "Beginner",
//       projects: ["Load Combination Calculator"],
//     },
//   },
//   {
//     id: 2,
//     title: "Module 2: Structural Design with Python",
//     desc: "Apply Python to solve structural engineering problems and design calculations",
//     image: "https://placehold.co/600x400",
//     course_link: "",
//     details: {
//       overview:
//         "Transform your structural design workflow from manual Excel calculations to automated Python scripts. Learn to design reinforced concrete sections, steel members, and connections using industry codes and standards.",
//       topics: [
//         "Introduction: From Excel to Python",
//         "• Transitioning Your Design Workflow",
//         "• Setting Up Your Design Environment",
//         "",
//         "Reinforced Concrete Section Design with Python",
//         "• ACI 318 / Eurocode 2 Overview",
//         "• Flexural Design of Rectangular Beams",
//         "• Shear Design of RC Beams",
//         "• Column Design Fundamentals",
//         "",
//         "Steel Member Design with Python",
//         "• AISC 360 / Eurocode 3 Overview",
//         "• Tension Member Design",
//         "• Compression Member Design",
//         "• Flexural Member Design",
//         "",
//         "Steel Connection Design with Python",
//         "• Bolted Connection Design",
//         "• Welded Connection Design",
//         "• Simple Connection Analysis",
//       ],
//       duration: "8-10 hours",
//       level: "Intermediate",
//       projects: [
//         "RC Beam Design Calculator",
//         "Steel Column Capacity Analysis",
//         "Connection Design Tool",
//       ],
//     },
//   },
//   {
//     id: 3,
//     title: "Module 3: Automation with ETABS API",
//     desc: "Automate ETABS workflows using Python API for efficient structural analysis",
//     image: "https://placehold.co/600x400",
//     course_link: "",
//     details: {
//       overview:
//         "Master the ETABS API to automate structural modeling, analysis, and result extraction, significantly reducing manual work and increasing productivity.",
//       topics: [
//         "Introduction to Automation and APIs",
//         "• What is Automation and Why It Matters?",
//         "• Introduction to APIs (Application Programming Interfaces)",
//         "• ETABS OAPI Overview",
//         "• Setting Up ETABS API Environment",
//         "• Your First ETABS Python Script",
//         "Basic FEM Workflow",
//         "• Understanding the FEM Process",
//         "• ETABS Model Structure",
//         "• Creating Simple Models via API",
//         "• Running Analysis Programmatically",
//         "• Basic Result Extraction",
//         "Automated FEM Preprocessing Workflow",
//         "• Automated Model Generation from Excel/CSV",
//         "• Creating Grid Systems",
//         "• Defining Materials and Sections",
//         "• Assigning Loads Automatically",
//         "• Parametric Model Creation",
//         "Automated FEM Postprocessing Workflow",
//         "• Extracting Analysis Results",
//         "• Processing Member Forces",
//         "• Generating Design Reports",
//         "• Exporting Results to Excel",
//         "• Creating Custom Output Files",
//         "Data and Result Visualization",
//         "• Data Visualization with Pandas",
//         "• Creating Engineering Charts with Matplotlib",
//         "• Automated Report Generation",
//       ],
//       duration: "10-12 hours",
//       level: "Advanced",
//       projects: ["Complete ETABS Workflow Automation"],
//     },
//   },
//   {
//     id: 4,
//     title: "Module 4: Advanced Topics",
//     desc: "Explore advanced Python applications in engineering and AI integration",
//     image: "https://placehold.co/600x400",
//     course_link: "",
//     details: {
//       overview:
//         "Dive into advanced Python topics including machine learning, data analysis, and advanced engineering applications to prepare for the AI-driven future.",
//       topics: [
//         "OOP Fundamentals",
//         "• What is Object-Oriented Programming?",
//         "• Classes and Objects",
//         "• Attributes and Methods",
//         "• The init Method",
//         "• Example: Creating a Beam Class",
//         "Introduction to Web Apps for Engineers",
//         "• Why Create Engineering Software?",
//         "• Introduction to Streamlit",
//         "• Creating Your First Engineering App",
//         "• User Input and Output Design",
//         "• Deploying Simple Calculations",
//         "Building Your Personal Concrete Design Software",
//         "• Planning Your Application",
//         "• Creating the Calculation Engine",
//         "• Designing the User Interface with Streamlit",
//         "• Input Validation and Error Handling",
//         "• Testing Your Application",
//         "Deployment and Sharing",
//         "• Introduction to Git and Version Control",
//         "• Preparing Your App for Deployment",
//         "• Deploying to Streamlit Cloud",
//         "• Sharing Your Software with Colleagues",
//         "• Best Practices for Engineering Software",
//         "Future of Structural Engineering and Next Steps",
//         "• AI and Machine Learning in Structural Engineering",
//         "• Emerging Technologies and Trends",
//         "• Building Your Continuous Learning Path",
//         "• Course Wrap-Up and Certificate",
//         "• Preview of Upcoming Advanced Courses",
//       ],
//       duration: "12-15 hours",
//       level: "Advanced",
//       projects: [],
//     },
//   },
// ];

const CoursesHome = () => {
  const navigate = useNavigate();
  return (
    <section id="COURSES" className="bg-accent-foreground">
      <div className="container py-20">
        <div className="w-full">
          <div className="flex items-center justify-between font-telegraf-bold">
            <div className="flex items-center gap-2"></div>
            <h1 className="text-3xl md:text-5xl text-white">COURSES MODULES</h1>
          </div>
          {/* underline */}
          <hr className="h-[3px] w-full bg-white my-4" />

          {/* courses card */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-18">
            {courseContent.map(({ id, title, desc, image, details }) => (
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        size={"sm"}
                        className="cursor-pointer border border-primary hover:bg-transparent hover:text-primary rounded-3xl"
                      >
                        course details
                      </Button>
                    </DialogTrigger>
                    <CourseDialog
                      id={id}
                      title={title}
                      description={desc}
                      details={details}
                    />
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div> */}
          {/* courses card */}
          <div className="space-y-8 mt-8">
            {/* course 1 */}
            <div className="bg-gray-700 rounded-md p-8">
              <h2 className="font-telegraf-bold text-xl text-white uppercase mb-4">
                Python for structrual engineers course
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-telegraf-regular text-white">
                {/* module 1 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 1</h4>
                    <p>Introduction to Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Course Introduction</li>
                    <li>Welcome to the Pythonic World</li>
                    <li>Data Types in Python</li>
                    <li>Conditionals in Python</li>
                    <li>Loop in Python</li>
                    <li>Comprehesions in Python</li>
                    <li>Generator and Decorator </li>
                    <li>Object Oriented Programming with Python</li>
                    <li>File and Exceptional Handling in python</li>
                  </ul>
                </div>
                {/* module 2 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 2</h4>
                    <p>Structural Design with Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction : from Excel to Python</li>
                    <li>Reinforced Concrete Section Design wih Python </li>
                    <li>Steel member Design wih Python</li>
                    <li>Steel Connection Design with python</li>
                    <li>Structural Analysis with Python</li>
                  </ul>
                </div>
                {/* module 3 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 3</h4>
                    <p>
                      Automation Structural FEM analysis workflow with Python
                      (ETABS)
                    </p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>What is automation & API?</li>
                    <li>ETABS OAPI</li>
                    <li>Basic FEM workflow</li>
                    <li>Automated FEM preprocessing workflow with python</li>
                    <li>
                      Data and result Visualization with python and pandas,
                      Matplotlib
                    </li>
                  </ul>
                </div>
                {/* module 4 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 4</h4>
                    <p>Advanced topic</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction</li>
                    <li>
                      Developing personal use concrete desigin concrete software{" "}
                    </li>
                    <li>Creating the UI with streamlit</li>
                    <li>
                      Deploying your software to the cloud to share for everyone
                    </li>
                    <li>Future of structural engineering in AI era</li>
                    <li>Upcoming course</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8 font-telegraf-bold">
                <div className="lg:flex-shrink-0">
                  <p className="text-white text-lg lg:text-xl font-telegraf font-bold px-6 py-4 rounded-lg inline-block">
                    Lifetime access <br />
                    <span className="text-2xl">$100</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:w-auto">
                  <Button variant={"primary"}>Start Learning Now</Button>
                  <Button
                    variant={"primary"}
                    className="bg-pink-400 border border-pink-400"
                  >
                    Explore Detail
                  </Button>
                </div>
              </div>
            </div>
            {/* course 2 */}
            <div className="bg-gray-700 rounded-md p-8">
              <h2 className="font-telegraf-bold text-xl text-white uppercase mb-4">
                AI & machine leanring for structrual engineers course
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-telegraf-regular text-white">
                {/* module 1 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 1</h4>
                    <p>Introduction to Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Course Introduction</li>
                    <li>Welcome to the Pythonic World</li>
                    <li>Data Types in Python</li>
                    <li>Conditionals in Python</li>
                    <li>Loop in Python</li>
                    <li>Comprehesions in Python</li>
                    <li>Generator and Decorator </li>
                    <li>Object Oriented Programming with Python</li>
                    <li>File and Exceptional Handling in python</li>
                  </ul>
                </div>
                {/* module 2 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 2</h4>
                    <p>Structural Design with Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction : from Excel to Python</li>
                    <li>Reinforced Concrete Section Design wih Python </li>
                    <li>Steel member Design wih Python</li>
                    <li>Steel Connection Design with python</li>
                    <li>Structural Analysis with Python</li>
                  </ul>
                </div>
                {/* module 3 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 3</h4>
                    <p>
                      Automation Structural FEM analysis workflow with Python
                      (ETABS)
                    </p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>What is automation & API?</li>
                    <li>ETABS OAPI</li>
                    <li>Basic FEM workflow</li>
                    <li>Automated FEM preprocessing workflow with python</li>
                    <li>
                      Data and result Visualization with python and pandas,
                      Matplotlib
                    </li>
                  </ul>
                </div>
                {/* module 4 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 4</h4>
                    <p>Advanced topic</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction</li>
                    <li>
                      Developing personal use concrete desigin concrete software{" "}
                    </li>
                    <li>Creating the UI with streamlit</li>
                    <li>
                      Deploying your software to the cloud to share for everyone
                    </li>
                    <li>Future of structural engineering in AI era</li>
                    <li>Upcoming course</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8 font-telegraf-bold">
                <div className="lg:flex-shrink-0">
                  <p className="text-white text-lg lg:text-xl font-telegraf font-bold px-6 py-4 rounded-lg inline-block">
                    Lifetime access <br />
                    <span className="text-2xl">$100</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:w-auto">
                  <Button
                    variant={"primary"}
                    disabled
                    className="bg-blue-400 pointer-events-none"
                  >
                    Coming Soon
                  </Button>
                  <Button
                    variant={"primary"}
                    className="bg-pink-400 border border-pink-400"
                  >
                    Explore Detail
                  </Button>
                </div>
              </div>
            </div>
            {/* course 2 */}
            <div className="bg-gray-700 rounded-md p-8">
              <h2 className="font-telegraf-bold text-xl text-white uppercase mb-4">
                AI & machine leanring for structrual engineers course
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-telegraf-regular text-white">
                {/* module 1 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 1</h4>
                    <p>Introduction to Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Course Introduction</li>
                    <li>Welcome to the Pythonic World</li>
                    <li>Data Types in Python</li>
                    <li>Conditionals in Python</li>
                    <li>Loop in Python</li>
                    <li>Comprehesions in Python</li>
                    <li>Generator and Decorator </li>
                    <li>Object Oriented Programming with Python</li>
                    <li>File and Exceptional Handling in python</li>
                  </ul>
                </div>
                {/* module 2 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 2</h4>
                    <p>Structural Design with Python</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction : from Excel to Python</li>
                    <li>Reinforced Concrete Section Design wih Python </li>
                    <li>Steel member Design wih Python</li>
                    <li>Steel Connection Design with python</li>
                    <li>Structural Analysis with Python</li>
                  </ul>
                </div>
                {/* module 3 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 3</h4>
                    <p>
                      Automation Structural FEM analysis workflow with Python
                      (ETABS)
                    </p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>What is automation & API?</li>
                    <li>ETABS OAPI</li>
                    <li>Basic FEM workflow</li>
                    <li>Automated FEM preprocessing workflow with python</li>
                    <li>
                      Data and result Visualization with python and pandas,
                      Matplotlib
                    </li>
                  </ul>
                </div>
                {/* module 4 */}
                <div className="space-y-4">
                  <div className="space-y-1 mt-3">
                    <h4>Module 4</h4>
                    <p>Advanced topic</p>
                  </div>

                  <ul className="list-disc pl-4 text-sm">
                    <li>Introduction</li>
                    <li>
                      Developing personal use concrete desigin concrete software{" "}
                    </li>
                    <li>Creating the UI with streamlit</li>
                    <li>
                      Deploying your software to the cloud to share for everyone
                    </li>
                    <li>Future of structural engineering in AI era</li>
                    <li>Upcoming course</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8 font-telegraf-bold">
                <div className="lg:flex-shrink-0">
                  <p className="text-white text-lg lg:text-xl font-telegraf font-bold px-6 py-4 rounded-lg inline-block">
                    Lifetime access <br />
                    <span className="text-2xl">$100</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:w-auto">
                  <Button
                    variant={"primary"}
                    disabled
                    className="bg-blue-400 pointer-events-none"
                  >
                    Coming Soon
                  </Button>
                  <Button
                    variant={"primary"}
                    onClick={() => navigate(`/course-details/1`)}
                    className="bg-pink-400 border border-pink-400"
                  >
                    Explore Detail
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white text-center py-40 font-telegraf-bold space-y-8">
            <p className="text-2xl md:text-6xl">3 Course Bundler</p>
            <p className="text-xl md:text-5xl">
              $599/ <span className="line-through opacity-50">$698</span>
            </p>
            <Button
              variant={"primary"}
              className="text-lg rounded-3xl"
              size={"lg"}
            >
              Start Learning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHome;
