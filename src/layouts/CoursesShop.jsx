import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { useContext } from "react";
import CardShop from "../Components/Card";
import useCourses from "../hooks/useCourses";
import { Flex, Spinner } from "@chakra-ui/react";
import CartContext from "../context/cart.context";

function CoursesShop() {
  const { course, isLoading } = useCourses();
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  return (
    <Flex flexDir={"column"}>
      <PageTitle title="Shop" />
      <ItemListContainer greeting="You can find the courses available here" />
      <CardShop course={course} handleClick={addItem} />
    </Flex>
  );
}

export default CoursesShop;
