import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
} from "@/components/styles/color";
import CourseFormInput from "@/components/formInput/courseFormInput";

interface CourseSlugProps {}

const CourseSlug: React.FC<CourseSlugProps> = () => {
  return (
    <Box mt="80px">
      <Box backgroundColor={BG_COLOR}>
        <Box padding="20px">
          <Image
            src="/image/card.png"
            w="1200px"
            margin="auto"
            h={["400px", "600px", "600px"]}
            objectFit="cover"
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          />
        </Box>
      </Box>
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
                Lịch khai giảng
              </Text>
              <Flex
                direction="column"
                gap="10px"
                backgroundColor={BG_TEXT_COLOR}
                padding="20px"
              >
                <Text color="white" fontSize="20px" fontWeight="600">
                  Lớp học online
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
              borderBottom="2px solid #000"
            >
              Hiểu toàn diện các Digital Platforms để lập kế hoạch Digital
              Marketing hoàn chỉnh
            </Text>
            <Text>
              Digital Marketing, với đặc điểm có thể đo lường (measurable), có
              thể nhắm mục tiêu (targetable) và có thể tối ưu (optimize-able)
              đang là công cụ hiệu quả và hợp lý nhất với các doanh nghiệp vừa
              và nhỏ. Đây là thời điểm phù hợp nhất để ứng dụng Digital vào
              doanh nghiệp của bạn.
            </Text>
            <Text>
              - 46% khách hàng thực hiện tìm kiếm thông tin, nghiên cứu sản phẩm
              trên internet trước khi quyết định mua một sản phẩm đắt tiền. -
              42% người được khảo sát nói rằng quảng cáo trực tuyến ảnh hưởng
              tới quyết định mua sắm của họ.
            </Text>
            <Text>
              Sự phát triển của Digital mở ra một cơ hội lớn cho các doanh
              nghiệp tiếp cận, tương tác với khách hàng, tuy nhiên nếu bạn vẫn
              chưa thấu hiểu và tận dụng được nó, sự chậm chạp sẽ giết chết
              doanh nghiệp của bạn, bởi khách hàng rơi vào tay những đối thủ
              nhanh nhẹn hơn.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor="rgba(234, 242, 254, 0.5)">
        <Box maxW="1200px" margin="auto" pt="50px" pb="50px">
          <Text textAlign="center" fontSize="30px" fontWeight="700" mb="30px">
            Sau khóa học bạn nhận được gì
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={4}
            padding="10px"
          >
            <GridItem>
              <Flex direction="column" gap="30px">
                <Flex
                  alignItems="center"
                  borderTop="1px solid"
                  borderBottom="1px solid"
                  gap="20px"
                >
                  <Text fontSize="50px" fontWeight="700">
                    01.
                  </Text>
                  <Text fontSize="20px" fontWeight="700">
                    Tư duy Marketing trên môi trường số
                  </Text>
                </Flex>
                <Text>
                  Hiểu được bản chất của việc làm Quảng cáo, Marketing trên các
                  nền tảng Digital nói chung. Biết cách vận dụng tư duy và kỹ
                  năng Digital Marketing để phân tích & nghiên cứu ngành hàng,
                  khách hàng, đối thủ trên môi trường Digital.
                </Text>
                <Flex
                  alignItems="center"
                  borderTop="1px solid"
                  borderBottom="1px solid"
                  gap="20px"
                >
                  <Text fontSize="50px" fontWeight="700">
                    02.
                  </Text>
                  <Text fontSize="20px" fontWeight="700">
                    Hiểu đặc thù các kênh truyền thông Digital
                  </Text>
                </Flex>
                <Text>
                  Hiểu được bản chất của việc làm Quảng cáo, Marketing trên các
                  nền tảng Digital nói chung. Biết cách vận dụng tư duy và kỹ
                  năng Digital Marketing để phân tích & nghiên cứu ngành hàng,
                  khách hàng, đối thủ trên môi trường Digital.
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Image
                src="/image/imageIn1.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/imageIn3.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
            <GridItem>
              <Flex direction="column" gap="30px">
                <Flex
                  alignItems="center"
                  borderTop="1px solid"
                  borderBottom="1px solid"
                  gap="20px"
                >
                  <Text fontSize="50px" fontWeight="700">
                    03.
                  </Text>
                  <Text fontSize="20px" fontWeight="700">
                    Tư duy Marketing trên môi trường số
                  </Text>
                </Flex>
                <Text>
                  Hiểu được bản chất của việc làm Quảng cáo, Marketing trên các
                  nền tảng Digital nói chung. Biết cách vận dụng tư duy và kỹ
                  năng Digital Marketing để phân tích & nghiên cứu ngành hàng,
                  khách hàng, đối thủ trên môi trường Digital.
                </Text>
                <Flex
                  alignItems="center"
                  borderTop="1px solid"
                  borderBottom="1px solid"
                  gap="20px"
                >
                  <Text fontSize="50px" fontWeight="700">
                    04.
                  </Text>
                  <Text fontSize="20px" fontWeight="700">
                    Hiểu đặc thù các kênh truyền thông Digital
                  </Text>
                </Flex>
                <Text>
                  Hiểu được bản chất của việc làm Quảng cáo, Marketing trên các
                  nền tảng Digital nói chung. Biết cách vận dụng tư duy và kỹ
                  năng Digital Marketing để phân tích & nghiên cứu ngành hàng,
                  khách hàng, đối thủ trên môi trường Digital.
                </Text>
              </Flex>
            </GridItem>
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
          >
            Khóa học dành cho ai
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
              <Flex direction="column" gap="10px" padding="20px">
                <Text fontSize="20px" fontWeight="700">
                  Media/Brand Team (Client) hoặc Account/ Planner (Agency)
                </Text>
                <Text borderBottomColor={BD_BOTTOM_CARD} paddingBottom="20px">
                  Muốn tìm hiểu tổng quan về cách vận hành của các Digital
                  Platform để làm việc với bộ phận quảng cáo cho hiệu quả
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex direction="column" gap="10px" padding="20px">
                <Text fontSize="20px" fontWeight="700">
                  Media/Brand Team (Client) hoặc Account/ Planner (Agency)
                </Text>
                <Text borderBottomColor={BD_BOTTOM_CARD} paddingBottom="20px">
                  Muốn tìm hiểu tổng quan về cách vận hành của các Digital
                  Platform để làm việc với bộ phận quảng cáo cho hiệu quả
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex direction="column" gap="10px" padding="20px">
                <Text fontSize="20px" fontWeight="700">
                  Media/Brand Team (Client) hoặc Account/ Planner (Agency)
                </Text>
                <Text borderBottomColor={BD_BOTTOM_CARD} paddingBottom="20px">
                  Muốn tìm hiểu tổng quan về cách vận hành của các Digital
                  Platform để làm việc với bộ phận quảng cáo cho hiệu quả
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box backgroundColor={BG_COLOR}>
        <Box padding="70px" maxWidth="1200px" width="100%" margin="auto">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            marginBottom="30px"
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
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex
                alignItems="center"
                gap="10px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text
                  backgroundColor="rgb(136, 14, 79)"
                  fontSize="30px"
                  fontWeight="700"
                  padding="20px"
                  color="white"
                >
                  1
                </Text>
                <Text fontSize="20px" fontWeight="700">
                  Marketing Overview
                </Text>
              </Flex>
              <Flex
                direction="column"
                gap="10px"
                padding="20px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text>
                  • Nhiệm vụ và vai trò của Marketing trong quy trình kinh
                  doanh.
                </Text>
                <Text>
                  • Nắm bắt bản chất của Marketing thông qua nghiên cứu và phân
                  tích thị trường 3C (Consumer, Competitor, Company)
                </Text>
                <Text>
                  • Bức tranh toàn cảnh về nghề Marketing tại VN: các mảng nghề
                  nghiệp, các loại hình công ty và lộ trình thăng tiến.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex
                alignItems="center"
                gap="10px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text
                  backgroundColor="rgb(136, 14, 79)"
                  fontSize="30px"
                  fontWeight="700"
                  padding="20px"
                  color="white"
                >
                  2
                </Text>
                <Text fontSize="20px" fontWeight="700">
                  Marketing Overview
                </Text>
              </Flex>
              <Flex direction="column" gap="10px" padding="20px">
                <Text>
                  • Nhiệm vụ và vai trò của Marketing trong quy trình kinh
                  doanh.
                </Text>
                <Text>
                  • Nắm bắt bản chất của Marketing thông qua nghiên cứu và phân
                  tích thị trường 3C (Consumer, Competitor, Company)
                </Text>
                <Text>
                  • Bức tranh toàn cảnh về nghề Marketing tại VN: các mảng nghề
                  nghiệp, các loại hình công ty và lộ trình thăng tiến.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex
                alignItems="center"
                gap="10px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text
                  backgroundColor="rgb(136, 14, 79)"
                  fontSize="30px"
                  fontWeight="700"
                  padding="20px"
                  color="white"
                >
                  3
                </Text>
                <Text fontSize="20px" fontWeight="700">
                  Marketing Overview
                </Text>
              </Flex>
              <Flex direction="column" gap="10px" padding="20px">
                <Text>
                  • Nhiệm vụ và vai trò của Marketing trong quy trình kinh
                  doanh.
                </Text>
                <Text>
                  • Nắm bắt bản chất của Marketing thông qua nghiên cứu và phân
                  tích thị trường 3C (Consumer, Competitor, Company)
                </Text>
                <Text>
                  • Bức tranh toàn cảnh về nghề Marketing tại VN: các mảng nghề
                  nghiệp, các loại hình công ty và lộ trình thăng tiến.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex
                alignItems="center"
                gap="10px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text
                  backgroundColor="rgb(136, 14, 79)"
                  fontSize="30px"
                  fontWeight="700"
                  padding="20px"
                  color="white"
                >
                  4
                </Text>
                <Text fontSize="20px" fontWeight="700">
                  Marketing Overview
                </Text>
              </Flex>
              <Flex direction="column" gap="10px" padding="20px">
                <Text>
                  • Nhiệm vụ và vai trò của Marketing trong quy trình kinh
                  doanh.
                </Text>
                <Text>
                  • Nắm bắt bản chất của Marketing thông qua nghiên cứu và phân
                  tích thị trường 3C (Consumer, Competitor, Company)
                </Text>
                <Text>
                  • Bức tranh toàn cảnh về nghề Marketing tại VN: các mảng nghề
                  nghiệp, các loại hình công ty và lộ trình thăng tiến.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              overflow="hidden"
            >
              <Flex
                alignItems="center"
                gap="10px"
                borderBottom="1px solid rgb(136, 14, 79)"
              >
                <Text
                  backgroundColor="rgb(136, 14, 79)"
                  fontSize="30px"
                  fontWeight="700"
                  padding="20px"
                  color="white"
                >
                  5
                </Text>
                <Text fontSize="20px" fontWeight="700">
                  Marketing Overview
                </Text>
              </Flex>
              <Flex direction="column" gap="10px" padding="20px">
                <Text>
                  • Nhiệm vụ và vai trò của Marketing trong quy trình kinh
                  doanh.
                </Text>
                <Text>
                  • Nắm bắt bản chất của Marketing thông qua nghiên cứu và phân
                  tích thị trường 3C (Consumer, Competitor, Company)
                </Text>
                <Text>
                  • Bức tranh toàn cảnh về nghề Marketing tại VN: các mảng nghề
                  nghiệp, các loại hình công ty và lộ trình thăng tiến.
                </Text>
              </Flex>
            </GridItem>
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
              <Box backgroundColor="rgb(136, 14, 79)">
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
                  fontSize={["30px", "50px", "50px"]}
                  fontWeight="700"
                  textAlign="center"
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
              <Box backgroundColor="rgb(136, 14, 79)">
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
                  fontSize={["30px", "50px", "50px"]}
                  fontWeight="700"
                  textAlign="center"
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
              <Box backgroundColor="rgb(136, 14, 79)">
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
                  fontSize={["30px", "50px", "50px"]}
                  fontWeight="700"
                  textAlign="center"
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
export default CourseSlug;
