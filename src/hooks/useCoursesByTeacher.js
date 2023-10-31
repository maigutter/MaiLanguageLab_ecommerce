import {
  and,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useIsLoading";

export default function useCoursesByTeacher(teacher) {
  const [courses, setCourses] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "courses"),
      and(where("stock", ">", 0), where("teacher", "==", teacher))
    );

    getDocs(q)
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
      .finally(() => [stopLoading()]);
  }, [teacher, stopLoading]);

  return { courses, isLoading };
}
