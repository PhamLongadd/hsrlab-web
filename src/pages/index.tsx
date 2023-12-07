import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
} from "@/components/styles/color";
import FormInput from "@/components/formInput";

export default function Home() {
  return (
    <Box mt="80px">
      <Head>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <Image
        src="/image/thumnail.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      <Box backgroundImage="url('/image/banner1.jpg')">
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
                HSR LAB
              </Text>
              <Text
                color="white"
                backgroundColor={BG_TEXT_COLOR}
                padding="20px"
              >
                Mang sứ mệnh ươm mầm một thế hệ trẻ được phát triển toàn diện,
                Hung STEM Robotics Lab ra đời với sứ mệnh đào tạo kiến thức,
                truyền cảm hứng và chuẩn bị hành trang cho các công dân tương
                lai của thời đại 4.0.
              </Text>

              <Button
                padding={["10px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                backgroundColor={BG_BUTTON_COLOR}
                _hover={{ color: BG_BUTTON_COLOR }}
              >
                <Link href="/introduction/hsrLab">
                  <Text
                    fontSize={["16px", "20px", "20px"]}
                    fontWeight="600"
                    color={TEXT_COLOR}
                  >
                    Giới thiệu về HSR LAB
                  </Text>
                </Link>
              </Button>
            </Box>
            <Box maxW="555px" borderRadius="20px" overflow="hidden">
              <Image
                src="/image/image1.jpg"
                width="100%"
                height="460px"
                objectFit="cover"
                borderRadius="20px"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" padding="70px">
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
          gap="50px"
        >
          <Box maxW="555px">
            <Image
              borderRadius="20px"
              src="/image/stem.png"
              width="100%"
              height="460px"
              objectFit="contain"
            />
          </Box>
          <Box
            maxW="555px"
            display="flex"
            flexDirection="column"
            gap="20px"
            alignItems="center"
          >
            <Text fontSize="30px" fontWeight="700" color={TEXT_BOLD_COLOR}>
              STEM là gì?
            </Text>
            <Text padding="20px">
              Giáo dục STEM là mô hình giáo dục đã và đang được áp dụng tại
              nhiều quốc gia phát triển trên thế giới. STEM đặc trưng bởi hệ
              thống kiến thức đa lĩnh vực kết hợp với những bài học kỹ năng mềm
              và ứng dụng thực tế. Bởi vậy, STEM Education được xem là hình thức
              giáo dục linh hoạt, hiện đại và có xu hướng ngày càng được nhân
              rộng trên thế giới. Tại Việt Nam, một số trường học đã áp dụng mô
              hình học này và nhận về nhiều kết quả ngoài mong đợi.
            </Text>
            <Text padding="20px">
              Giáo dục STEM là mô hình giáo dục đã và đang được áp dụng tại
              nhiều quốc gia phát triển trên thế giới. STEM đặc trưng bởi hệ
              thống kiến thức đa lĩnh vực kết hợp với những bài học kỹ năng mềm
              và ứng dụng thực tế.
            </Text>
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
      <Box backgroundColor={BG_COLOR}>
        <Flex
          direction="column"
          padding="70px"
          maxWidth="1200px"
          width="100%"
          margin="auto"
          alignItems="center"
        >
          <Text
            textAlign="center"
            fontWeight="700"
            fontSize="30px"
            marginBottom="30px"
            color={TEXT_BOLD_COLOR}
          >
            Ưu đãi khóa học mới
          </Text>
          <Image
            src="/image/sale.png"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            objectFit="cover"
            w="auto"
            h={["200px", "400px", "550px"]}
          />
          <Button
            mt="30px"
            padding={["10px", "20px", "25px"]}
            borderRadius="10px"
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
            Sự kiện sắp tới
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
        <FormInput />
      </Box>
      <Box backgroundImage="url('/image/blog1.jpg')" bgSize="cover">
        <Box maxW="1200px" margin="auto" pt="200px" pb="200px">
          <Card
            maxW="400px"
            alignItems="center"
            margin="10px"
            borderRadius="50px"
            textAlign="center"
            border="5px solid"
            borderColor={BD_CARD_COLOR}
          >
            <CardHeader>
              <Heading size="md">
                Khám phá vũ trụ STEM với các bài viết của HSRL
              </Heading>
            </CardHeader>

            <CardBody>
              <Box>
                <Text pt="2" fontSize="sm">
                  Bạn muốn tìm hiểu về lắp ráp, lập trình hay thiết kế 3D? Bạn
                  chưa hiểu rõ thế giới STEM phát triển như thế nào? Bạn muốn
                  cập nhật những mẫu mô hình, các cuộc thi và xu hướng lập trình
                  mới nhất?
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Button
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
                  fontSize={["16px", "20px", "20px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Khám phá Blog
                </Text>
              </Button>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
