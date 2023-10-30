import { Flex, Heading, useToast } from "@chakra-ui/react";
import useRegisterForm from "../hooks/useRegisterForm";
import RegisterForm from "../Components/RegisterForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";

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

    sendUser();
  };

  const sendUser = () => {
    const db = getFirestore();

    const userCollection = collection(db, "Users");
    addDoc(userCollection, {
      user: {
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        usertype: "student",
        admin: false,
      },
    }).then(() => {
      toast({
        title: "Usuario registrado",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };

  return (
    <Flex flexDir={"column"}>
      <Heading>Formulario de registro </Heading>
      <RegisterForm
        onSubmit={onSubmit}
        values={values}
        handleChange={handleChange}
      />
    </Flex>
  );
}

export default Register;
