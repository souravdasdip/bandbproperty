"use client";

import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";

import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

import NavLink from "./NavLink";

const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Trending", icon: FiTrendingUp, href: "/" },
  { label: "Explore", icon: FiCompass, href: "/" },
  { label: "Favourites", icon: FiStar, href: "/" },
  { label: "Settings", icon: FiSettings, href: "/" },
];

export default function Sidebar({
  onClose,
  ...rest
}: {
  onClose: () => void;
  display?: { base: "none"; md: "block" };
}) {
  //   const router = useRouter();

  //   useEffect(() => {
  //     router.events.on("routeChangeComplete", onClose);
  //     return () => {
  //       router.events.off("routeChangeComplete", onClose);
  //     };
  //   }, [router.events, onClose]);

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          B&B
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
  );
}
