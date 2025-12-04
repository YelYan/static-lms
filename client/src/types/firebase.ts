export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  purchasedCourses: string[];
  createdAt: Date;
  lastLoginAt: Date;
}

export interface Module {
  id: string;
  title: string;        // "Module 1"
  subtitle: string;     // "Introduction to Python"
  lessons: string[];    // Array of lesson titles
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  isAvailable: boolean;
  thumbnail: string;
  modules: Module[];
  createdAt: Date;
}

export interface Purchase {
  userId: string;
  userEmail: string;
  courseId: string;
  amount: number;
  stripeSessionId: string;
  status: "pending" | "completed" | "failed" | "refunded";
  purchasedAt: Date;
}