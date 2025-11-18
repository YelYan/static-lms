// types/course.types.ts
export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  isCompleted: boolean;
  isLocked: boolean;
  videoUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  studentsEnrolled: number;
  rating: number;
  modules: Module[];
  progress: number;
}