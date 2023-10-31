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
} from "@chakra-ui/react";
import CourseImage from "../assets/logo3.jpeg";

function CardShop({ course, handleClick }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image height="140" src={CourseImage} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{course.title}</Heading>
          <Text>
            {course.category} - Teacher: {course.teacher}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${course.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleClick(course, 1)}
          >
            Add to cart
          </Button>
          <Link to={"/coursesShop/" + course.id}>Learn More</Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardShop;
