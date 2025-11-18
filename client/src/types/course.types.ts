export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted: boolean;
  isLocked: boolean;
  description?: string;
  resources?: Resource[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  isCompleted: boolean;
  isExpanded?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'document' | 'link';
  url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  modules: Module[];
  totalDuration: string;
  totalLessons: number;
  progress: number;
}