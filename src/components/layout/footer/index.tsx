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
        marginBottom="30px"
        gap="20px"
      >
        <Flex
          direction="column"
          maxW="400px"
          textAlign={{ base: "center", md: "left" }}
          align={{ base: "center", md: "initial" }}
          gap="10px"
        >
          <Image src="/image/logohsr.png" w="80px" h="100px" />
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
          maxW="400px"
          mt="50px"
        >
          <Text fontWeight="700">ĐỊA CHỈ</Text>
          <Flex direction="column" gap="5px" justifyContent="space-between">
            <Text>Cơ sở 1: 76 Duy Tân, Cầu Giấy, Hà Nội</Text>
            <Text>Cơ sở 2: 12 Vũ Trọng Khánh, Hà Đông, Hà Nội</Text>
            <Text>
              Cơ sở 3: Trường Liên cấp Everest - Ng. 106 Đ. Hoàng Quốc Việt, Cổ
              Nhuế, Từ Liêm, Hà Nội
            </Text>
            <Text>
              Cơ sở 4: Trung tâm Tuệ Phát - A18 - BT4 phố Bùi Xuân Phái, KĐT Mỹ
              Đình II, Nam Từ Liêm, Hà Nội
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="30px"
          textAlign={flexDirection === "column" ? "center" : "left"}
          maxW="400px"
          mt="50px"
        >
          <Text fontWeight="700">LIÊN HỆ</Text>
          <Flex direction="column" gap="5px" justifyContent="space-between">
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
