import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";

import {
  BD_BOTTOM_CARD,
  BG_COLOR,
  HOVER_TEXT_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";
import CustomFormInput from "@/components/formInput/customFormInput";
import { fetchPrograms, Program } from "../api";
import { NextPage } from "next";

const Course: NextPage = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    async function fetchDataPrograms() {
      const res = await fetchPrograms();
      setPrograms(res);
    }

    fetchDataPrograms();
  }, []);

  const MAX_DESCRIPTION_LENGTH = 300;

  const truncateDescription = (description: string) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return description;
  };

  return (
    <Box mt="80px">
      <Image
        src="/image/thumnail.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      {programs.map((program, index) => (
        <Box
          backgroundColor={index % 2 == 0 ? "white" : BG_COLOR}
          paddingBottom="100px"
          paddingTop="30px"
        >
          <Box
            padding="30px"
            maxWidth="1200px"
            margin="auto"
            paddingBottom="100px"
          >
            <Text
              fontSize={["25px", "30px", "40px"]}
              fontWeight="700"
              marginBottom="30px"
              borderLeft="3px solid"
              paddingLeft="15px"
              color={TEXT_BOLD_COLOR}
            >
              {program.attributes.name}
            </Text>
            <Text textAlign="center" marginBottom="30px">
              {program.attributes.description}
            </Text>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
            >
              {program.attributes.courses?.data.map((course) => (
                <GridItem
                  key={course.attributes.id}
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                  borderRadius="20px"
                  overflow="hidden"
                  backgroundColor="white"
                >
                  <Box overflow="hidden">
                    <Image
                      // src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${course.attributes.thumbnail.data.attributes.url}`}
                      src="/image/gioithieu.png"
                      h="300px"
                      w="100%"
                      objectFit="cover"
                      borderTopRightRadius="20px"
                      borderTopLeftRadius="20px"
                      transition="transform 0.3s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                    />
                  </Box>
                  <Flex direction="column" gap="10px" padding="20px">
                    <Text
                      fontSize={["20px", "25px", "30px"]}
                      fontWeight="700"
                      h="90px"
                    >
                      {course.attributes.name}
                    </Text>
                    <Text
                      borderBottom="1px solid "
                      borderBottomColor={BD_BOTTOM_CARD}
                      paddingBottom="20px"
                    >
                      {truncateDescription(course.attributes.description)}
                    </Text>
                    <Link href={`/course/${course.attributes.slug}`}>
                      <Button
                        w="200px"
                        padding="20px"
                        marginBottom="20px"
                        transition="transform 0.3s"
                        backgroundColor={BG_BUTTON_COLOR}
                        color={TEXT_COLOR}
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                      >
                        Tìm hiểu thêm
                      </Button>
                    </Link>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      ))}
      <Box background="linear-gradient(rgb(0, 4, 40), rgb(136, 14, 79))">
        <Flex
          direction="column"
          padding="70px"
          maxWidth="1200px"
          width="100%"
          margin="auto"
          alignItems="center"
        >
          <Text
            color="white"
            textAlign="center"
            fontWeight="700"
            fontSize="30px"
            marginBottom="30px"
          >
            Khóa học mới
          </Text>
          <Image
            src="/image/trangchu1.jpg"
            boxShadow="rgb(224, 224, 224) 3px 3px 5px 0px"
            border="2px solid rgb(224, 224, 224)"
            borderRadius="20px"
            objectFit="cover"
            w="100%"
            h={["200px", "400px", "550px"]}
          />
          <Button
            mt="30px"
            padding={["10px", "20px", "25px"]}
            borderRadius="10px"
            border="4px solid"
            borderColor={BD_COLOR}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            backgroundColor={BG_BUTTON_COLOR}
            transition="transform 0.3s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Text
              fontSize={["16px", "20px", "25px"]}
              fontWeight="600"
              color={TEXT_COLOR}
            >
              Tìm hiểu thêm
            </Text>
          </Button>
        </Flex>
      </Box>
      <Box padding="70px">
        <Text
          textAlign="center"
          fontSize="30px"
          fontWeight="700"
          marginBottom="50px"
          color={TEXT_BOLD_COLOR}
        >
          Bạn chưa biết liệu khoá học có phù hợp với mình hay không?
        </Text>
        <CustomFormInput />
      </Box>
    </Box>
  );
};
export default Course;
