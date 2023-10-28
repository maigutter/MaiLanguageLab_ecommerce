import { Card, CardBody, Text, useToast } from "@chakra-ui/react";
import useRegisterForm from "../hooks/useForm";
import BuyerForm from "../components/BuyerForm";

function Register() {
  const toast = useToast();

  const [values, handleChange] = useRegisterForm({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    email2: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    for (const key in values) {
      if (values[key] === "") {
        toast({
          title: "Error",
          description: "Todos los campos son obligatorios",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
    }

    if (values.email !== values.email2) {
      toast({
        title: "Error",
        description: "Los emails no coinciden",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    return (
      <Card>
        <CardBody>
          <Text>You've successfully registered</Text>
        </CardBody>
      </Card>
    );
  };
}

export default Register;
