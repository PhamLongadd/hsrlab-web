import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      display="flex"
      backgroundColor="white"
      width="100%"
      justifyContent="center"
    >
      <Box
        display="flex"
        width="1200px"
        alignItems="center"
        justifyContent="space-between"
        padding="10px"
      >
        <Flex>
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/100"
          />
          <Flex direction="column" maxW="400px">
            <Text>VỀ CHÚNG TÔI</Text>
            <Text>
              Tomorrow Marketers là học viện Marketing định hướng Đa quốc gia,
              được ra đời với sứ mệnh đào tạo kiến thức, định hướng nghề nghiệp
              và truyền cảm hứng cho cộng đồng Marketers trẻ, bằng chương trình
              đào tạo thực tế, với giảng viên tại các tập đoàn Đa quốc gia hàng
              đầu.
            </Text>
          </Flex>
          <Flex direction="column">
            <Text>LIÊN HỆ</Text>
            <Text>Địa chỉ: Tầng 4, 15/41 Thái Hà, Quận Đống Đa, HN</Text>
            <Text>Email: info@tomorrowmarketers.org</Text>
            <Text>Phone: 090.586.2499 (Ms. Yến)</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Footer;
