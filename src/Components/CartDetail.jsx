import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function CartSummaryTable({ cart }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Curso</Th>
            <Th>Cantidad</Th>
            <Th>Precio</Th>
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

export default CartSummaryTable;
