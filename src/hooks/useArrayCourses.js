import { useEffect, useState } from "react";
import getArrayCourses from "../arrayFetching/ArrayCourses";

const useArrayCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getArrayCourses()
      .then((data) => data.json())
      .then((data) => setCourses(data.CoursesArray));
  }, []);

  return {
    courses,
  };
};

export default useArrayCourses;
