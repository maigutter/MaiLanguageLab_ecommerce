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

function CardShopDetail({ Name, Category, Teacher, Price, Description }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image height="140" src={CourseImage} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{Name}</Heading>
          <Text fontSize="1.5xl">
            {Category} - Teacher: {Teacher}
          </Text>
          <Text>{Description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${Price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardShopDetail;
