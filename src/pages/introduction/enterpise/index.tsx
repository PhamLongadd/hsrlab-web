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
import Link from "next/link";

import {
  TEXT_BOLD_COLOR,
  BD_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_CARD_COLOR,
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
      <Box paddingTop="70px" paddingBottom="70px" maxW="1200px" margin="auto">
        <Flex direction="column" gap="70px">
          <Text
            fontSize="30px"
            fontWeight="700"
            color={TEXT_BOLD_COLOR}
            borderLeft="5px solid"
            borderColor={BD_CARD_COLOR}
            borderRadius="4px"
            paddingLeft="15px"
            marginLeft="10px"
          >
            Các đối tác đồng hành cùng HSR LAB
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="100px"
            margin="auto"
          >
            <GridItem>
              <Image
                src="/image/LEGOEDUCATION.png"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/EverestSchool.png"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/TuePhatEdu.jpg"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/TieuhocDoanThiDiem.png"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/BanMaiSchool.jpg"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/NewtonGrammarSchool.png"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
            <GridItem colSpan={3} justifySelf="center">
              <Image
                src="/image/NGOISAOHNOI.jpg"
                w="250px"
                h="150px"
                objectFit="contain"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
      <Box paddingTop="70px" paddingBottom="70px" maxW="1200px" margin="auto">
        <Flex direction="column" gap="70px">
          <Text
            fontSize="30px"
            fontWeight="700"
            color={TEXT_BOLD_COLOR}
            borderLeft="5px solid"
            borderColor={BD_CARD_COLOR}
            borderRadius="4px"
            paddingLeft="15px"
            marginLeft="10px"
          >
            Các cuộc thi HSR LAB tham gia
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="100px"
            margin="auto"
          >
            <GridItem>
              <Link href="https://wro-association.org/" target="_blank">
                <Image
                  src="/image/WRO.png"
                  w="250px"
                  h="150px"
                  objectFit="contain"
                />
              </Link>
            </GridItem>
            <GridItem>
              <Link href="https://www.firstlegoleague.org/" target="_blank">
                <Image
                  src="/image/FLL.png"
                  w="250px"
                  h="150px"
                  objectFit="contain"
                />
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://www.facebook.com/uetmakerthon"
                target="_blank"
              >
                <Image
                  src="/image/UET.jpg"
                  w="250px"
                  h="150px"
                  objectFit="contain"
                />
              </Link>
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
              Với kinh nghiệm 4 năm trong lĩnh vực đào tạo, tư vấn, cùng đội ngũ
              nhân sự giàu kinh nghiệm, HSR LAB tự tin thiết kế chương trình
              training phù hợp với vấn đề của các doanh nghiệp.
            </Text>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                [1]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Nội dung học tập
                </Text>
                <Text>
                  Cung cấp giáo trình, nội dung giảng dạy phù hợp với từng doanh
                  nghiệp
                </Text>
                <Text>
                  Cung cấp nhân sự giảng dạy, training cho doanh nghiệp
                </Text>
              </Flex>
            </Flex>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                [2]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Công cụ
                </Text>
                <Text>
                  Cung cấp các công cụ đầy đủ trong giáo trình giảng dạy: Bộ
                  dụng cụ, sa bàn, …
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src="/image/logo1.jpg"
            w="450px"
            h="100%"
            objectFit="contain"
            borderRadius="10px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          />
        </Flex>
      </Box>
      <Box
        backgroundImage="url('/image/anh1.jpg')"
        backgroundSize="cover"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="black"
          opacity="0.5" // Adjust the opacity as needed
        ></Box>
        <Box
          display="flex"
          justifyContent="center"
          padding="70px"
          position="relative"
        >
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
