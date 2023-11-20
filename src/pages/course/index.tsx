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
import fetchCourses from "../api/getCourses";

interface Course {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    sale: string;
  };
  thumbnail: Thumbnail;
}

interface Thumbnail {
  data: {
    attributes: {
      url: string;
    };
  };
}
interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetch() {
      const res = await fetchCourses();

      setCourses(res);
    }

    fetch();
  }, []);

  return (
    <Box mt="80px">
      <Image
        src="/image/course.png"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      <Box padding="30px" maxWidth="1200px" margin="auto" paddingBottom="100px">
        <Text
          fontSize="40px"
          fontWeight="700"
          marginBottom="30px"
          borderLeft="3px solid"
          paddingLeft="15px"
          color={TEXT_BOLD_COLOR}
        >
          Giai Đoạn Nền Tảng
        </Text>
        <Text textAlign="center" marginBottom="30px">
          Gồm 2 khóa nhỏ là nhập môn, cơ bản. Giai đoạn nền tảng cung cấp những
          kiến thức cơ bản, quan trọng nhất về STEM Robotics, các bộ công cụ
          LEGO Education, LEGO Technic (khái niệm, tính chất, cách sử dụng, cách
          xử lý lỗi về phần cứng & phần mềm)
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          {courses.map((course) => (
            <GridItem
              key={course.id}
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Box overflow="hidden">
                <Image
                  src="/image/card.png"
                  borderTopRightRadius="20px"
                  borderTopLeftRadius="20px"
                  transition="transform 0.3s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Box>
              <Flex direction="column" gap="10px" padding="20px">
                <Text fontSize="30px" fontWeight="700">
                  {course.attributes.title}
                </Text>
                <Text
                  borderBottom="1px solid "
                  borderBottomColor={BD_BOTTOM_CARD}
                  paddingBottom="20px"
                >
                  {course.attributes.description}
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
      <Box backgroundColor={BG_COLOR} paddingBottom="100px" paddingTop="30px">
        <Box padding="30px" maxWidth="1200px" margin="auto">
          <Text
            fontSize="40px"
            fontWeight="700"
            marginBottom="50px"
            borderLeft="3px solid"
            paddingLeft="15px"
            color={TEXT_BOLD_COLOR}
          >
            Chương Trình Trải Nghiệm
          </Text>
          <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
            >
              {courses.map((course) => (
                <GridItem
                  key={course.id}
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                  borderRadius="20px"
                  overflow="hidden"
                  backgroundColor="white"
                >
                  <Box overflow="hidden">
                    <Image
                      src="/image/card.png"
                      borderTopRightRadius="20px"
                      borderTopLeftRadius="20px"
                      transition="transform 0.3s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                    />
                  </Box>
                  <Flex direction="column" gap="10px" padding="20px">
                    <Text fontSize="30px" fontWeight="700">
                      {course.attributes.title}
                    </Text>
                    <Text
                      borderBottom="1px solid "
                      borderBottomColor={BD_BOTTOM_CARD}
                      paddingBottom="20px"
                    >
                      {course.attributes.description}
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
      </Box>
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
            src="/image/sale.png"
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
        <CustomFormInput />
      </Box>
    </Box>
  );
};
export default Course;
