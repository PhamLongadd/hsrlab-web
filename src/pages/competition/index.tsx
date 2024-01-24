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
  BD_CARD_COLOR,
  HOVER_TEXT_COLOR,
  BG_COLOR,
} from "@/components/styles/color";
import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Competition: NextPage = () => {
  return (
    <Box mt="80px">
      <Box
        backgroundColor={BG_COLOR}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex padding="30px" gap="5px">
          <Link href="/">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              Trang chủ
            </Text>
          </Link>
          <Link href="/course">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              / Cuộc thi
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box
        maxWidth="1200px"
        width="100%"
        margin="auto"
        padding={["10px", "10px", "0px"]}
      >
        <Flex direction="column">
          <Text
            fontSize="30px"
            fontWeight="700"
            textAlign="center"
            marginBottom="30px"
            pt="30px"
            color={TEXT_BOLD_COLOR}
          >
            Các cuộc thi
          </Text>
          <Text textAlign="center" maxW="650px" margin="auto" fontWeight="600">
            Với sứ mệnh mang đến thêm nhiều giá trị cho cộng đồng STEM Robotics,
            HSRL đã tham gia cũng như là đối tác với rất nhiều cuộc thi:
          </Text>
        </Flex>
        <Box marginTop="50px">
          <Flex
            alignItems="flex-start"
            justifyContent="space-around"
            direction={["column", "column", "row"]}
            padding={["10px", "10px", "0px"]}
            marginBottom="50px"
            gap="10px"
          >
            <Image
              src="/image/WRO.png"
              borderRadius="20px"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              padding="20px"
            />
            <Flex direction="column" gap="10px" maxW="550px">
              <Text>
                World Robot Olympiad (WRO) là một cuộc thi robot quốc tế lần đầu
                tổ chức vào năm 2004, dành cho đối tượng từ 8 đến 19 tuổi. Cuộc
                thi nhằm khuyến khích các em học sinh phát triển kỹ năng STEM
                (Khoa học, Công nghệ, Kỹ thuật và Toán học) và tư duy sáng tạo
                thông qua việc thiết kế và lập trình robot.
              </Text>
              <Text>
                Lần đầu tiên tổ chức tại Việt Nam vào năm 2013 với tên gọi “Tài
                năng Robot Robotacon WRO”. Kỷ niệm 10 năm cuộc thi, vào tháng 08
                năm 2023, thủ đô Hà Nội chính là nơi tổ chức vòng chung kết quốc
                gia, chọn lựa 14 đội tuyển ưu tú để tranh tài ở vòng chung kết
                thế giới tại Panama, 11/2023. Và HSRL vinh dự đóng góp hai đội
                tuyển là đội vô địch bảng B3 và đội giải nhì bảng B1.
              </Text>
              <Text>
                WRO được tổ chức hàng năm tại nhiều quốc gia trên thế giới, và
                các đội tuyển đến từ các trường học và tổ chức giáo dục khác
                nhau. Cuộc thi bao gồm nhiều thử thách liên hoàn,, các đội cần
                có kỹ năng phân tích, xây dựng phương án từ việc điều khiển
                robot để giải quyết các vấn đề trong thế giới thực đến việc
                thiết kế robot để thực hiện các nhiệm vụ cụ thể.
              </Text>
              <Text>
                WRO là một cơ hội tuyệt vời cho thí sinh khám phá và phát triển
                kỹ năng STEM của mình, đồng thời cũng giúp các em rèn luyện kỹ
                năng hợp tác và giải quyết vấn đề. HSRL rất tự hào khi là một
                trong những đối tác của WRO và hy vọng có thể tiếp tục hỗ trợ và
                khuyến khích nhiều thí sinh tham gia cuộc thi.
              </Text>
            </Flex>
          </Flex>
          <Box mb="50px" mt="50px">
            <Text
              fontSize="30px"
              fontWeight="700"
              color={TEXT_BOLD_COLOR}
              borderLeft="5px solid"
              borderColor={BD_CARD_COLOR}
              borderRadius="4px"
              paddingLeft="15px"
              marginLeft="10px"
              mb="50px"
            >
              Vòng loại Robotacon 2023
            </Text>
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải nhất"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B3: HSRL - B3 01
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải nhì"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B1: VIN OCP HSRL 01
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải ba"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B0: ĐTĐ HSRL BLACK
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải khuyến khích"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B3: AMS HSRL - 02, HSRL - IS 04, AMS HSRL 01, HSRL - IS
                  03, HSRL - ROOKIES, HSRL - B3 A2
                </h3>
                <h3 className="vertical-timeline-element-title">
                  Bảng B4 - 02: HSRL B4 A2
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              />
            </VerticalTimeline>
          </Box>
          <Box mb="50px" mt="50px">
            <Text
              fontSize="30px"
              fontWeight="700"
              color={TEXT_BOLD_COLOR}
              borderLeft="5px solid"
              borderColor={BD_CARD_COLOR}
              borderRadius="4px"
              paddingLeft="15px"
              marginLeft="10px"
              mb="50px"
            >
              Vòng Chung kết 2023
            </Text>
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Vô địch"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B1: HSRL - B1 A2
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải nhì"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B2: GIẢNG VÕ HSRL 07
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải ba"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B0: ĐTĐ HSRL BLACK
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải khuyến khích"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bảng B0: ĐTĐ HSRL BÁ VƯƠNG
                </h3>
                <h3 className="vertical-timeline-element-title">
                  Bảng B1: GIẢNG VÕ HSRL 05, GIẢNG VÕ HSRL 03, VIN OCP HSRL 01,
                  GIẢNG VÕ HSRL 02
                </h3>
                <h3 className="vertical-timeline-element-title">
                  Bảng B2: GIẢNG VÕ HSRL 08, HSRL - B2 A2
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              />
            </VerticalTimeline>
          </Box>
        </Box>
      </Box>
      <Box backgroundColor={BG_COLOR}>
        <Box
          maxWidth="1200px"
          width="100%"
          margin="auto"
          padding={["10px", "10px", "0px"]}
        >
          <Box pt="50px" pb="50px">
            <Flex
              alignItems="flex-start"
              justifyContent="space-around"
              direction={["column", "column", "row"]}
              padding={["10px", "10px", "0px"]}
              marginBottom="50px"
              gap="10px"
            >
              <Image
                src="/image/FLL.png"
                borderRadius="20px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              />
              <Flex direction="column" gap="10px" maxW="550px">
                <Text>
                  First Lego League (FLL) là một chương trình giáo dục STEM
                  (Khoa học, Công nghệ, Kỹ thuật và Toán học) dành cho đối tượng
                  từ 9 đến 16 tuổi. Chương trình này được tổ chức hàng năm bởi
                  Tổ chức FIRST (For Inspiration and Recognition of Science and
                  Technology) và LEGO Education.
                </Text>
                <Text>
                  FLL nhằm khuyến khích thí sinh phát triển kỹ năng STEM thông
                  qua việc thiết kế, xây dựng và lập trình robot để giải quyết
                  các vấn đề trong thế giới thực. Ngoài ra, chương trình còn
                  giúp các em rèn luyện kỹ năng hợp tác, giao tiếp và giải quyết
                  vấn đề với những giá trị cốt lõi rất đặc trưng của mình.
                </Text>
                <Text>
                  FLL được tổ chức trên toàn thế giới và có hàng ngàn đội tuyển
                  đến từ các trường học và tổ chức giáo dục khác nhau. Các đội
                  tuyển tham gia FLL sẽ phải thi đấu trong một cuộc thi robot và
                  cũng sẽ được đánh giá về khả năng giải quyết vấn đề, kỹ năng
                  lập trình và kỹ năng giao tiếp, và xuyên suốt là phải thể hiện
                  được rõ nét các giá trị cốt lõi riêng biệt của cuộc thi.
                </Text>
                <Text>
                  HSRL rất tự hào khi là một trong những đối tác của FLL và hy
                  vọng có thể tiếp tục hỗ trợ và khuyến khích nhiều thí sinh
                  Việt Nam tham gia cuộc thi. FLL là một cơ hội tuyệt vời cho
                  các em khám phá và phát triển kỹ năng STEM của mình, đồng thời
                  cũng giúp các em rèn luyện kỹ năng quan trọng để trở thành
                  những người lãnh đạo tương lai.
                </Text>
              </Flex>
            </Flex>
            <Box mb="50px" mt="50px">
              <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Bảng Explore"
                  contentStyle={{
                    background: "rgba(33, 150, 243, 0.3)",
                    color: "#000",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                  }}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<FontAwesomeIcon icon={faCircleDot} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    The Challange Solution Awardt: HSRL - Muối
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    Team Poster Award: HSRL - Gừng
                  </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Bảng Challenge"
                  contentStyle={{
                    background: "rgba(33, 150, 243, 0.3)",
                    color: "#000",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                  }}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<FontAwesomeIcon icon={faCircleDot} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Core Value Award: HSRL - US
                  </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                />
              </VerticalTimeline>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="1200px"
        width="100%"
        margin="auto"
        padding={["10px", "10px", "0px"]}
      >
        <Box pt="50px" pb="50px">
          <Flex
            alignItems="flex-start"
            justifyContent="space-around"
            direction={["column", "column", "row"]}
            padding={["10px", "10px", "0px"]}
            marginBottom="50px"
            gap="10px"
          >
            <Image
              src="/image/UET.jpg"
              borderRadius="20px"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              w="250px"
            />
            <Flex direction="column" gap="10px" maxW="550px">
              <Text>
                UET Makerthon được tổ chức với mong muốn tìm ra những giải pháp
                hiệu quả, những ý tưởng sáng tạo g`óp phần cải thiện cuộc sống
                con người.
              </Text>
              <Text>
                Xác định lối chơi theo cách riêng của bạn, vì ở UET Makerthon,
                không có giới hạn sức tưởng tượng của các bạn. Cùng cháy hết
                mình, và khẳng định bản lĩnh và tài năng cho ngôi vị cao nhất
                cùng các phần thưởng giá trị.
              </Text>
            </Flex>
          </Flex>
          <Box mb="50px" mt="50px">
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải nhất"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">
                  IS VNU HSRL 01
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải nhì"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">HSRL IS</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Giải ba"
                contentStyle={{
                  background: "rgba(33, 150, 243, 0.3)",
                  color: "#000",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(33, 150, 243, 0.3)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faCircleDot} />}
              >
                <h3 className="vertical-timeline-element-title">HSRL-A2</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              />
            </VerticalTimeline>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Competition;
