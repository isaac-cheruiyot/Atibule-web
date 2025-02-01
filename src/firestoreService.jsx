import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchCourses = async () => {
  const coursesCollection = collection(db, "courses");
  const snapshot = await getDocs(coursesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
