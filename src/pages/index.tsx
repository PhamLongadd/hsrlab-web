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

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
} from "@/components/styles/color";
import FormInput from "@/components/formInput";

export default function Home() {
  return (
    <Box mt="80px">
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
                Khởi nguồn từ khát khao ươm mầm một thế hệ Marketers tiên phong,
                Tomorrow Marketers ra đời với sứ mệnh đào tạo kiến thức, định
                hướng nghề nghiệp, truyền cảm hứng và chuẩn bị hành trang sự
                nghiệp cho các Marketers tương lai.
              </Text>
              <Flex gap={["10px", "20px", "30px"]}>
                <Flex direction="column" gap="20px" alignItems="center">
                  <Text color="white" fontSize="30px" fontWeight="700">
                    08
                  </Text>
                  <Text color="white" fontSize="16px" fontWeight="600">
                    Năm
                  </Text>
                </Flex>
                <Flex direction="column" gap="20px" alignItems="center">
                  <Text color="white" fontSize="30px" fontWeight="700">
                    1000+
                  </Text>
                  <Text color="white" fontSize="16px" fontWeight="600">
                    Học viên
                  </Text>
                </Flex>
                <Flex direction="column" gap="20px" alignItems="center">
                  <Text color="white" fontSize="30px" fontWeight="700">
                    350+
                  </Text>
                  <Text color="white" fontSize="16px" fontWeight="600">
                    Lớp học
                  </Text>
                </Flex>
                <Flex direction="column" gap="20px" alignItems="center">
                  <Text color="white" fontSize="30px" fontWeight="700">
                    40+
                  </Text>
                  <Text color="white" fontSize="16px" fontWeight="600">
                    Giảng viên
                  </Text>
                </Flex>
                <Flex direction="column" gap="20px" alignItems="center">
                  <Text color="white" fontSize="30px" fontWeight="700">
                    150+
                  </Text>
                  <Text color="white" fontSize="16px" fontWeight="600">
                    Sự kiện
                  </Text>
                </Flex>
              </Flex>
              <Button padding={["10px", "20px", "30px"]}>
                <Text fontSize={["16px", "20px", "25px"]}>
                  Giới thiệu về HSR LAB
                </Text>
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
            gap="30px"
            alignItems="center"
          >
            <Text fontSize="30px" fontWeight="700">
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
            <Button padding={["10px", "20px", "30px"]}>
              <Text fontSize={["16px", "20px", "25px"]}>
                Tìm hiểu thêm về STEM
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box backgroundColor={BG_COLOR} padding="70px">
        <Flex direction="column">
          <Text fontSize="30px" fontWeight="700" textAlign="center">
            Các đối tác đồng hành cùng HSR LAB
          </Text>
          <Flex flexDirection={["column", "column", "row"]}>
            <Image src="/image/Techcombank.png" w="450px" objectFit="contain" />
            <Image src="/image/vietinbank.png" w="450px" objectFit="contain" />
            <Image src="/image/Vietcombank.png" w="450px" objectFit="contain" />
            <Image src="/image/mbBank.png" w="450px" objectFit="contain" />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Box padding="70px" maxWidth="1200px" width="100%" margin="auto">
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
            border="5px solid rgb(136, 14, 50)"
          >
            <CardHeader>
              <Heading size="md">
                KHÁM PHÁ THẾ GIỚI MARKETING TỪ CÁC BÀI VIẾT CỦA TOMORROW
                MARKETERS{" "}
              </Heading>
            </CardHeader>

            <CardBody>
              <Box>
                <Text pt="2" fontSize="sm">
                  Bạn muốn tìm hiểu về Brand, Content, Digital hay Trade
                  Marketing? Bạn chưa hiểu rõ thế giới Client và Agency khác
                  nhau như thế nào? Bạn muốn cập nhật những case study và xu
                  hướng marketing mới nhất?
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Button
                padding="25px"
                fontSize="20px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Khám phá Blog
              </Button>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
