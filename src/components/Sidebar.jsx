import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>Soy el SIDEBAR</h1>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato" }}>
              <Box as="span" flex="1" textAlign="left">
                Peliculas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Te mostramos las 20 peliculas mas buscadas
            <Stack>
              <Divider />
              <Button>Peliculas</Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Series de TV
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Te mostramos las 20 series de TV mas buscadas
            <Stack>
              <Divider />
              <Button>Series de TV</Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        {user.user && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {`Los favoritos de ${user.user}`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Te mostramos tus selecciones favoritas
              <Stack>
                <Divider />
                <Button>Favoritos</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
};
