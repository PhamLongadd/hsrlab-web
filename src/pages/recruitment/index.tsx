import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";

import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
} from "@/components/styles/color";

interface RecruitmentProps {}

const Recruitment: React.FC<RecruitmentProps> = () => {
  const targetRef = React.createRef<HTMLDivElement>();

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box mt="80px">
      <Box
        position="relative"
        backgroundImage="url('/image/recruitment.jpg')"
        backgroundSize="cover"
        backgroundPosition="50% 50%"
        padding="10px"
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          backgroundColor="rgba(0, 0, 0, 0.51)"
        ></Box>
        <Flex
          direction="column"
          maxW="1200px"
          margin="auto"
          pt="200px"
          pb="200px"
          gap="20px"
          position="relative"
        >
          <Text fontSize="20px" fontWeight="700" color="white">
            Cơ hội nghề nghiệp
          </Text>
          <Text fontSize="40px" fontWeight="700" color="white">
            Trở thành mảnh ghép của Tomorrow Marketers
          </Text>
          <Button
            w="50%"
            padding={["20px", "20px", "25px"]}
            borderRadius="10px"
            border="4px solid"
            borderColor={BD_COLOR}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            backgroundColor={BG_BUTTON_COLOR}
            _hover={{
              backgroundColor: BG_BUTTON_COLOR,
            }}
            onClick={scrollToTarget}
          >
            <Text
              fontSize={["20px", "20px", "25px"]}
              fontWeight="600"
              color={TEXT_COLOR}
            >
              Tìm hiểu thêm
            </Text>
          </Button>
        </Flex>
      </Box>
      <Box display="flex" justifyContent="center" padding="70px">
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
          gap="50px"
        >
          <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
            <Text fontSize="30px" fontWeight="700" color={TEXT_BOLD_COLOR}>
              The story of us
            </Text>
            <Text>
              Khởi nguồn từ khát khao ươm mầm một thế hệ Marketers tiên phong,
              Tomorrow Marketers ra đời với sứ mệnh đào tạo kiến thức, định
              hướng nghề nghiệp, truyền cảm hứng và chuẩn bị hành trang sự
              nghiệp cho các Marketers tương lai.
            </Text>
            <Text>
              06 năm, 10.000+ học viên, hàng trăm lớp học và sự kiện được tổ
              chức, cùng hàng ngàn bài viết tâm huyết cho cộng đồng, Tomorrow
              Marketers dần trở thành cái tên quen thuộc với các bạn trẻ yêu
              thích Marketing mọi miền Tổ quốc.
            </Text>
            <Text>
              Để chuẩn bị cho chặng đường dài sắp tới, Tomorrow Marketers tìm
              kiếm những mảnh ghép hoàn hảo - các bạn sẽ là người đồng hành cùng
              chúng tôi trong hành trình truyền cảm hứng cho cộng đồng Marketers
              trẻ.
            </Text>
          </Box>
          <Box maxW="555px">
            <Image
              borderRadius="600px"
              src="/image/ourTeam.png"
              width="100%"
              objectFit="contain"
              padding="20px"
              border="2px solid"
              borderColor={BD_CARD_COLOR}
            />
          </Box>
        </Flex>
      </Box>
      <Box backgroundColor="rgba(234, 242, 254, 0.5)">
        <Box maxW="1200px" margin="auto" pt="50px" pb="50px">
          <Text
            textAlign="center"
            fontSize="30px"
            fontWeight="700"
            mb="50px"
            color={TEXT_BOLD_COLOR}
          >
            Giá trị bạn nhận được tại HSR LAB
          </Text>
          <Flex
            justifyContent="space-between"
            flexDirection={["column", "column", "row"]}
          >
            <Flex direction="column" gap="30px" maxW="555px">
              <Flex
                alignItems="center"
                borderTop="1px solid"
                borderBottom="1px solid"
                gap="20px"
              >
                <Text fontSize="50px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  01.
                </Text>
                <Text fontSize="20px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  Cơ hội học tập và phát triển không giới hạn
                </Text>
              </Flex>
              <Text>
                Tại Tomorrow Marketers, bạn được thoả sức học hỏi, làm việc và
                tiếp cận nguồn tri thức phong phú trong lĩnh vực Marketing.
                Chúng tôi có niềm đam mê vô tận với khám phá tri thức & coi việc
                học tập là không giới hạn. Nếu bạn cũng có chung niềm đam mê
                này, bạn chính là mảnh ghép chúng tôi đang tìm kiếm. Đào tạo và
                phát triển con người cũng là ưu tiên hàng đầu của chúng tôi, bởi
                sự phát triển của nhân sự là yếu tố cốt lõi thúc đẩy sự lớn mạnh
                của tổ chức.
              </Text>
              <Flex
                alignItems="center"
                borderTop="1px solid"
                borderBottom="1px solid"
                gap="20px"
              >
                <Text fontSize="50px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  02.
                </Text>
                <Text fontSize="20px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  Liên tục được thử thách để trở thành phiên bản tốt nhất
                </Text>
              </Flex>
              <Text>
                Làm việc tại một startup, bạn sẽ phải đối mặt với rất nhiều thử
                thách mới và bắt buộc phải phát triển bản thân không ngừng.
                Chúng tôi tìm kiếm những bạn trẻ có tinh thần kỷ luật cao, cùng
                sự sẵn sàng phá bỏ vùng an toàn của bản thân để làm bất kì việc
                gì với sự tập trung, chi tiết, tỉ mỉ cho đến khi hoàn thành đúng
                chuẩn mực. Chăm chỉ, kiên trì, không thoả hiệp với chất lượng
                công việc là những giá trị mà chúng tôi đề cao.
              </Text>
              <Flex
                alignItems="center"
                borderTop="1px solid"
                borderBottom="1px solid"
                gap="20px"
              >
                <Text fontSize="50px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  03.
                </Text>
                <Text fontSize="20px" fontWeight="700" color={TEXT_BOLD_COLOR}>
                  Môi trường làm việc khuyến khích chủ động, sáng tạo và linh
                  hoạt
                </Text>
              </Flex>
              <Text>
                Bạn được khuyến khích chủ động, sáng tạo và đưa ra những ý tưởng
                đột phá nhằm giải quyết các thách thức trong công việc. Chúng
                tôi đề cao những bạn trẻ có chính kiến riêng của mình, có khả
                năng làm chủ công việc và có trách nhiệm tuyệt đối với những gì
                được giao phó.
              </Text>
            </Flex>
            <Flex direction="column" maxW="555px" gap="20px">
              <Image
                src="/image/imageIn1.png"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
              <Image
                src="/image/imageIn1.png"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
                borderRadius="20px"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box backgroundColor={BG_CARD_COLOR} ref={targetRef}>
        <Text
          color="white"
          fontSize="30px"
          textAlign="center"
          fontWeight="700"
          padding="10px"
        >
          Các vị trí hiện tại
        </Text>
      </Box>
      <Box>
        <Flex
          direction="column"
          pt="50px"
          pb="50px"
          gap="30px"
          maxW="1200px"
          margin="auto"
        >
          <Flex
            borderBottom="1px solid"
            pb="10px"
            justifyContent="space-between"
          >
            <Flex direction="column">
              <Text
                mb="15px"
                fontSize="20px"
                fontWeight="700"
                color={TEXT_BOLD_COLOR}
              >
                Content Marketing
              </Text>
              <Text>Full time (toàn thời gian)</Text>
              <Text>TM Hà Nội - 15/41 Thái Hà, Quận Đống Đa, HN. </Text>
            </Flex>
            <Button
              backgroundColor={BG_BUTTON_COLOR}
              color={TEXT_COLOR}
              _hover={{ backgroundColor: BG_BUTTON_COLOR }}
            >
              Apply Now
            </Button>
          </Flex>
          <Flex
            borderBottom="1px solid"
            pb="10px"
            justifyContent="space-between"
          >
            <Flex direction="column">
              <Text
                mb="15px"
                fontSize="20px"
                fontWeight="700"
                color={TEXT_BOLD_COLOR}
              >
                Content Marketing
              </Text>
              <Text>Full time (toàn thời gian)</Text>
              <Text>TM Hà Nội - 15/41 Thái Hà, Quận Đống Đa, HN. </Text>
            </Flex>
            <Button
              backgroundColor={BG_BUTTON_COLOR}
              color={TEXT_COLOR}
              _hover={{ backgroundColor: BG_BUTTON_COLOR }}
            >
              Apply Now
            </Button>
          </Flex>
          <Flex
            borderBottom="1px solid"
            pb="10px"
            justifyContent="space-between"
          >
            <Flex direction="column">
              <Text
                mb="15px"
                fontSize="20px"
                fontWeight="700"
                color={TEXT_BOLD_COLOR}
              >
                Content Marketing
              </Text>
              <Text>Full time (toàn thời gian)</Text>
              <Text>TM Hà Nội - 15/41 Thái Hà, Quận Đống Đa, HN. </Text>
            </Flex>
            <Button
              backgroundColor={BG_BUTTON_COLOR}
              color={TEXT_COLOR}
              _hover={{ backgroundColor: BG_BUTTON_COLOR }}
            >
              Apply Now
            </Button>
          </Flex>
          <Flex
            borderBottom="1px solid"
            pb="10px"
            justifyContent="space-between"
          >
            <Flex direction="column">
              <Text
                mb="15px"
                fontSize="20px"
                fontWeight="700"
                color={TEXT_BOLD_COLOR}
              >
                Content Marketing
              </Text>
              <Text>Full time (toàn thời gian)</Text>
              <Text>TM Hà Nội - 15/41 Thái Hà, Quận Đống Đa, HN. </Text>
            </Flex>
            <Button
              backgroundColor={BG_BUTTON_COLOR}
              color={TEXT_COLOR}
              _hover={{ backgroundColor: BG_BUTTON_COLOR }}
            >
              Apply Now
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Recruitment;
