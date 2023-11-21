"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const ManageProperty = () => {
  const [property, setProperty] = useState({
    id: "",
    purpose: "for-rent",
    price: 0,
    title: "",
    description: "",
    externalID: "",
    location: "",
    category: "Apartment",
    createdAt: new Date(),
    updatedAt: new Date(),
    rooms: 0,
    baths: 0,
    area: 0,
    coverPhoto: {
      url: "",
    },
    photoCount: 0,
    photos: [
      {
        id: 0,
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/319179042/3e120c40662d4f02b49c220db8d60f6d",
      },
    ],
    amenities: [
      {
        text: "Furnished",
        value: false,
      },
      {
        text: "Centrally Air-Conditioned",
        value: false,
      },
      {
        text: "Balcony or Terrace",
        value: false,
      },
      {
        text: "Gym or Health Club",
        value: false,
      },
      {
        text: "Swimming Pool",
        value: false,
      },
      {
        text: "Steam Room",
        value: false,
      },
      {
        text: "Maintenance Staff",
        value: false,
      },
      {
        text: "Security Staff",
        value: false,
      },
    ],
    phoneNumber: {
      mobile: "",
      phone: "",
      whatsapp: "",
    },
    contactName: "",
    active: false,
    hidePrice: false,
  });

  const handleChange = (e: any) => {
    setProperty((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCheckBox = (item: any, index: number) => {
    setProperty((prev) => {
      let temp = JSON.parse(JSON.stringify(prev));
      temp[item][index].value = !temp[item][index].value;
      return temp;
    });
  };

  return (
    <Flex bg={"white"} p={10} flexDirection={"column"} gap={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize="3xl" fontWeight="medium" color="black.800" mb={"10px"}>
          Manage Property
        </Text>
        <Button colorScheme={"blue"} width={120}>
          Save
        </Button>
      </Flex>
      {Object.keys(property).map((item) => {
        if (item === "title" || item === "location" || item === "contactName") {
          return (
            <Flex flexDirection={"column"}>
              <Text color={"blue.500"} fontWeight="medium">
                {item.toUpperCase()}
              </Text>
              <Input
                placeholder={item.toUpperCase()}
                name={item}
                type="string"
                value={property[item]}
                onChange={handleChange}
                height={50}
              />
            </Flex>
          );
        }

        if (item === "description") {
          return (
            <Flex flexDirection={"column"}>
              <Text color={"blue.500"} fontWeight="medium">
                {item.toUpperCase()}
              </Text>
              <Textarea
                placeholder={item.toUpperCase()}
                name={item}
                value={property[item]}
                onChange={handleChange}
                size="sm"
                height={200}
              />
            </Flex>
          );
        }

        // Number type
        if (
          item === "price" ||
          item === "rooms" ||
          item === "baths" ||
          item === "area"
        ) {
          return (
            <Flex flexDirection={"column"}>
              <Text color={"blue.500"} fontWeight="medium">
                {item.toUpperCase()}
              </Text>
              <Input
                placeholder={item.toUpperCase()}
                name={item}
                type="number"
                value={property[item]}
                onChange={handleChange}
              />
            </Flex>
          );
        }

        //Amenities
        if (item === "amenities") {
          return (
            <Box>
              <Text color={"blue.500"} fontWeight="medium">
                Amenities
              </Text>
              <Flex gap={10} flexWrap={"wrap"}>
                {property["amenities"].map((amenity, index) => {
                  return (
                    <Checkbox
                      isChecked={amenity.value}
                      onChange={() => handleCheckBox(item, index)}
                    >
                      {amenity.text}
                    </Checkbox>
                  );
                })}
              </Flex>
            </Box>
          );
        }

        //Photos
        if (item === "photos") {
          return (
            <Box>
              <Text color={"blue.500"} fontWeight="medium">
                Images
              </Text>
              <Flex gap={2} flexWrap="wrap">
                {property["photos"].map((photo) => {
                  return (
                    <Image
                      src={photo.url}
                      alt="photo"
                      width={200}
                      height={200}
                    />
                  );
                })}
              </Flex>
            </Box>
          );
        }
      })}

      <Button colorScheme={"blue"} width={120}>
        Save
      </Button>
    </Flex>
  );
};

export default ManageProperty;
