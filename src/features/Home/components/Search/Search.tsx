"use client";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>();
  const [date, setDate] = useState("");
  const [toggle, settoggle] = useState(false);

  const InitSelectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleRangeSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
    setDate(
      `${ranges.selection.startDate.toDateString()} - ${ranges.selection.endDate.toDateString()}`
    );
  }

  return (
    <Box bgColor={"transparent"} padding={4} borderRadius={5}>
      <Flex
        boxShadow="md"
        padding={4}
        borderRadius={5}
        margin={"0 150px"}
        bgColor={"white"}
        zIndex={999}
        marginTop={"-50px"}
        position={"relative"}
        gap={1}
        marginBottom={"30px"}
      >
        <Input
          flex={0.7}
          h={"55px"}
          value={date}
          onClick={() => settoggle((prev) => !prev)}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          placeholder="Enter Date.."
        />
        {toggle && (
          <Flex
            flexDirection={"column"}
            position={"absolute"}
            top={0}
            left={0}
            zIndex={999}
            bg={"white"}
            p={2}
          >
            <DateRangePicker
              ranges={[InitSelectionRange]}
              onChange={handleRangeSelect}
              minDate={new Date()}
            />

            <Button
              colorScheme="blue"
              maxW={100}
              onClick={() => settoggle((prev) => !prev)}
            >
              Done
            </Button>
          </Flex>
        )}
        <Input
          flex={0.2}
          h={"55px"}
          value={noOfGuests}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNoOfGuests(parseInt(e.target.value))
          }
          type={"number"}
          placeholder="Number of guest..."
        />

        <Button
          flex={0.2}
          h={"55px"}
          colorScheme="blue"
          maxW={100}
          onClick={() => {}}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default Search;
