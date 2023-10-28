import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { useContext } from "react";
import CardShopDetail from "../Components/CardDetail";
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
      <PageTitle title="Detalle del Curso" />
      <ItemListContainer greeting="You can find the details of the course here" />
      <CardShopDetail course={course} handleClick={addItem} />
    </Flex>
  );
}

export default CoursesShop;
