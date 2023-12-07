import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

import {
  TEXT_BOLD_COLOR,
  BD_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
} from "@/components/styles/color";
import EnterpiseFormInput from "@/components/formInput/enterpiseFormInput";

interface StudentsProps {}

const Enterpise: React.FC<StudentsProps> = () => {
  const targetRef = React.createRef<HTMLDivElement>();

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box mt="80px">
      <Image
        src="/image/thumnail.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      <Box display="flex" justifyContent="center" padding="70px">
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
          gap="50px"
        >
          <Box maxW="555px">
            <Image
              borderRadius="20px"
              src="/image/gioithieu.png"
              width="100%"
              objectFit="contain"
            />
          </Box>
          <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
            <Text fontSize="30px" fontWeight="700" color={TEXT_BOLD_COLOR}>
              ABOUT US
            </Text>
            <Text>
              HSRL cung cấp dịch vụ nội dung giảng dạy STEM Robtics cũng như đào
              tạo giảng dạy cho doanh nghiệp trong lĩnh vực Giáo dục. Tìm hiểu
              ngay về dịch vụ tư vấn & huấn luyện nội bộ doanh nghiệp tại đây.
            </Text>
            <Button
              padding={["10px", "20px", "25px"]}
              borderRadius="10px"
              border="4px solid"
              borderColor={BD_COLOR}
              backgroundColor={BG_BUTTON_COLOR}
              _hover={{ color: BG_BUTTON_COLOR }}
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              onClick={scrollToTarget}
            >
              <Text
                fontSize={["16px", "20px", "20px"]}
                fontWeight="600"
                color={TEXT_COLOR}
              >
                Nhận tư vấn Ngay
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="70px" marginBottom="70px">
        <Flex direction="column" gap="70px">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            color={TEXT_BOLD_COLOR}
          >
            Các đối tác đồng hành cùng HSR LAB
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="100px"
            margin="auto"
          >
            <GridItem>
              <Image
                src="/image/WRO.png"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/TuePhatEdu.jpg"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/TieuhocDoanThiDiem.png"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/NewtonGrammarSchool.png"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/FLL.png"
                w="200px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/BanMaiSchool.jpg"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/EverestSchool.png"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/LegoEducation.png"
                w="200px"
                h="100px"
                objectFit="contain"
              />
            </GridItem>
          </Grid>
        </Flex>
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
          <Flex direction="column" maxW="555px" gap="30px">
            <Text fontSize="30px" fontWeight="700" color={TEXT_BOLD_COLOR}>
              Lĩnh vực tư vấn
            </Text>
            <Text borderBottom="1px solid #000" pb="20px">
              Với kinh nghiệm 6 năm trong lĩnh vực đào tạo, tư vấn, cùng đội ngũ
              trainer giàu kinh nghiệm, HSR LAB tự tin thiết kế chương trình
              training phù hợp với vấn đề của các doanh nghiệp.
            </Text>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                [1]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Brand Strategy
                </Text>
                <Text>Market Research & Consumer Insight </Text>
                <Text>Brand Building & Development </Text>
                <Text>Brand Communication </Text>
              </Flex>
            </Flex>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                [2]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Brand Strategy
                </Text>
                <Text>Market Research & Consumer Insight </Text>
                <Text>Brand Building & Development </Text>
                <Text>Brand Communication </Text>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src="/image/gioithieu.png"
            w="450px"
            h="100%"
            objectFit="contain"
            borderRadius="10px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          />
        </Flex>
      </Box>
      <Box
        backgroundImage="url('/image/bgEnterpise.png')"
        backgroundSize="cover"
      >
        <Box display="flex" justifyContent="center" padding="70px">
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems="center"
            gap="50px"
          >
            <Box
              maxW="555px"
              display="flex"
              flexDirection="column"
              gap="40px"
              alignItems="center"
            >
              <Text
                color="white"
                fontSize="20px"
                fontWeight="500"
                textAlign="center"
              >
                Với kinh nghiệm dày dặn trong huấn luyện nội bộ doanh nghiệp &
                tư vấn, Tomorrow Marketers sẽ cùng doanh nghiệp bạn xác định
                giải pháp phù hợp và thực tế.
              </Text>
            </Box>
            <Box
              maxW="555px"
              borderRadius="20px"
              overflow="hidden"
              ref={targetRef}
            >
              <EnterpiseFormInput />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default Enterpise;
