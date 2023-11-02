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
import { useToast } from "@chakra-ui/react";

function CardShopDetail({ course, handleClick }) {
  const toast = useToast();
  return (
    <Card maxW="sm">
      <CardBody>
        <Image height="140" src={CourseImage} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{course.title}</Heading>
          <Text fontSize="1.5xl">
            {course.category} - Teacher: {course.teacher}
          </Text>
          <Text>{course.description}</Text>
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
            onClick={() => handleClick(course, 1, toast)}
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardShopDetail;
