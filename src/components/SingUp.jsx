import React from "react";
import { useInput } from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser } from "../state/thunks/userThunks";
import { useNavigate } from "react-router-dom";
import { Input, Button, Text, Box, Center, Stack } from "@chakra-ui/react";

export const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isloading = useSelector((state) => state.user.isloading);
  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    dispatch(fetchCreateUser(newUser)).then(navigate("/"));
  };

  return (
    <Box>
      <Center h="75%" color="white" marginTop={"5%"} p={10}>
        <Box
          w={"50%"}
          borderWidth="3px"
          borderRadius="lg"
          display="inline-block"
          p={"50px"}
          alignItems="center"
          justifyContent={"center"}
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="2xl"
          textTransform="uppercase"
        >
          <Text fontSize="4xl" textAlign={"center"}>
            Registrarse
          </Text>

          <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
            <Stack spacing={5}>
              <Input
                {...name}
                backgroundColor={"white"}
                placeholder="Nombre"
                required
              />

              <Input
                {...lastName}
                backgroundColor={"white"}
                htmlSize={50}
                type="text"
                width="auto"
                placeholder="Apellido"
                required
              />

              <Input
                {...email}
                backgroundColor={"white"}
                htmlSize={50}
                type="email"
                width="auto"
                placeholder="email"
                required
              />

              <Input
                {...password}
                backgroundColor={"white"}
                htmlSize={50}
                type="password"
                width="auto"
                placeholder="Contraseña"
                required
              />

              <Button colorScheme="blue" type="submit">
                Enviar
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};
