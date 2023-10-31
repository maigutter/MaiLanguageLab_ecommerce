import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useIsLoading";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const coursesCollection = collection(db, "courses");
    getDocs(coursesCollection)
      .then((snapshot) => {
        if (!snapshot.empty) {
          setCourses(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      })
      .finally(() => {
        stopLoading();
      });
  }, [stopLoading]);

  return { courses, isLoading };
}
