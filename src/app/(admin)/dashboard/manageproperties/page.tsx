import DProperty from "@/features/dashboard/components/DProperty";
import { prisma } from "@/lib/connect";
import { Flex } from "@chakra-ui/react";

export default async function ManageProperties() {
  const properties = await prisma.property.findMany();
  console.log({ properties });

  // const { startDate, endDate, room, bath } = searchParams;
  // let search__room = parseInt(room) as number;
  // let search__bath = parseInt(bath) as number;

  // let temp_properties = properties;
  // if (search__room >= 0 || search__bath >= 0) {
  //   temp_properties = properties
  //     .filter(
  //       (property) =>
  //         property.rooms <= search__room && property.baths <= search__bath
  //     )
  //     .sort((a, b) => b.rooms - a.rooms);
  // }

  return (
    <Flex flexWrap={"wrap"} gap={"1rem"}>
      {properties.map((property: Object, index: number) => (
        <DProperty key={index} {...property} />
      ))}
    </Flex>
  );
}
