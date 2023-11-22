"use client";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Search = (props: any) => {
  let temp_room = parseInt(props.room);
  let temp_bath = parseInt(props.bath);

  const [startDate, setStartDate] = useState(props.startDate || new Date());
  const [endDate, setEndDate] = useState(props.endDate || new Date());
  const [noOfRoom, setnoOfRoom] = useState<number>(temp_room);
  const [noOfBath, setnoOfBath] = useState<number>(temp_bath);
  const [date, setDate] = useState("");
  const [toggle, settoggle] = useState(false);
  const router = useRouter();

  const InitSelectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  useEffect(() => {
    startDate &&
      endDate &&
      setDate(
        `Check in: ${new Date(
          startDate
        ).toDateString()} - Check out: ${new Date(endDate).toDateString()}`
      );
  }, [startDate, endDate]);

  function handleRangeSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
    setDate(
      `${ranges.selection.startDate.toDateString()} - ${ranges.selection.endDate.toDateString()}`
    );
  }

  function handleSearch() {
    router.push(
      `/properties?startDate=${startDate}&endDate=${endDate}&room=${noOfRoom}&bath=${noOfBath}`
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
          value={noOfRoom}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setnoOfRoom(parseInt(e.target.value))
          }
          type={"number"}
          placeholder="Number of Room..."
        />
        <Input
          flex={0.2}
          h={"55px"}
          value={noOfBath}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setnoOfBath(parseInt(e.target.value))
          }
          type={"number"}
          placeholder="Number of Bath..."
        />

        <Button
          flex={0.2}
          h={"55px"}
          colorScheme="blue"
          maxW={100}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default Search;
