import {
  Button,
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
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CartContext from "../context/cart.context";
import { useContext } from "react";

function CartDetail({ cart }) {
  const total = cart.courses.reduce((acc, { course, quantity }) => {
    return acc + course.price * quantity;
  }, 0);
  const { removeItem, removeItemUnit, addItem, clear } =
    useContext(CartContext);
  const toast = useToast();
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
                <Td>
                  <Button
                    onClick={() => removeItemUnit(course.id)}
                    style={{ marginLeft: "7px" }}
                  >
                    -
                  </Button>
                  {quantity}
                  <Button
                    onClick={() => addItem(course, 1, toast)}
                    style={{ marginRight: "7px" }}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => removeItem(course.id)}
                    style={{ marginLeft: "7px" }}
                  >
                    <CloseIcon />
                  </Button>
                </Td>
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
      <Button onClick={() => clear()} style={{ marginLeft: "7px" }}>
        <CloseIcon /> Limpiar Carrito
      </Button>
    </div>
  );
}

export default CartDetail;
