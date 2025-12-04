// src/pages/home/components/CoursesHome.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useAuth } from "@/shared/hooks/useAuth";
import { useCourses } from "@/shared/hooks/useCourses";
import { CheckCircle, Lock, Play } from "lucide-react";
import type { Course, Module } from "@/types/firebase";

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1 mt-3">
        <h4>{module.title}</h4>
        <p>{module.subtitle}</p>
      </div>
      <ul className="list-disc pl-4 text-sm">
        {module.lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
};

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, hasPurchased } = useAuth();
  const isPurchased = hasPurchased(course.id);

  const handleStartLearning = () => {
    if (!course.isAvailable) return;

    if (isPurchased) {
      navigate(`/learn/${course.id}`);
    } else if (isAuthenticated) {
      navigate(`/checkout/${course.id}`);
    } else {
      navigate("/login", { state: { from: `/checkout/${course.id}` } });
    }
  };

  const handleExploreDetails = () => {
    navigate(`/course-details/${course.id}`);
  };

  return (
    <div className="bg-gray-700 rounded-md p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h2 className="font-telegraf-bold text-xl text-white uppercase">
          {course.title}
        </h2>
        {isPurchased && (
          <span className="flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded shrink-0">
            <CheckCircle className="h-3 w-3" />
            Purchased
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-telegraf-regular text-white">
        {course.modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8 font-telegraf-bold">
        <div className="lg:flex-shrink-0">
          <p className="text-white text-lg lg:text-xl font-telegraf font-bold px-6 py-4 rounded-lg inline-block">
            Lifetime access <br />
            <span className="text-2xl">${course.price}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:w-auto">
          {isPurchased ? (
            <Button
              variant="primary"
              onClick={() => navigate(`/learn/${course.id}`)}
              className="bg-green-500 hover:bg-green-600"
            >
              <Play className="mr-2 h-4 w-4" />
              Continue Learning
            </Button>
          ) : course.isAvailable ? (
            <Button variant="primary" onClick={handleStartLearning}>
              {isAuthenticated ? (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Purchase Now
                </>
              ) : (
                "Start Learning Now"
              )}
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled
              className="bg-blue-400 pointer-events-none"
            >
              Coming Soon
            </Button>
          )}

          <Button
            variant="primary"
            onClick={handleExploreDetails}
            className="bg-pink-400 border border-pink-400 hover:bg-pink-500"
          >
            Explore Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const CoursesHomeSkeleton = () => {
  return (
    <div className="space-y-8 mt-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-700 rounded-md p-8 animate-pulse">
          <div className="h-6 bg-gray-600 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="space-y-4">
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((k) => (
                    <div
                      key={k}
                      className="h-2 bg-gray-600 rounded w-full"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const BundleSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBundlePurchase = () => {
    if (isAuthenticated) {
      navigate("/checkout/bundle");
    } else {
      navigate("/login", { state: { from: "/checkout/bundle" } });
    }
  };

  return (
    <div className="text-white text-center pt-20 pb-0 font-telegraf-bold space-y-8">
      <p className="text-2xl md:text-6xl">3 Course Bundle</p>
      <p className="text-xl md:text-5xl">
        $599/ <span className="line-through opacity-50">$698</span>
      </p>
      <div className="space-y-2">
        <Button
          variant="primary"
          className="text-lg rounded-3xl"
          size="lg"
          onClick={handleBundlePurchase}
        >
          {isAuthenticated ? "Purchase Bundle" : "Start Learning Now"}
        </Button>
        <p className="text-sm text-gray-400">Save $99 with the bundle!</p>
      </div>
    </div>
  );
};

const CoursesHome = () => {
  const { data: courses, isLoading, isError } = useCourses();

  return (
    <section id="COURSES" className="bg-accent-foreground">
      <div className="container pt-20 pb-10">
        <div className="w-full">
          <div className="flex items-center justify-between font-telegraf-bold">
            <div className="flex items-center gap-2"></div>
            <h1 className="text-3xl md:text-5xl text-white">COURSES MODULES</h1>
          </div>
          <hr className="h-[3px] w-full bg-white my-4" />

          {isLoading ? (
            <CoursesHomeSkeleton />
          ) : isError ? (
            <div className="text-center py-10">
              <p className="text-red-400 text-lg">
                Failed to load courses. Please try again.
              </p>
              <Button
                variant="primary"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          ) : (
            <div className="space-y-8 mt-8">
              {courses?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          <BundleSection />
        </div>
      </div>
    </section>
  );
};

export default CoursesHome;
