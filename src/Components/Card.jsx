import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardBody,
  CardFooter,
  useToast,
} from "@chakra-ui/react";
import CourseImage from "../assets/logo3.jpeg";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import { CloseIcon } from "@chakra-ui/icons";

function CardShop({ course }) {
  const toast = useToast();
  const { cart, addItem, removeItem, removeItemUnit } = useContext(CartContext);
  const cartItem = cart.courses.find((item) => item.course.id === course.id);

  return (
    <Card maxW="sm">
      <CardBody>
        <Image height="140" src={CourseImage} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{course.title}</Heading>
          <Text>
            {course.categoryName} - Teacher: {course.teacher}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${course.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {cartItem ? (
          <ButtonGroup spacing="2">
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => removeItemUnit(course.id)}
            >
              -
            </Button>
            <Text>{cartItem.quantity}</Text>
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => addItem(course, 1, toast)}
            >
              +
            </Button>
            <Button
              onClick={() => removeItem(course.id)}
              style={{ marginLeft: "7px" }}
            >
              <CloseIcon />
            </Button>
            <Link to={`/coursesShop/${course.id}`}>Learn More</Link>
          </ButtonGroup>
        ) : (
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => addItem(course, 1, toast)}
            >
              Add to cart
            </Button>
            <Link to={`/coursesShop/${course.id}`}>Learn More</Link>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
}

export default CardShop;
