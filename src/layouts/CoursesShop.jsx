import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import useArrayCourses from "../hooks/useArrayCourses";
import CardShop from "../Components/Card";

const CoursesShop = () => {
  {
    const { courses } = useArrayCourses();
    return (
      <>
        <PageTitle title="Cursos" />
        <ItemListContainer greeting="You can find the different courses to buy here" />
        <div className="displaySpace">
          {courses.map((course) => (
            <CardShop
              key={course.id}
              id={course.id}
              Name={course.title}
              Category={course.category}
              Description={course.description}
              Price={course.price}
            />
          ))}
        </div>
      </>
    );
  }
};

export default CoursesShop;
