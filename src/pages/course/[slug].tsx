import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
  TEXT_BLACK_COLOR,
} from "@/components/styles/color";
import CourseFormInput from "@/components/formInput/courseFormInput";
import { Course, fetchCourseBySlug } from "../api";
import { NextPageContext } from "next";

const CourseDetail = ({ course }: { course: Course }) => {
  console.log(course);
  return (
    <Box mt="80px">
      <Box backgroundColor={BG_COLOR}>
        <Box padding="20px">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${course.attributes.thumbnail.data.attributes.url}`}
            w="1200px"
            margin="auto"
            h={["400px", "600px", "600px"]}
            objectFit="cover"
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          />
        </Box>
      </Box>
      <Box backgroundImage="url('/image/banner1.jpg')" backgroundSize="cover">
        <Box display="flex" justifyContent="center" padding="70px">
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box
              maxW="555px"
              display="flex"
              flexDirection="column"
              gap="40px"
              alignItems="center"
            >
              <Text color="white" fontSize="30px" fontWeight="700">
                Lịch khai giảng
              </Text>
              <Flex
                direction="column"
                gap="10px"
                backgroundColor={BG_TEXT_COLOR}
                padding="20px"
              >
                <Text color="white" fontSize="20px" fontWeight="600">
                  Lớp học tại Hà Nội
                </Text>
                <Text color="white">- Khai giảng: 04/12/2023</Text>
                <Text color="white">
                  - Lịch học (10 buổi): Thứ 2 & Thứ 4 (19:00 - 21:00)
                </Text>
                <Text color="white">
                  - Hình thức học: Online qua nền tảng Zoom
                </Text>
                <Text color="white">- Hotline: 090.586.2499 (Ms. Yến)</Text>
              </Flex>
            </Box>
            <Box maxW="555px" borderRadius="20px" overflow="hidden">
              <CourseFormInput />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box mt="50px" mb="50px">
        <Flex
          maxW="1200px"
          margin="auto"
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          padding="10px"
          gap="20px"
        >
          <Image
            src="/image/ourTeam.png"
            w="450px"
            h="100%"
            objectFit="contain"
            borderRadius="10px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          />
          <Flex direction="column" maxW="555px" gap="30px">
            <Text
              fontSize="30px"
              fontWeight="700"
              borderBottom="2px solid"
              borderColor={BD_CARD_COLOR}
              color={TEXT_BOLD_COLOR}
            >
              Tổng quan về khóa nhập môn
            </Text>
            <Text>{course.attributes.description}</Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        backgroundColor="rgba(234, 242, 254, 0.5)"
        padding={["10px", "10px", "0px"]}
        mt="70px"
        mb="70px"
      >
        <Box maxW="1200px" margin="auto" pt="50px" pb="50px">
          <Text
            textAlign="center"
            fontSize="30px"
            fontWeight="700"
            marginBottom="70px"
            color={TEXT_BOLD_COLOR}
          >
            Sau khóa học bạn nhận được gì
          </Text>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="30px"
          >
            <Flex direction="column" gap="30px" maxW="565px">
              {course.attributes.course_specials.data.map((e, index) => (
                <Flex direction="column" gap="30px">
                  <Flex
                    alignItems="center"
                    borderTop="1px solid"
                    borderBottom="1px solid"
                    gap="20px"
                  >
                    <Text
                      fontSize="50px"
                      fontWeight="700"
                      color={TEXT_BOLD_COLOR}
                    >
                      0{index + 1}.
                    </Text>
                    <Text
                      fontSize="25px"
                      fontWeight="700"
                      color={TEXT_BOLD_COLOR}
                    >
                      {e.attributes.name}
                    </Text>
                  </Flex>
                  <Text>{e.attributes.description}</Text>
                </Flex>
              ))}
            </Flex>
            <Flex>
              <Image
                src="/image/imageIn1.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
                objectFit="cover"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box mt="70px" mb="70px" padding={["10px", "10px", "0px"]}>
        <Box maxWidth="1200px" margin="auto">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            marginBottom="70px"
            color={TEXT_BOLD_COLOR}
          >
            Mục Tiêu và Nội Dung
          </Text>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="30px"
          >
            <Flex>
              <Image
                src="/image/imageIn1.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
                objectFit="cover"
              />
            </Flex>
            <Flex flexDirection="column" gap="30px" maxW="565px">
              {course.attributes.course_targets.data.map((e, index) => (
                <Box display="flex" flexDirection="column" gap="30px">
                  <Flex
                    alignItems="center"
                    borderTop="1px solid"
                    borderBottom="1px solid"
                    gap="20px"
                  >
                    <Text
                      fontSize="50px"
                      fontWeight="700"
                      color={TEXT_BOLD_COLOR}
                    >
                      0{index + 1}.
                    </Text>
                    <Text
                      fontSize="25px"
                      fontWeight="700"
                      color={TEXT_BOLD_COLOR}
                    >
                      {e.attributes.name}
                    </Text>
                  </Flex>
                  <Text>{e.attributes.description}</Text>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box backgroundColor={BG_COLOR}>
        <Box padding="70px" maxWidth="1200px" width="100%" margin="auto">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            marginBottom="30px"
            color={TEXT_BOLD_COLOR}
          >
            Nội dung khóa học
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {course.attributes.course_contents.data.map((e, index) => (
              <GridItem
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                borderRadius="20px"
                overflow="hidden"
                backgroundColor="white"
                h="370px"
              >
                <Flex
                  alignItems="center"
                  gap="10px"
                  borderBottom="1px solid"
                  borderColor={BD_CARD_COLOR}
                >
                  <Text
                    backgroundColor={BG_CARD_COLOR}
                    fontSize="30px"
                    fontWeight="700"
                    padding="20px"
                    color="white"
                  >
                    {index + 1}
                  </Text>
                  <Text fontSize="16px" fontWeight="700">
                    {e.attributes.name}
                  </Text>
                </Flex>
                <Flex direction="column" gap="10px" padding="20px">
                  <Text>
                    <span>• {e.attributes.description}</span>
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box padding="70px" maxWidth="1200px" width="100%" margin="auto">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            marginBottom="30px"
            color={TEXT_BOLD_COLOR}
          >
            Học phí
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Box backgroundColor={BG_CARD_COLOR}>
                <Text
                  fontSize="30px"
                  fontWeight="700"
                  textAlign="center"
                  color="white"
                  padding="30px"
                >
                  Group
                </Text>
              </Box>
              <Flex
                direction="column"
                gap="10px"
                padding="20px"
                alignItems="center"
              >
                <Text
                  fontSize={["30px", "40px", "40px"]}
                  fontWeight="700"
                  textAlign="center"
                  color={TEXT_BOLD_COLOR}
                >
                  6.000.000đ
                </Text>
                <Text textAlign="center" mb="30px">
                  Dành cho học viên đăng ký nhóm 2 người (áp dụng trên 01 học
                  viên)
                </Text>
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
                  Đăng kí ngay
                </Button>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Box backgroundColor={BG_CARD_COLOR}>
                <Text
                  fontSize="30px"
                  fontWeight="700"
                  textAlign="center"
                  color="white"
                  padding="30px"
                >
                  Early-bird
                </Text>
              </Box>
              <Flex
                direction="column"
                gap="10px"
                padding="20px"
                alignItems="center"
              >
                <Text
                  fontSize={["30px", "40px", "40px"]}
                  fontWeight="700"
                  textAlign="center"
                  color={TEXT_BOLD_COLOR}
                >
                  6.000.000đ
                </Text>
                <Text textAlign="center" mb="30px">
                  Dành cho học viên đăng ký nhóm 2 người (áp dụng trên 01 học
                  viên)
                </Text>
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
                  Đăng kí ngay
                </Button>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Box backgroundColor={BG_CARD_COLOR}>
                <Text
                  fontSize="30px"
                  fontWeight="700"
                  textAlign="center"
                  color="white"
                  padding="30px"
                >
                  Standard
                </Text>
              </Box>
              <Flex
                direction="column"
                gap="10px"
                padding="20px"
                alignItems="center"
              >
                <Text
                  fontSize={["30px", "40px", "40px"]}
                  fontWeight="700"
                  textAlign="center"
                  color={TEXT_BOLD_COLOR}
                >
                  6.000.000đ
                </Text>
                <Text textAlign="center" mb="30px">
                  Dành cho học viên đăng ký nhóm 2 người (áp dụng trên 01 học
                  viên)
                </Text>
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
                  Đăng kí ngay
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetail;

CourseDetail.getInitialProps = async ({ query }: NextPageContext) => {
  const slug = query.slug?.toString() || "";
  if (!query.slug) {
    return {};
  }

  const res = await fetchCourseBySlug(slug);
  console.log(res);

  if (res.lenght != 0) {
    return { course: res[0] };
  }
};
