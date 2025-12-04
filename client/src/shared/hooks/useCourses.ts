import type { Course } from "@/types/firebase";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses, getCourseById } from "@/services/firestore/firestore";

export const useCourses = () => {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: getAllCourses,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCourse = (courseId: string) => {
  return useQuery<Course | null>({
    queryKey: ["course", courseId],
    queryFn: () => getCourseById(courseId),
    enabled: !!courseId,
    staleTime: 1000 * 60 * 5,
  });
};