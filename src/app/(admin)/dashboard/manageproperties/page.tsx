"use client";
import DProperty from "@/features/dashboard/components/DProperty";
import properties from "@/features/data/properties.json";
import { SimpleGrid } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

const ManageProperties = () => {
  const searchParams: any = useSearchParams();
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
    <SimpleGrid columns={{ base: 1, sm: 4 }} gap={{ base: "0", sm: "1rem" }}>
      {temp_properties.map((property: Object, index: number) => (
        <DProperty key={index} {...property} />
      ))}
    </SimpleGrid>
  );
};

export default ManageProperties;
