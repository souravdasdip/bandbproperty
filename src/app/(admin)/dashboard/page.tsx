"use client";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ManageProperties from "./manageproperties/page";

export default function Dashboard() {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Text fontSize="3xl" fontWeight="medium" color="black.800" mb={"10px"}>
          Dashboard
        </Text>

        <Button colorScheme="blue">Add Property</Button>
      </Flex>
      <SimpleGrid minChildWidth="200px" spacing="2em" minH="full">
        <ManageProperties />
      </SimpleGrid>
    </Box>
  );
}
