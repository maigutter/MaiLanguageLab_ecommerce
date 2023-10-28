import { useParams } from "react-router-dom";
import useCoursesByCategory from "../hooks/useCoursesByCategory";
import { Card } from "../hooks/Card";
import { Flex, Heading, Wrap, WrapItem, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Category() {
  const params = useParams();
  const { courses, isLoading } = useCoursesByCategory(params.Category);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  if (courses.length === 0)
    return <div>No hay productos con la catogría: {params.Category}</div>;

  return (
    <Flex flexDir={"column"} gap="3">
      <Heading>Productos de categoría: {params.Category}</Heading>
      <Wrap spacing={"30px"}>
        {courses.map((course) => (
          <WrapItem key={course.id}>
            <Card course={course} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Category;
