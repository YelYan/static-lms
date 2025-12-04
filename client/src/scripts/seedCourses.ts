import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const courses = [
  {
    id: "python-structural-engineers",
    title: "Python for Structural Engineers Course",
    description: "Master Python fundamentals and apply them to structural engineering",
    price: 100,
    isAvailable: true,
    thumbnail: "/images/python-course.jpg",
    modules: [
      {
        id: "module-1",
        title: "Module 1",
        subtitle: "Introduction to Python",
        lessons: [
          "Course Introduction",
          "Welcome to the Pythonic World",
          "Data Types in Python",
          "Conditionals in Python",
          "Loop in Python",
          "Comprehensions in Python",
          "Generator and Decorator",
          "Object Oriented Programming with Python",
          "File and Exceptional Handling in Python",
        ],
      },
      {
        id: "module-2",
        title: "Module 2",
        subtitle: "Structural Design with Python",
        lessons: [
          "Introduction: from Excel to Python",
          "Reinforced Concrete Section Design with Python",
          "Steel Member Design with Python",
          "Steel Connection Design with Python",
          "Structural Analysis with Python",
        ],
      },
      {
        id: "module-3",
        title: "Module 3",
        subtitle: "Automation Structural FEM Analysis Workflow with Python (ETABS)",
        lessons: [
          "What is Automation & API?",
          "ETABS OAPI",
          "Basic FEM Workflow",
          "Automated FEM Preprocessing Workflow with Python",
          "Data and Result Visualization with Python, Pandas, Matplotlib",
        ],
      },
      {
        id: "module-4",
        title: "Module 4",
        subtitle: "Advanced Topics",
        lessons: [
          "Introduction",
          "Developing Personal Use Concrete Design Software",
          "Creating the UI with Streamlit",
          "Deploying Your Software to the Cloud",
          "Future of Structural Engineering in AI Era",
          "Upcoming Course",
        ],
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "ai-ml-structural-engineers",
    title: "AI & Machine Learning for Structural Engineers Course",
    description: "Learn AI and ML techniques for structural engineering applications",
    price: 100,
    isAvailable: false,
    thumbnail: "/images/ai-course.jpg",
    modules: [
      {
        id: "module-1",
        title: "Module 1",
        subtitle: "Introduction to Machine Learning",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-2",
        title: "Module 2",
        subtitle: "Data Processing for Engineers",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-3",
        title: "Module 3",
        subtitle: "ML Models for Structural Analysis",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-4",
        title: "Module 4",
        subtitle: "Advanced AI Applications",
        lessons: ["Coming Soon"],
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "advanced-engineering",
    title: "Advanced Structural Engineering Course",
    description: "Deep dive into advanced structural engineering concepts",
    price: 100,
    isAvailable: false,
    thumbnail: "/images/advanced-course.jpg",
    modules: [
      {
        id: "module-1",
        title: "Module 1",
        subtitle: "Advanced Analysis",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-2",
        title: "Module 2",
        subtitle: "Performance-Based Design",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-3",
        title: "Module 3",
        subtitle: "Complex Structures",
        lessons: ["Coming Soon"],
      },
      {
        id: "module-4",
        title: "Module 4",
        subtitle: "Case Studies",
        lessons: ["Coming Soon"],
      },
    ],
    createdAt: new Date(),
  },
];

// Run this function to seed courses data
export const seedCourses = async () => {
  for (const course of courses) {
    await setDoc(doc(db, "courses", course.id), course);
    console.log(`✅ Added course: ${course.title}`);
  }
  console.log("🎉 All courses added!");
};


seedCourses();