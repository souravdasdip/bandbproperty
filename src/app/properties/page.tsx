import PropertyCard from "@/features/common/modules/PropertyCard";
import Search from "@/features/Home/components/Search";
import { Box, SimpleGrid } from "@chakra-ui/react";
import properties from "../../features/data/properties.json";

const Properties = ({ searchParams }: { searchParams: any }) => {
  const temp_properties = properties["hits"];

  return (
    <Box backgroundColor="#f7f8f9" padding="3rem">
      <Box maxWidth="1280px" margin="0 auto">
        <Search {...searchParams} />
        <SimpleGrid
          columns={{ base: 1, sm: 3 }}
          gap={{ base: "0", sm: "2rem" }}
        >
          {temp_properties.map((property: Object, index: number) => (
            <PropertyCard key={index} {...property} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Properties;
