import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  PlayCircle,
  CheckCircle2,
  Lock,
  Clock,
  FileText,
  Download,
  Menu,
  X,
  Home,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "../components/VideoPlayer";
import type { Course, Module, Lesson } from "@/types/course.types";

const CourseDetails: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [course, setCourse] = useState<Course>({
    id: "1",
    title: "Complete React & TypeScript Masterclass",
    description:
      "Master React, TypeScript, and modern web development with hands-on projects.",
    instructor: "John Doe",
    totalDuration: "12 hours",
    totalLessons: 45,
    progress: 0,
    modules: [
      {
        id: "1",
        title: "Getting Started",
        isCompleted: false,
        isExpanded: true,
        lessons: [
          {
            id: "1-1",
            title: "Course Introduction",
            duration: "5:30",
            videoUrl: "/video1.mp4",
            isCompleted: false,
            isLocked: false,
            description:
              "Welcome to the course! Learn what we will build together.",
            resources: [
              {
                id: "r1",
                title: "Course Slides",
                type: "pdf",
                url: "/slides.pdf",
              },
              {
                id: "r2",
                title: "Setup Guide",
                type: "document",
                url: "/setup.doc",
              },
            ],
          },
          {
            id: "1-2",
            title: "Environment Setup",
            duration: "12:45",
            videoUrl: "/video2.mp4",
            isCompleted: false,
            isLocked: false,
            description:
              "Set up your development environment with all necessary tools.",
          },
          {
            id: "1-3",
            title: "Project Structure",
            duration: "8:20",
            videoUrl: "/video3.mp4",
            isCompleted: false,
            isLocked: true,
            description:
              "Understanding the project structure and best practices.",
          },
        ],
      },
      {
        id: "2",
        title: "React Fundamentals",
        isCompleted: false,
        isExpanded: false,
        lessons: [
          {
            id: "2-1",
            title: "Components & Props",
            duration: "15:30",
            videoUrl: "/video4.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Deep dive into React components and props.",
          },
          {
            id: "2-2",
            title: "State Management",
            duration: "18:00",
            videoUrl: "/video5.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Learn about state management in React.",
          },
          {
            id: "2-3",
            title: "Hooks Deep Dive",
            duration: "22:15",
            videoUrl: "/video6.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Master React Hooks.",
          },
        ],
      },
      {
        id: "3",
        title: "TypeScript Integration",
        isCompleted: false,
        isExpanded: false,
        lessons: [
          {
            id: "3-1",
            title: "TypeScript Basics",
            duration: "14:00",
            videoUrl: "/video7.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Introduction to TypeScript.",
          },
          {
            id: "3-2",
            title: "Types & Interfaces",
            duration: "16:30",
            videoUrl: "/video8.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Working with types and interfaces.",
          },
        ],
      },
      {
        id: "4",
        title: "Advanced Patterns",
        isCompleted: false,
        isExpanded: false,
        lessons: [
          {
            id: "4-1",
            title: "Custom Hooks",
            duration: "20:00",
            videoUrl: "/video9.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Creating custom React hooks.",
          },
          {
            id: "4-2",
            title: "Performance Optimization",
            duration: "25:00",
            videoUrl: "/video10.mp4",
            isCompleted: false,
            isLocked: true,
            description: "Optimize React app performance.",
          },
        ],
      },
    ],
  });

  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    course.modules[0].lessons[0]
  );
  const [currentModule, setCurrentModule] = useState<Module | null>(
    course.modules[0]
  );

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate progress
  useEffect(() => {
    const totalLessons = course.modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    );
    const completedLessons = course.modules.reduce(
      (acc, module) =>
        acc + module.lessons.filter((lesson) => lesson.isCompleted).length,
      0
    );
    const progress =
      totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    setCourse((prev) => ({ ...prev, progress }));
  }, [course.modules]);

  const handleLessonClick = (lesson: Lesson, module: Module) => {
    if (!lesson.isLocked) {
      setCurrentLesson(lesson);
      setCurrentModule(module);
      if (isMobile) {
        setSidebarOpen(false);
      }
    }
  };

  const handleLessonComplete = () => {
    if (currentLesson && currentModule) {
      setCourse((prev) => {
        const updatedModules = prev.modules.map((module) => {
          if (module.id === currentModule.id) {
            const updatedLessons = module.lessons.map((lesson, index) => {
              // Mark current lesson as completed
              if (lesson.id === currentLesson.id) {
                lesson = { ...lesson, isCompleted: true };
              }
              // Unlock next lesson in same module
              if (
                index > 0 &&
                module.lessons[index - 1].id === currentLesson.id
              ) {
                lesson = { ...lesson, isLocked: false };
              }
              return lesson;
            });

            // Check if module is completed
            const moduleCompleted = updatedLessons.every((l) => l.isCompleted);

            return {
              ...module,
              lessons: updatedLessons,
              isCompleted: moduleCompleted,
            };
          }
          return module;
        });

        // Unlock first lesson of next module if current module is completed
        updatedModules.forEach((module, moduleIndex) => {
          if (moduleIndex > 0 && updatedModules[moduleIndex - 1].isCompleted) {
            if (module.lessons.length > 0) {
              module.lessons[0] = { ...module.lessons[0], isLocked: false };
            }
          }
        });

        return { ...prev, modules: updatedModules };
      });
    }
  };

  const toggleModule = (moduleId: string) => {
    setCourse((prev) => ({
      ...prev,
      modules: prev.modules.map((module) => ({
        ...module,
        isExpanded:
          module.id === moduleId ? !module.isExpanded : module.isExpanded,
      })),
    }));
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "border-r bg-card transition-all duration-300",
          sidebarOpen ? "w-80" : "w-0",
          isMobile && "fixed inset-y-0 left-0 z-50"
        )}
      >
        <div className={cn("h-full flex flex-col", !sidebarOpen && "hidden")}>
          {/* Sidebar Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Course Content</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {Math.round(course.progress)}%
                </span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {course.modules.reduce(
                  (acc, m) =>
                    acc + m.lessons.filter((l) => l.isCompleted).length,
                  0
                )}{" "}
                of {course.totalLessons} lessons completed
              </p>
            </div>
          </div>

          {/* Module List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="mb-2">
                  <Collapsible
                    open={module.isExpanded}
                    onOpenChange={() => toggleModule(module.id)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="flex items-center gap-2">
                          {module.isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <span className="font-medium text-sm">
                            Module {moduleIndex + 1}: {module.title}
                          </span>
                        </div>
                        {module.isCompleted && (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-3 space-y-1">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson, module)}
                            disabled={lesson.isLocked}
                            className={cn(
                              "w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3",
                              currentLesson?.id === lesson.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent",
                              lesson.isLocked && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            <div className="flex-shrink-0">
                              {lesson.isCompleted ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              ) : lesson.isLocked ? (
                                <Lock className="h-4 w-4" />
                              ) : (
                                <PlayCircle className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {lessonIndex + 1}. {lesson.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {lesson.duration}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b bg-card">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              {/* Breadcrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/course/${course.id}`}>
                      {course.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {currentModule && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{currentModule.title}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </header>

        {/* Video Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-6xl p-6">
            {currentLesson ? (
              <>
                {/* Video Player */}
                <Card className="mb-6">
                  <CardContent className="p-0">
                    <VideoPlayer
                      videoUrl={currentLesson.videoUrl}
                      onComplete={handleLessonComplete}
                      title={currentLesson.title}
                    />
                  </CardContent>
                </Card>

                {/* Lesson Info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">
                        {currentLesson.title}
                      </h1>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {currentLesson.duration}
                        </span>
                        {currentLesson.isCompleted && (
                          <Badge>
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>

                    {!currentLesson.isCompleted && (
                      <Button onClick={handleLessonComplete}>
                        Mark as Complete
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tabs for Additional Content */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                          About this lesson
                        </h3>
                        <p className="text-muted-foreground">
                          {currentLesson.description ||
                            "No description available for this lesson."}
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="resources" className="mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-4">
                          Downloadable Resources
                        </h3>
                        {currentLesson.resources &&
                        currentLesson.resources.length > 0 ? (
                          <div className="space-y-2">
                            {currentLesson.resources.map((resource) => (
                              <div
                                key={resource.id}
                                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <FileText className="h-5 w-5 text-muted-foreground" />
                                  <div>
                                    <p className="font-medium">
                                      {resource.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {resource.type.toUpperCase()} File
                                    </p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </Button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">
                            No resources available for this lesson.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notes" className="mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-4">Your Notes</h3>
                        <textarea
                          className="w-full min-h-[200px] p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Take notes about this lesson..."
                        />
                        <Button className="mt-4">Save Notes</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h2 className="text-xl font-semibold mb-2">
                    Select a lesson to begin
                  </h2>
                  <p className="text-muted-foreground">
                    Choose a lesson from the sidebar to start learning
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CourseDetails;
