import { Box, Image, Text, useBreakpointValue, Flex } from "@chakra-ui/react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const flexDirection = useBreakpointValue<"column" | "row">({
    base: "column",
    md: "row",
  });
  const justifyContent = useBreakpointValue({
    base: "center",
    md: "space-between",
  });
  const alignItems = useBreakpointValue({ base: "center", md: "flex-start" });

  return (
    <Box
      display="flex"
      backgroundColor="white"
      width="100%"
      justifyContent="center"
      borderTop="1px solid #000"
    >
      <Flex
        width={["90%", "1200px"]}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        padding="10px"
        marginTop="30px"
        gap="20px"
      >
        <Image
          src="/image/logohsr.png"
          w="80px"
          h="100px"
          mb={flexDirection === "column" ? "20px" : "0"}
        />

        <Flex
          direction="column"
          maxW="400px"
          textAlign={flexDirection === "column" ? "center" : "left"}
          gap="30px"
        >
          <Text fontWeight="700">VỀ CHÚNG TÔI</Text>
          <Text>
            Hung STEM Robotics Lab được thành lập với sứ mệnh nghiên cứu, phát
            triển, mở rộng, vận hành bộ môn STEM Robotics với các nội dung chính
            về: thiết kế, lắp ráp, lập trình các chú robot từ đơn giản tới phức
            tạp, bằng các chương trình học với hoạt động thực tế và phù hợp.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="30px"
          textAlign={flexDirection === "column" ? "center" : "left"}
        >
          <Text fontWeight="700">LIÊN HỆ</Text>
          <Flex direction="column" gap="10px">
            <Text>Địa chỉ: 76 Duy Tân, Cầu Giấy, Hà Nội</Text>
            <Text>12 Vũ Trọng Khánh, Hà Đông, Hà Nội</Text>
            <Text>Email: hsrlab@gmail.com</Text>
            <Text>Phone: (+84) 983 166 226 (Mr.Hiệp)</Text>
            <Text>(+84) 848 873 799 (Ms.Linh)</Text>
            <Text>(+84) 856 050 765 (Ms.Huyền)</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
