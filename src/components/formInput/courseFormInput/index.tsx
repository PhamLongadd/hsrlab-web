import { Flex, Text, Button, Input, Select, Textarea } from "@chakra-ui/react";

import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";

interface CourseFormInputProps {}

const CourseFormInput: React.FC<CourseFormInputProps> = () => {
  return (
    <Flex
      direction="column"
      gap="10px"
      backgroundColor="#FAFAD2"
      padding="20px"
    >
      <Text fontSize="20px" fontWeight="700" color={TEXT_BOLD_COLOR}>
        Đăng ký khoá học tại Tomorrow Marketers
      </Text>
      <Text>
        Vui lòng điền đầy đủ các thông tin dưới đây. Chúng tôi sẽ liên lạc lại
        trong 24h làm việc.
      </Text>
      <Input placeholder="Họ và tên của bạn" backgroundColor="white" />
      <Input placeholder="Email" backgroundColor="white" />
      <Input placeholder="Số điện thoại" backgroundColor="white" />
      <Input placeholder="Năm sinh" backgroundColor="white" />
      <Flex direction="column" gap="10px">
        <Text>Bạn đang học tập, làm việc tại:*</Text>
        <Select placeholder="Chọn địa điểm" backgroundColor="white">
          <option value="option1">Hà Nội</option>
          <option value="option2">Khác</option>
        </Select>
      </Flex>
      <Flex direction="column" gap="10px">
        <Text>Khoá học bạn quan tâm*</Text>
        <Select placeholder="Chọn địa điểm" backgroundColor="white">
          <option value="option1">1. "tên khóa học"</option>
          <option value="option1">2. "tên khóa học"</option>
        </Select>
      </Flex>
      <Flex direction="column" gap="10px">
        <Text>Bạn mong muốn gì khi tham gia khoá học?</Text>
        <Textarea
          placeholder="Lời nhắn"
          resize="none"
          h="90px"
          backgroundColor="white"
        />
      </Flex>
      <Flex direction="column" gap="10px">
        <Text>Khoảng thời gian phù hợp để TM tư vấn cho bạn*</Text>
        <Select placeholder="Chọn khoảng thời gian" backgroundColor="white">
          <option value="option1">9:00 - 12:00</option>
          <option value="option1">14:00 - 17:00</option>
          <option value="option1">17:00 - 18:00</option>
        </Select>
      </Flex>
      <Flex direction="column" gap="10px">
        <Text>
          Nếu đăng ký nhóm/ hoặc được cựu học viên giới thiệu, bạn hãy điền
          thông tin bạn của mình dưới đây
        </Text>
        <Textarea
          placeholder="Họ tên - SĐT - Email của nhóm bạn"
          resize="none"
          h="90px"
          backgroundColor="white"
        />
      </Flex>
      <Button
        padding={["20px", "20px", "25px"]}
        borderRadius="10px"
        backgroundColor={BG_BUTTON_COLOR}
        _hover={{ color: BG_BUTTON_COLOR }}
      >
        <Text
          fontSize={["20px", "20px", "20px"]}
          fontWeight="600"
          color={TEXT_COLOR}
        >
          Nhận tư vấn
        </Text>
      </Button>
    </Flex>
  );
};
export default CourseFormInput;
