import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

import { BG_COLOR, BG_TEXT_COLOR } from "@/components/styles/color";

export default function Home() {
  return (
    <>
      <Box>
        <Box>
          <Image
            src="/image/thumnail.jpg"
            w="100%"
            h={["200px", "400px", "800px"]}
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
                    Khởi nguồn từ khát khao ươm mầm một thế hệ Marketers tiên
                    phong, Tomorrow Marketers ra đời với sứ mệnh đào tạo kiến
                    thức, định hướng nghề nghiệp, truyền cảm hứng và chuẩn bị
                    hành trang sự nghiệp cho các Marketers tương lai.
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
                <Box maxW="555px">
                  <Image
                    borderRadius="20px"
                    src="/image/image1.jpg"
                    width="100%"
                    height="460px"
                    objectFit="cover"
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
                  objectFit="cover"
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
                <Text backgroundColor={BG_COLOR} padding="20px">
                  Giáo dục STEM là mô hình giáo dục đã và đang được áp dụng tại
                  nhiều quốc gia phát triển trên thế giới. STEM đặc trưng bởi hệ
                  thống kiến thức đa lĩnh vực kết hợp với những bài học kỹ năng
                  mềm và ứng dụng thực tế. Bởi vậy, STEM Education được xem là
                  hình thức giáo dục linh hoạt, hiện đại và có xu hướng ngày
                  càng được nhân rộng trên thế giới. Tại Việt Nam, một số trường
                  học đã áp dụng mô hình học này và nhận về nhiều kết quả ngoài
                  mong đợi.
                </Text>
                <Button padding={["10px", "20px", "30px"]}>
                  <Text fontSize={["16px", "20px", "25px"]}>
                    Tìm hiểu thêm về STEM
                  </Text>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box backgroundColor="rgb(238, 238, 238, 0.5)" padding="70px">
            <Flex direction="column">
              <Text fontSize="30px" fontWeight="700" textAlign="center">
                Các đối tác đồng hành cùng HSR LAB
              </Text>
              <Flex flexDirection={["column", "column", "row"]}>
                <Image src="/image/Techcombank.png" w="450px" />
                <Image src="/image/vietinbank.png" w="450px" />
                <Image src="/image/Vietcombank.png" w="450px" />
                <Image src="/image/mbBank.png" w="450px" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
