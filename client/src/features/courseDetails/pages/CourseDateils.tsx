import React, { useState, useEffect } from "react";
import {
  Lock,
  PlayCircle,
  CheckCircle2,
  Clock,
  Users,
  Star,
  BookOpen,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import type { Module, Course } from "@/types/course.types";

const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<Course>({
    id: "1",
    title: "Complete React & TypeScript Masterclass 2024",
    description:
      "Master React, TypeScript, and modern web development with hands-on projects and real-world applications.",
    instructor: "John Doe",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    duration: "12 hours",
    studentsEnrolled: 1234,
    rating: 4.8,
    progress: 0,
    modules: [
      {
        id: "1",
        title: "Module 1: Introduction to React & TypeScript",
        description:
          "Learn the fundamentals of React and TypeScript, setting up your development environment.",
        duration: "3 hours",
        lessons: 8,
        isCompleted: false,
        isLocked: false,
        videoUrl: "/videos/module1.mp4",
      },
      {
        id: "2",
        title: "Module 2: Advanced Component Patterns",
        description:
          "Dive deep into advanced React patterns, hooks, and component composition.",
        duration: "3 hours",
        lessons: 10,
        isCompleted: false,
        isLocked: true,
        videoUrl: "/videos/module2.mp4",
      },
      {
        id: "3",
        title: "Module 3: State Management & Data Fetching",
        description:
          "Master state management with Context API, Redux, and modern data fetching techniques.",
        duration: "3 hours",
        lessons: 9,
        isCompleted: false,
        isLocked: true,
        videoUrl: "/videos/module3.mp4",
      },
      {
        id: "4",
        title: "Module 4: Testing & Deployment",
        description:
          "Learn testing strategies and deploy your applications to production.",
        duration: "3 hours",
        lessons: 7,
        isCompleted: false,
        isLocked: true,
        videoUrl: "/videos/module4.mp4",
      },
    ],
  });

  const [activeModule, setActiveModule] = useState<string>("1");

  useEffect(() => {
    // Calculate progress based on completed modules
    const completedModules = course.modules.filter((m) => m.isCompleted).length;
    const progress = (completedModules / course.modules.length) * 100;
    setCourse((prev) => ({ ...prev, progress }));
  }, [course.modules]);

  const handleModuleComplete = (moduleId: string) => {
    setCourse((prev) => {
      const updatedModules = prev.modules.map((module, index) => {
        if (module.id === moduleId) {
          // Mark current module as completed
          module = { ...module, isCompleted: true };
        }
        // Unlock next module if current module is completed
        if (
          index > 0 &&
          prev.modules[index - 1].id === moduleId &&
          index < prev.modules.length
        ) {
          module = { ...module, isLocked: false };
        }
        return module;
      });
      return { ...prev, modules: updatedModules };
    });
  };

  const handleModuleClick = (moduleId: string, isLocked: boolean) => {
    if (!isLocked) {
      setActiveModule(moduleId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Course
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6 text-white/90">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.studentsEnrolled} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span>Instructor:</span>
                <span className="font-semibold">{course.instructor}</span>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white/90 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="container mx-auto px-4 -mt-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Your Progress</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {course.modules.filter((m) => m.isCompleted).length} of{" "}
                  {course.modules.length} modules completed
                </p>
              </div>
              {course.progress === 100 && (
                <Trophy className="w-8 h-8 text-yellow-500" />
              )}
            </div>
            <Progress value={course.progress} className="h-3" />
          </CardContent>
        </Card>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="modules">Course Modules</TabsTrigger>
            <TabsTrigger value="about">About Course</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Modules List */}
              <div className="lg:col-span-2 space-y-4">
                {course.modules.map((module, index) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={index}
                    isActive={activeModule === module.id}
                    onModuleClick={handleModuleClick}
                    onModuleComplete={handleModuleComplete}
                  />
                ))}
              </div>

              {/* Module Preview */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Module Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {course.modules.find((m) => m.id === activeModule) && (
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          {course.modules.find((m) => m.id === activeModule)
                            ?.isLocked ? (
                            <Lock className="w-12 h-12 text-gray-400" />
                          ) : (
                            <PlayCircle className="w-12 h-12 text-gray-400" />
                          )}
                        </div>
                        <h4 className="font-semibold">
                          {
                            course.modules.find((m) => m.id === activeModule)
                              ?.title
                          }
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {
                            course.modules.find((m) => m.id === activeModule)
                              ?.description
                          }
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What you'll learn</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      Build modern web applications with React and TypeScript
                    </li>
                    <li>Master advanced React patterns and best practices</li>
                    <li>Implement efficient state management solutions</li>
                    <li>Write clean, maintainable, and testable code</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Basic understanding of HTML, CSS, and JavaScript</li>
                    <li>Familiarity with ES6+ features</li>
                    <li>A computer with internet connection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Module Card Component
interface ModuleCardProps {
  module: Module;
  index: number;
  isActive: boolean;
  onModuleClick: (moduleId: string, isLocked: boolean) => void;
  onModuleComplete: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  index,
  isActive,
  onModuleClick,
  onModuleComplete,
}) => {
  return (
    <Card
      className={cn(
        "transition-all cursor-pointer hover:shadow-lg",
        isActive && "ring-2 ring-blue-500",
        module.isLocked && "opacity-60"
      )}
      onClick={() => onModuleClick(module.id, module.isLocked)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",
              module.isCompleted
                ? "bg-green-500"
                : module.isLocked
                ? "bg-gray-400"
                : "bg-blue-500"
            )}
          >
            {module.isCompleted ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : module.isLocked ? (
              <Lock className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              {module.isLocked && (
                <Badge variant="secondary">
                  <Lock className="w-3 h-3 mr-1" />
                  Locked
                </Badge>
              )}
              {module.isCompleted && (
                <Badge className="bg-green-500">Completed</Badge>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {module.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{module.duration}</span>
                </div>
              </div>

              {!module.isLocked && !module.isCompleted && (
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onModuleComplete(module.id);
                  }}
                >
                  Mark Complete
                </Button>
              )}

              {!module.isLocked && module.isCompleted && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Review
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {module.isLocked && (
          <Alert className="mt-4">
            <Lock className="w-4 h-4" />
            <AlertDescription>
              Complete the previous module to unlock this content
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
