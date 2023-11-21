import PropertyCard from "@/features/common/modules/PropertyCard";
import Search from "@/features/Home/components/Search";
import { Box, SimpleGrid } from "@chakra-ui/react";
import properties from "../../features/data/properties.json";

const Properties = ({
  searchParams,
}: {
  searchParams: {
    startDate: string;
    endDate: string;
    room: string;
    bath: string;
  };
}) => {
  const { startDate, endDate, room, bath } = searchParams;
  let search__room = parseInt(room) as number;
  let search__bath = parseInt(bath) as number;

  let temp_properties = properties["hits"];
  if (search__room >= 0 || search__bath >= 0) {
    temp_properties = properties["hits"]
      .filter(
        (property) =>
          property.rooms <= search__room && property.baths <= search__bath
      )
      .sort((a, b) => b.rooms - a.rooms);
  }

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
