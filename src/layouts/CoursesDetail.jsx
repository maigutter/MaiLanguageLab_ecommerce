import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { useParams } from "react-router-dom";
import CardShopDetail from "../Components/CardDetail";
import useCourseById from "../hooks/useCourseById";
import { Flex, Spinner } from "@chakra-ui/react";

function CoursesDetail() {
  const params = useParams();
  const { course, isLoading } = useCourseById(params.courseDetail);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  if (!course) {
    return <h3>Sorry! We can not find the course</h3>;
  }

  return (
    <Flex flexDir={"column"}>
      <PageTitle title="Detalle del Curso" />
      <ItemListContainer greeting="You can find the details of the course here" />
      <CardShopDetail course={course} />
    </Flex>
  );
}

export default CoursesDetail;
