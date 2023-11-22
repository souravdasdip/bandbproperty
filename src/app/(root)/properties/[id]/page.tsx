"use client";
import { usePropertyFormat } from "@/features/common/Hooks/usePropertyFormat";
import TextContentBox from "@/features/common/modules/TextContentBox";
import DefaultLayout from "@/features/Layout/DefaultLayout";
import PropertyStats from "@/features/Property/PropertyStats";
import PropertyThumbnailSlider from "@/features/Property/PropertyThumbnailSlider";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

const PropertyDetail = ({ property }: { property: any }) => {
  // const property = temp_property;
  const {
    address,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    amenities,
  } = usePropertyFormat(property);

  const images = photos as string[];

  return (
    <DefaultLayout>
      <Box
        backgroundColor="#f7f8f9"
        paddingY="3rem"
        paddingX={{ base: "1rem", md: "3rem" }}
      >
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          <GridItem colSpan={6}>
            <Text
              fontSize="3xl"
              fontWeight="medium"
              color="blue.800"
              textAlign={{ base: "center", md: "left" }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize="xl"
              color="blue.600"
              textAlign="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap="0.5rem"
              marginY={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text fontWeight="ligth">
                {address} - ID:{externalID}
              </Text>
              <Badge
                colorScheme="green"
                padding="0.4rem"
                width="fit-content"
                height="fit-content"
                marginX={{ base: "auto", lg: "0" }}
              >
                {purpose}
              </Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <PropertyThumbnailSlider photos={images} />
          </GridItem>
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
            />
            <TextContentBox title="description">
              <Text
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
                noOfLines={4}
              >
                {description}
              </Text>
            </TextContentBox>
            <TextContentBox title="Amenities">
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
              >
                {amenities.length
                  ? amenities.map((item: string) => (
                      <Text key={item}>{item}</Text>
                    ))
                  : "Please contact us for more info"}
              </SimpleGrid>
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertyDetail;
