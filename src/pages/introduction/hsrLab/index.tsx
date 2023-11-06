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

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
} from "@/components/styles/color";
interface HsrLabProps {}

const HsrLab: React.FC<HsrLabProps> = () => {
  return (
    <Box mt="80px">
      <Image src="/image/bannerIntroduction.png" w="100%" />
      <Box backgroundImage="url('/image/bgIntroduction2.jpg')" bgSize="cover">
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
                  Mỗi người đều có sự lựa chọn cho riêng mình trên hành trình
                  tuổi trẻ. Và Tomorrow Marketers chính là nơi chúng tôi chọn để
                  gửi gắm nhiệt huyết, hoài bão, đam mê của mình trong những năm
                  tháng đẹp nhất của cuộc đời.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  Cách đây 8 năm, ngày 09/09/2015, lớp học đầu tiên của Tomorrow
                  Marketers được ra đời, với sứ mệnh truyền cảm hứng và chuẩn bị
                  hành trang sự nghiệp cho thế hệ Marketers tiên phong. Chặng
                  đường 8 năm hiện thực hóa sứ mệnh ấy thực sự không dễ dàng.
                  Nhưng nguồn động lực mạnh mẽ nhất giúp TM team vượt qua thử
                  thách và không ngừng nỗ lực - đó chính là tình cảm, sự tin
                  tưởng từ học viên, từ độc giả yêu mến Marketing trên khắp mọi
                  miền Tổ Quốc. Chúng tôi lấy đó làm cảm hứng làm việc mỗi ngày,
                  với niềm tin rằng tâm huyết của mình sẽ truyền lửa đam mê, để
                  các bạn ngày càng tin tưởng và vững bước hơn trên con đường sự
                  nghiệp Marketing đã chọn.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  Ở TM, chúng tôi chọn cùng nhau lớn lên, cùng nhau trưởng
                  thành, cùng trải nghiệm những cung bậc cảm xúc của tuổi trẻ,
                  trải qua những lần vấp ngã để nhận lại là những bài học, kinh
                  nghiệm và niềm tin để bước tiếp. Những ngày tháng này, dù có
                  bao nhiêu nỗi buồn hay niềm vui, đều rất tươi đẹp và đáng nhớ.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  8 năm vừa qua, với 350 lớp học, hơn 40 trainer nhiều năm kinh
                  nghiệm từ nhiều ngành hàng khác nhau, cùng hàng ngàn bài viết
                  tâm huyết trên các kênh truyền thông, TM dần trở thành cái tên
                  quen thuộc với cộng đồng yêu thích Marketing mọi miền Tổ quốc.
                  Trong hơn 15.000 học viên của TM, không ít bạn đã đạt được
                  những thành tựu đáng tự hào. Đó là sự động viên, khích lệ lớn
                  lao nhất để TM team tiếp tục nỗ lực, tiếp tục cố gắng bền bỉ
                  qua từng ngày tháng.
                </Text>
              </Box>
            </CardBody>
            <CardBody>
              <Box>
                <Text fontSize="16px" fontWeight="500">
                  Một hành trình dài vẫn đang chờ đợi ở phía trước, cám ơn bạn
                  vì đã có mặt trong hành trình của chúng tôi. Tomorrow
                  Marketers bước sang tuổi thứ 8 hy vọng vẫn luôn có sự ủng hộ
                  của bạn trong từng bước trưởng thành của mình!
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
        >
          MANG STEM - ROBOTICS ĐẾN VỚI MỌI HỌC SINH VIỆT NAM
        </Text>
        <Text textAlign="center" alignItems="center">
          Thay đổi phương pháp dạy và học tăng cường việc học cho các con bằng
          những giờ thực hành thực tế
        </Text>
        <Flex
          gap={["10px", "30px", "50px"]}
          mt="30px"
          alignItems="center"
          textAlign="center"
          backgroundColor={BG_CARD_COLOR}
          padding="30px"
          borderRadius="10px"
          flexDirection={["column", "column", "row"]}
        >
          <Flex
            direction="column"
            gap={["10px", "10px", "20px"]}
            alignItems="center"
          >
            <Text
              fontSize={["40px", "40px", "50px"]}
              fontWeight="700"
              color={TEXT_COLOR}
            >
              08
            </Text>
            <Text fontSize="16px" fontWeight="600" color={TEXT_COLOR}>
              Năm
            </Text>
          </Flex>
          <Flex direction="column" gap="20px" alignItems="center">
            <Text
              fontSize={["40px", "40px", "50px"]}
              fontWeight="700"
              color={TEXT_COLOR}
            >
              1000+
            </Text>
            <Text fontSize="16px" fontWeight="600" color={TEXT_COLOR}>
              Học viên
            </Text>
          </Flex>
          <Flex direction="column" gap="20px" alignItems="center">
            <Text
              fontSize={["40px", "40px", "50px"]}
              fontWeight="700"
              color={TEXT_COLOR}
            >
              350+
            </Text>
            <Text fontSize="16px" fontWeight="600" color={TEXT_COLOR}>
              Lớp học
            </Text>
          </Flex>
          <Flex direction="column" gap="20px" alignItems="center">
            <Text
              fontSize={["40px", "40px", "50px"]}
              fontWeight="700"
              color={TEXT_COLOR}
            >
              40+
            </Text>
            <Text fontSize="16px" fontWeight="600" color={TEXT_COLOR}>
              Giảng viên
            </Text>
          </Flex>
          <Flex direction="column" gap="20px" alignItems="center">
            <Text
              fontSize={["40px", "40px", "50px"]}
              fontWeight="700"
              color={TEXT_COLOR}
            >
              150+
            </Text>
            <Text fontSize="16px" fontWeight="600" color={TEXT_COLOR}>
              Sự kiện
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor={BG_COLOR} padding="70px">
        <Flex direction="column">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            color={TEXT_BOLD_COLOR}
          >
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
      <Box backgroundColor={BG_CARD_COLOR}>
        <Text
          color="white"
          fontSize="30px"
          textAlign="center"
          fontWeight="700"
          padding="10px"
        >
          Human of TM - Our team
        </Text>
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
              src="/image/ourTeam.png"
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
                src="/image/ourTeam.png"
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
              src="/image/ourTeam.png"
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
                src="/image/imageIn1.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
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
              <Image
                src="/image/imageIn3.png"
                w="555px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default HsrLab;
