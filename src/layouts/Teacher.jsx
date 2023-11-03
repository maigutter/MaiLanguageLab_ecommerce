import { useParams } from "react-router-dom";
import useCoursesByTeacher from "../hooks/useCoursesByTeacher";
import CardShop from "../Components/Card";
import { Flex, Heading, Wrap, WrapItem, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Category() {
  const { teacher } = useParams();
  const { courses, isLoading } = useCoursesByTeacher(teacher);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  if (courses.length === 0)
    return <div>No hay productos con la catogría: {teacher}</div>;

  return (
    <Flex flexDir={"column"} gap="3">
      <Heading>Productos de categoría: {teacher}</Heading>
      <Wrap spacing={"30px"}>
        {courses.map((course) => (
          <WrapItem key={course.id}>
            <CardShop course={course} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Category;
