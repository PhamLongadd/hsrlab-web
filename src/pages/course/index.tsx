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

import { BD_BOTTOM_CARD } from "@/components/styles/color";
import { StarIcon } from "@chakra-ui/icons";

import CustomFormInput from "@/components/formInput/customFormInput";
import Link from "next/link";

interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
  return (
    <Box mt="80px">
      <Box padding="30px" maxWidth="1200px" width="100%" margin="auto">
        <Text
          fontSize="30px"
          fontWeight="700"
          textAlign="center"
          marginBottom="30px"
        >
          Các khóa học
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
              <Text fontSize="20px" fontWeight="700">
                Marketing Foundation
              </Text>
              <Text
                borderBottom="1px solid "
                borderBottomColor={BD_BOTTOM_CARD}
                paddingBottom="20px"
              >
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
              <Link href="course/[slug].tsx">
                <Button
                  w="200px"
                  padding="20px"
                  marginBottom="20px"
                  transition="transform 0.3s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </Link>
              <Tag variant="subtle" colorScheme="red" padding="10px" w="250px">
                <TagLeftIcon boxSize="12px" as={StarIcon} color="yellow" />
                <TagLabel color="#ff0000" fontSize="20px" fontWeight="600">
                  Giảm giá 50%
                </TagLabel>
              </Tag>
            </Flex>
          </GridItem>
          <GridItem
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
              <Text fontSize="20px" fontWeight="700">
                Marketing Foundation
              </Text>
              <Text
                borderBottom="1px solid "
                borderBottomColor={BD_BOTTOM_CARD}
                paddingBottom="20px"
              >
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
              <Button
                w="200px"
                padding="20px"
                marginBottom="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Flex>
          </GridItem>
          <GridItem
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
              <Text fontSize="20px" fontWeight="700">
                Marketing Foundation
              </Text>
              <Text
                borderBottom="1px solid "
                borderBottomColor={BD_BOTTOM_CARD}
                paddingBottom="20px"
              >
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
              <Button
                w="200px"
                padding="20px"
                marginBottom="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Flex>
          </GridItem>
          <GridItem
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
              <Text fontSize="20px" fontWeight="700">
                Marketing Foundation
              </Text>
              <Text
                borderBottom="1px solid "
                borderBottomColor={BD_BOTTOM_CARD}
                paddingBottom="20px"
              >
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
              <Button
                w="200px"
                padding="20px"
                marginBottom="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Flex>
          </GridItem>
          <GridItem
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
              <Text fontSize="20px" fontWeight="700">
                Marketing Foundation
              </Text>
              <Text
                borderBottom="1px solid "
                borderBottomColor={BD_BOTTOM_CARD}
                paddingBottom="20px"
              >
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
              <Button
                w="200px"
                padding="20px"
                marginBottom="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Flex>
          </GridItem>
        </Grid>
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
            padding="30px"
            fontSize="25px"
            marginTop="30px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            transition="transform 0.3s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            Tìm hiểu thêm
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
