import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import dayjs from "dayjs";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const CalendarWrapper = ({
    className,
    children,
  }: {
    className: string;
    children: React.ReactElement;
  }) => {
    return (
      <div style={{ padding: "24px", background: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative", background: "#fff" }}>
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <Flex h="100vh" background={"#181a19"} flexDir={"column"}>
      <Flex justifyContent={"center"} alignItems={"center"} mt="20px">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          calendarContainer={CalendarWrapper}
          renderCustomHeader={({
            date,
            monthDate,
            customHeaderCount,
            decreaseYear,
            increaseYear,
          }) => (
            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              bg="white"
              mb="16px"
            >
              <ChevronLeftIcon
                w="18"
                h="18"
                bg="white"
                borderRadius="50%"
                border="1px solid #131313"
                onClick={decreaseYear}
              />
              <Text
                color="#131313"
                fontWeight={700}
                fontSize={"18px"}
                fontFamily={"Inter"}
              >
                {monthDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </Text>
              <ChevronRightIcon
                w="18"
                h="18"
                bg="white"
                borderRadius="50%"
                border="1px solid #131313"
                onClick={increaseYear}
              />
            </Flex>
          )}
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
