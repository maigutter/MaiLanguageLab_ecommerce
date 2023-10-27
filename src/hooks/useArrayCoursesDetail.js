import { useEffect, useState } from "react";
import getArrayCourses from "../arrayFetching/ArrayCourses";

const useArrayCoursesDetail = (course) => {
  const [courseID, setCourseID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArrayCourses()
      .then((data) => data.json())
      .then((data) =>
        setCourseID(
          data.CoursesArray.find(
            (courseData) => courseData.id === Number(course)
          )
        )
      )
      .finally(() => setLoading(false));
  }, [course]);

  return {
    courseID,
    loading,
  };
};

export default useArrayCoursesDetail;
