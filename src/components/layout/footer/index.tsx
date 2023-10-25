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
    >
      <Flex
        width={["90%", "1200px"]}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        padding="10px"
        gap="20px"
      >
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/100"
          width="100px"
          height="100px"
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
            Tomorrow Marketers là học viện Marketing định hướng Đa quốc gia,
            được ra đời với sứ mệnh đào tạo kiến thức, định hướng nghề nghiệp và
            truyền cảm hứng cho cộng đồng Marketers trẻ, bằng chương trình đào
            tạo thực tế, với giảng viên tại các tập đoàn Đa quốc gia hàng đầu.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="30px"
          textAlign={flexDirection === "column" ? "center" : "left"}
        >
          <Text fontWeight="700">LIÊN HỆ</Text>
          <Flex direction="column">
            <Text>Địa chỉ: Tầng 4, 15/41 Thái Hà, Quận Đống Đa, HN</Text>
            <Text>Email: info@tomorrowmarketers.org</Text>
            <Text>Phone: 090.586.2499 (Ms. Yến)</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
