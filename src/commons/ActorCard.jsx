import React, { useEffect, useState } from "react";
import logo from "../assets/logo-JM.png";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import Fetch from "../utils/movies";

export const ActorCard = ({ cast }) => {
  const imageUrl = cast.profile_path
    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
    : logo;

  return (
    <Box>
      <Stack>
        <Center maxH={"max-content"}>
          <Image borderRadius={100} p={2} src={imageUrl} alt={cast.name} />
        </Center>
        <Center textAlign={"center"}>
          <Stack>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              {cast.name}
            </Text>
            <Text fontStyle={"oblique"}>as:</Text>
            <Text fontSize={"lg"}>{cast.character}</Text>
          </Stack>
        </Center>
      </Stack>
    </Box>
  );
};
