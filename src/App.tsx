import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <Flex h="100vh" background={"#181a19"} flexDir={"column"}>
      <Flex justifyContent={"center"} alignItems={"center"} mt="20px">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
        />
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} h="98vh">
        <Flex
          h="3px"
          w="100%"
          borderTop="2px dashed white"
          m="20px 50px"
          flexDir="row"
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {dates.map((date) => (
            <Box
              key={date}
              width="12px"
              height="12px"
              borderRadius="50%"
              mb="4px"
              bg="white"
              cursor="pointer"
            ></Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
