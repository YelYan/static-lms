import type { Course } from "@/types/firebase";
import { db } from "@/firebase/firebase";

import { addDoc, arrayUnion, collection, doc , getDoc ,getDocs, serverTimestamp, updateDoc } from "firebase/firestore";

// ============================================
// COURSE FUNCTIONS
// ============================================
export const getAllCourses = async ():Promise<Course[]>  => {
    const courseRef = collection(db, "courses");
    const snapshot = await getDocs(courseRef);
    const courses: Course[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as Course));
    return courses;
}

export const getCourseById = async (courseId : string):Promise<Course | null>  => {
    const courseRef = doc(db , "courses" , courseId);
    const snapshot = await getDoc(courseRef);
    if (!snapshot.exists()) {
        return null;
    }
    return {
        id: snapshot.id,
        ...snapshot.data()
    } as Course;
}

// ============================================
// PURCHASE FUNCTIONS (Called from backend webhook)
// ============================================
export const addPurchase = async (
    userId : string,
    userEmail : string,
    courseId : string,
    amount : number,
    stripeSessionId : string
):Promise<void> => {
    // add purchase record to firestore
    await addDoc(collection(db , "purchases"),{
        userId, 
        userEmail,
        courseId,
        amount,
        stripeSessionId,
        status : "completed",
        purchasedAt: serverTimestamp(),
    })

    const userRef = doc(db , "users", userId);
    await updateDoc(userRef , {
        purchasedCpurses : arrayUnion(courseId)
    })
}