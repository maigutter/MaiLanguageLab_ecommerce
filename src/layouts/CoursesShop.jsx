import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { useContext } from "react";
import CardShop from "../Components/Card";
import useCourses from "../hooks/useCourses";
import { Flex, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import CartContext from "../context/cart.context";

function CoursesShop() {
  const { courses, isLoading } = useCourses();
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  return (
    <Flex flexDir={"column"}>
      <PageTitle title="Shop" />
      <ItemListContainer greeting="You can find the courses available here" />
      <Wrap spacing="30px">
        {courses.map((course) => (
          <WrapItem key={course.id}>
            <CardShop course={course} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default CoursesShop;
