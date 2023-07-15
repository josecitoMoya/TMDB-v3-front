import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const BannerCard = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        shadow={"2xl"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageUrl + item.poster_path}
          alt={item.original_title}
          p={2}
          borderRadius={25}
        />

        <Stack>
          <CardBody justifyContent={"center"}>
            <Heading size="md">{item.original_title}</Heading>

            <Text py={4} maxH={200} overflow={"hidden"}>
              {item.overview}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};
