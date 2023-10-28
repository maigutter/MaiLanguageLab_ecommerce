import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useIsLoading";

export default function useCourseById(id) {
  const [course, setCourse] = useState(null);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const courseRef = doc(db, "Courses", id);
    getDoc(courseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCourse({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          console.log("No existe el curso");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        stopLoading();
      });
  }, [id, stopLoading]);

  return {
    course,
    isLoading,
  };
}
