import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Input,
  useDisclosure,
  ButtonGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-JM.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

export const Footer = () => {
  return (
    <Flex bg={"whitesmoke"} mt={"5%"}>
      <Stack
        direction={"row"}
        h={75}
        w={"100%"}
        justifyContent={"center"}
        spacing={"15%"}
      >
        <Link to={"https://wa.me/3876109748"}>
          <Image src={whatsapp} h={"100%"}></Image>
        </Link>
        <Link to={"https://github.com/josecitoMoya"}>
          <Image src={github} h={"100%"}></Image>
        </Link>
        <Link to={"https://www.linkedin.com/in/jbmoya/"}>
          <Image src={linkedin} h={"100%"}></Image>
        </Link>
      </Stack>
    </Flex>
  );
};
