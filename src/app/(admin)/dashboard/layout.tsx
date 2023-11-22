import Wrapper from "@/features/dashboard/components/Wrapper";
import { Box } from "@chakra-ui/react";

export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box minH="100vh" bg="gray.100">
      <Wrapper />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
