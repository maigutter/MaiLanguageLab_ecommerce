import {
  Card,
  CardBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function CartDetail({ cart }) {
  const total = cart.courses.reduce((acc, { course, quantity }) => {
    return acc + course.price * quantity;
  }, 0);

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Curso</Th>
              <Th>Cantidad</Th>
              <Th>Precio por curso</Th>
              <Th>Precio total </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.courses.map(({ course, quantity }) => (
              <Tr textAlign={"left"} key={course.id}>
                <Td>{course.title}</Td>
                <Td>{quantity}</Td>
                <Td isNumeric>${course.price}</Td>
                <Td isNumeric>${course.price * quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Card>
        <CardBody>
          <Text>Total Price: ${total}</Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default CartDetail;
