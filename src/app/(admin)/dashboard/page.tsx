"use client";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import ManageProperties from "./manageproperties/page";

export default function Dashboard() {
  return (
    <Box>
      <Flex justifyContent={"space-between"} mb={10}>
        <Text fontSize="3xl" fontWeight="medium" color="black.800" mb={"10px"}>
          Dashboard
        </Text>

        <Link href={"/dashboard/manageproperty"}>
          <Button colorScheme="blue">Add Property</Button>
        </Link>
      </Flex>
      <SimpleGrid minChildWidth="200px" spacing="2em" minH="full">
        <ManageProperties />
      </SimpleGrid>
    </Box>
  );
}
