import { Flex, Text, Button, Input, Select, Textarea } from "@chakra-ui/react";

import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
} from "@/components/styles/color";

interface EnterpiseFormInputProps {}

const EnterpiseFormInput: React.FC<EnterpiseFormInputProps> = () => {
  return (
    <Flex
      direction="column"
      gap="10px"
      backgroundColor="#FAFAD2"
      padding="20px"
    >
      <Text fontSize="20px" fontWeight="700" color={TEXT_BOLD_COLOR}>
        Tư vấn đào tạo cho doanh nghiệp
      </Text>
      <Text>
        Vui lòng điền đầy đủ các thông tin dưới đây. Chúng tôi sẽ liên lạc lại
        trong 24h làm việc.
      </Text>
      <Input placeholder="Họ và tên của bạn" backgroundColor="white" />
      <Input placeholder="Email" backgroundColor="white" />
      <Input placeholder="Số điện thoại" backgroundColor="white" />
      <Input placeholder="Tên doanh nghiệp của bạn" backgroundColor="white" />
      <Flex direction="column" gap="10px">
        <Text>Vị trí công việc của bạn*</Text>
        <Select placeholder="Chọn vị trí công việc" backgroundColor="white">
          <option value="option1">CEO/Founder/Chủ tịch</option>
          <option value="option2">Giám đốc (CMO, COO, VP...)</option>
          <option value="option2">Quản lý</option>
        </Select>
      </Flex>
      <Flex direction="column" gap="10px">
        <Text>Địa chỉ công ty*</Text>
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
        <Text>Mục tiêu đào tạo</Text>
        <Textarea
          placeholder="Chia sẻ với HSR LAB mục tiêu đào tạo của quý doanh nghiệp"
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
export default EnterpiseFormInput;
