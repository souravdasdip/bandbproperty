"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const parentVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const cardVariant = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  const [modalData, setModalData] = useState(null);
  return (
    <Box>
      <MotionSimpleGrid
        mt="4"
        minChildWidth="250px"
        spacing="2em"
        minH="full"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >
        Dashboard
      </MotionSimpleGrid>
    </Box>
  );
}
