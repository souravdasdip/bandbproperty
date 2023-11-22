"use client";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
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
        {children}
      </SimpleGrid>
    </Box>
  );
}
