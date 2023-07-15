import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormLabel,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Input,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo-JM.png";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { fetchLogOut, fetchLoginUser } from "../state/thunks/userThunks";

export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const searchItem = useInput();

  const isloading = useSelector((state) => state.user.isloading);

  const handleLogin = (e) => {
    const loginUser = {
      email: email.value,
      password: password.value,
    };

    onClose();

    dispatch(fetchLoginUser(loginUser)).then(navigate("/"));
  };

  const handleSearch = (e) => {
    const search = searchItem.value;
    e.preventDefault();
    navigate(`search-page/${search}`);
  };

  const handleLogout = (e) => {
    onClose();
    dispatch(fetchLogOut()).then(navigate("/"));
  };

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      justify="space-between"
      bg={"whitesmoke"}
      p={4}
    >
      <Box>
        <Link to={"/"}>
          <Image src={logo} h={"55px"}></Image>
        </Link>
      </Box>

      <Box>
        <form onSubmit={handleSearch}>
          <Input
            placeholder="Search"
            size={"lg"}
            borderRadius={45}
            textAlign={"center"}
            h={"55px"}
            w={"500px"}
            bg={"white"}
            borderColor={"facebook.100"}
            {...searchItem}
          />
        </form>
      </Box>

      <Button
        onClick={onOpen}
        h={"55px"}
        w={"10%"}
        colorScheme="facebook"
        borderRadius={55}
        fontSize={"2xl"}
      >
        {user.user ? `${user.user}!` : "Login"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="30%"
          backdropBlur="5px"
        />
        {!user.user ? (
          <ModalContent>
            <Image src={logo} />
            <ModalHeader textAlign={"center"}>Login</ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input placeholder="email" required {...email} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="password"
                  type="password"
                  required
                  {...password}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"center"} w={"100%"}>
              <Box>
                <Button colorScheme="blue" w={"100%"} onClick={handleLogin}>
                  Submit
                </Button>
                <Stack direction={"row"} mt={10}>
                  <Text>you don't have an account?</Text>
                  <Button onClick={onClose} as={Link} to={"/singup"} w={"100%"}>
                    Sing up
                  </Button>
                </Stack>
              </Box>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent>
            <Image src={logo} />
            <ModalHeader
              textAlign={"center"}
            >{`Hola ${user.user}!!`}</ModalHeader>
            <ModalBody pb={6}>
              <ModalFooter justifyContent={"center"} w={"100%"}>
                <Stack direction={"row"} w={"100%"}>
                  <Button
                    colorScheme="blue"
                    w={"100%"}
                    as={Link}
                    to={`/favorites/${user.email}`}
                    onClick={onClose}
                  >
                    Favorites
                  </Button>
                  <Button onClick={handleLogout} w={"100%"} as={Link} to={"/"}>
                    Log out
                  </Button>
                </Stack>
              </ModalFooter>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </Flex>
  );
};
