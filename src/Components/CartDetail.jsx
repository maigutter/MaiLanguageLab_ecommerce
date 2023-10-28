import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function CartDetail({ cart }) {
  return (
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
          {cart.Courses.map(({ course, quantity }) => (
            <Tr textAlign={"left"} key={course.id}>
              <Td>{course.Title}</Td>
              <Td>{quantity}</Td>
              <Td isNumeric>${course.Price}</Td>
              <Td isNumeric>${course.Price * quantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CartDetail;
