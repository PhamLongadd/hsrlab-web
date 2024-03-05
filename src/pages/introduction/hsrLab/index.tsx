import {
  Box,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Link from "next/link";

import {
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
} from "@/components/styles/color";
import { NextPage } from "next";

const HsrLab: NextPage = () => {
  return (
    <Box mt="80px">
      <Image
        src="/image/thumnail.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      <Box backgroundImage="url('/image/anhnen.png')" bgSize="cover">
        <Box maxW="1200px" margin="auto" pt="100px" pb="100px">
          <Card
            maxW="1200px"
            margin="10px"
            borderRadius="50px"
            border="5px solid"
            borderColor={BD_CARD_COLOR}
          >
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  HSR Lab - HUNG STEM ROBOTICS LAB, đối tác chính thức của LEGO
                  Education Việt Nam. Được thành lập từ năm 2019,HSR Lab - HUNG
                  STEM ROBOTICS LAB luôn tự hào là một trong những đơn vị đi đầu
                  trong lĩnh vực nghiên cứu và phát triển bộ môn STEM Robotics
                  gồm 3 phần là Building - Lắp ráp, Programming - Lập trình,
                  Design - thiết kế 3D.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  Với sứ mệnh nghiên cứu, phát triển, mở rộng, vận hành bộ môn
                  STEM Robotics với các nội dung chính về: thiết kế, lắp ráp,
                  lập trình các chú robot từ đơn giản tới phức tạp, HSRL luôn
                  hướng đến những hoạt động thực tế và phù hợp. Một số hoạt động
                  tiêu biểu của HSR Lab - HUNG STEM ROBOTICS LAB có thể kể đến
                  như: là đối tác chính thức của LEGO Education Việt Nam, đơn vị
                  đăng ký chính thức sân chơi khoa học WRO, FLL.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  Và gần đây nhất là giải đấu Robotacon WRO 2023, HSRL với gần
                  hai mươi thành viên đã xuất sắc đạt được:
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  - Tại vòng loại Hải Phòng: Giải vô địch bảng B1, Giải nhì bảng
                  B2, Giải ba bảng B0. Bên cạnh đó là 1 giải khuyến khích bảng
                  B0, 4 giải khuyến khích bảng B1, 2 giải khuyến khích bảng B2.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  - Tại vòng chung kết Quốc gia tại Hà Nội: Giải vô địch bảng
                  B3, Giải nhì bảng B1 và giành được vé đi tham dự vòng CK Quốc
                  Tế tại Panama 07/11 - 09/11. Hơn nữa HSRL cũng có được 06 giải
                  khuyến khích bảng B3, toàn bộ các đội B3 của HSRL đều nằm
                  trong top 10 của vòng CK Quốc Gia tại Hà Nội, 01 giải khuyến
                  khích bảng B4 - 02.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  HSRL luôn chào đón các cá nhân có mong muốn tìm cho mình một
                  môi trường chuyên nghiệp, uy tín để phát triển bản thân. HRSL
                  sẽ là mái nhà chung, là nơi các bạn có thể phát triển các kỹ
                  năng cần thiết cho tương lai.
                </Text>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="50px"
        mb="50px"
      >
        <Text
          textAlign="center"
          fontSize="40px"
          fontWeight="700"
          alignItems="center"
          color={TEXT_BOLD_COLOR}
          marginBottom="30px"
        >
          MANG STEM - ROBOTICS ĐẾN VỚI MỌI HỌC SINH VIỆT NAM
        </Text>
        {/* <Text textAlign="center" alignItems="center">
          Thay đổi phương pháp dạy và học tăng cường việc học cho các con bằng
          những giờ thực hành thực tế
        </Text> */}
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
      {/* <Box backgroundColor={BG_CARD_COLOR}>
        <Text
          color="white"
          fontSize="30px"
          textAlign="center"
          fontWeight="700"
          padding="10px"
        >
          Human of TM - Our team
        </Text>
      </Box> */}
      {/* <Box mt="50px" mb="50px">
        <Flex
          maxW="1200px"
          margin="auto"
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          padding="10px"
          gap="20px"
        >
          <Box
            maxW="555px"
            border="10px solid"
            borderColor={BD_CARD_COLOR}
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <Image
              src="/image/gioithieu.png"
              w="450px"
              objectFit="contain"
              borderRadius="10px"
            />
          </Box>
          <Flex direction="column" maxW="555px" gap="30px">
            <Text
              fontSize="30px"
              fontWeight="700"
              borderBottom="2px solid"
              borderColor={BD_CARD_COLOR}
              color={TEXT_BOLD_COLOR}
            >
              Phương Mai - Product Team
            </Text>
            <Text>
              TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
              nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
              để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
              thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
              bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân là
              rất lớn, nhưng đồng thời điều này cũng mang lại cho mình những
              trải nghiệm quý giá.
            </Text>
            <Text>
              Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và hạnh
              phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết và
              chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt hơn mà
              không có cảm giác "giậm chân tại chỗ" trong công việc. Hạnh phúc
              hơn vì mình được làm việc trong môi trường đề cao sự hợp tác, hỗ
              trợ lẫn nhau, coi trọng sự cải tiến và những giá trị thật. Mình
              học được và được truyền cảm hứng rất nhiều từ sếp và những người
              đồng nghiệp trẻ trung và tài năng.{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        backgroundImage="url('/image/bgOurTeam.jpg')"
        mb="50px"
        backgroundSize="cover"
      >
        <Box pt="50px" pb="50px">
          <Flex
            maxW="1200px"
            margin="auto"
            justifyContent="space-between"
            flexDirection={["column", "column", "row"]}
            padding={["10px", "20px", "50px"]}
            gap="20px"
            backgroundColor="rgba(5, 31, 79, 0.9)"
          >
            <Flex direction="column" maxW="555px" gap="30px">
              <Text
                fontSize="30px"
                fontWeight="700"
                borderBottom="2px solid #fff"
                color="white"
              >
                Phương Mai - Product Team
              </Text>
              <Text color="white">
                TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
                nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
                để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
                thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
                bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân
                là rất lớn, nhưng đồng thời điều này cũng mang lại cho mình
                những trải nghiệm quý giá.
              </Text>
              <Text color="white">
                Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và
                hạnh phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết
                và chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt
                hơn mà không có cảm giác "giậm chân tại chỗ" trong công việc.
                Hạnh phúc hơn vì mình được làm việc trong môi trường đề cao sự
                hợp tác, hỗ trợ lẫn nhau, coi trọng sự cải tiến và những giá trị
                thật. Mình học được và được truyền cảm hứng rất nhiều từ sếp và
                những người đồng nghiệp trẻ trung và tài năng.{" "}
              </Text>
            </Flex>
            <Box maxW="555px">
              <Image
                src="/image/gioithieu.png"
                w="450px"
                objectFit="contain"
                borderRadius="10px"
                boxShadow="3px 3px 4px rgba(255, 255, 255, 0.8)"
              />
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
          <Box
            maxW="555px"
            border="10px solid"
            borderColor={BD_CARD_COLOR}
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <Image
              src="/image/gioithieu.png"
              w="450px"
              objectFit="contain"
              borderRadius="10px"
            />
          </Box>
          <Flex direction="column" maxW="555px" gap="30px">
            <Text
              fontSize="30px"
              fontWeight="700"
              borderBottom="2px solid"
              borderColor={BD_CARD_COLOR}
              color={TEXT_BOLD_COLOR}
            >
              Phương Mai - Product Team
            </Text>
            <Text>
              TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
              nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
              để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
              thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
              bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân là
              rất lớn, nhưng đồng thời điều này cũng mang lại cho mình những
              trải nghiệm quý giá.
            </Text>
            <Text>
              Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và hạnh
              phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết và
              chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt hơn mà
              không có cảm giác "giậm chân tại chỗ" trong công việc. Hạnh phúc
              hơn vì mình được làm việc trong môi trường đề cao sự hợp tác, hỗ
              trợ lẫn nhau, coi trọng sự cải tiến và những giá trị thật. Mình
              học được và được truyền cảm hứng rất nhiều từ sếp và những người
              đồng nghiệp trẻ trung và tài năng.{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor="rgba(234, 242, 254, 0.5)">
        <Box maxW="1200px" margin="auto" pt="50px" pb="50px">
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
              <Image
                src="/image/gioithieu.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/gioithieu.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/gioithieu.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
            <GridItem>
              <Image
                src="/image/gioithieu.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
          </Grid>
        </Box>
      </Box> */}
    </Box>
  );
};
export default HsrLab;
