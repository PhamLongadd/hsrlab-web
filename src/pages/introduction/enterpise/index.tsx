import { Box, Image, Text, Flex } from "@chakra-ui/react";

import { BG_COLOR } from "@/components/styles/color";
import EnterpiseFormInput from "@/components/formInput/enterpiseFormInput";

interface StudentsProps {}

const Students: React.FC<StudentsProps> = () => {
  return (
    <Box mt="80px">
      <Image
        src="/image/enterpise.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      <Box display="flex" justifyContent="center" padding="70px">
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
          gap="50px"
        >
          <Box maxW="555px">
            <Image
              borderRadius="20px"
              src="/image/enterpise2.png"
              width="100%"
              objectFit="contain"
            />
          </Box>
          <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
            <Text fontSize="30px" fontWeight="700">
              ABOUT US
            </Text>
            <Text>
              Tomorrow Marketers cung cấp dịch vụ đào tạo marketing cho nội bộ
              doanh nghiệp trong lĩnh vực Marketing - Branding - Communication -
              Digital & Content strategy - Data Operation
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box backgroundColor={BG_COLOR} padding="70px">
        <Flex direction="column">
          <Text fontSize="30px" fontWeight="700" textAlign="center">
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
      <Box mt="50px" mb="50px">
        <Flex
          maxW="1200px"
          margin="auto"
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          padding="10px"
          gap="20px"
        >
          <Flex direction="column" maxW="555px" gap="30px">
            <Text fontSize="30px" fontWeight="700">
              Lĩnh vực tư vấn
            </Text>
            <Text borderBottom="1px solid #000" pb="20px">
              Với kinh nghiệm 6 năm trong lĩnh vực đào tạo, tư vấn, cùng đội ngũ
              trainer giàu kinh nghiệm, Tomorrow Marketers tự tin thiết kế
              chương trình training phù hợp với vấn đề của các doanh nghiệp.
            </Text>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700">
                [1]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Brand Strategy
                </Text>
                <Text>Market Research & Consumer Insight </Text>
                <Text>Brand Building & Development </Text>
                <Text>Brand Communication </Text>
              </Flex>
            </Flex>
            <Flex gap="20px">
              <Text fontSize="40px" fontWeight="700">
                [2]
              </Text>
              <Flex direction="column">
                <Text fontSize="16px" fontWeight="700">
                  Brand Strategy
                </Text>
                <Text>Market Research & Consumer Insight </Text>
                <Text>Brand Building & Development </Text>
                <Text>Brand Communication </Text>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src="/image/ourTeam.png"
            w="450px"
            h="100%"
            objectFit="contain"
            borderRadius="10px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          />
        </Flex>
      </Box>
      <Box
        backgroundImage="url('/image/bgEnterpise.png')"
        backgroundSize="cover"
      >
        <Box display="flex" justifyContent="center" padding="70px">
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems="center"
            gap="50px"
          >
            <Box
              maxW="555px"
              display="flex"
              flexDirection="column"
              gap="40px"
              alignItems="center"
            >
              <Text
                color="white"
                fontSize="20px"
                fontWeight="500"
                textAlign="center"
              >
                Với kinh nghiệm dày dặn trong huấn luyện nội bộ doanh nghiệp &
                tư vấn, Tomorrow Marketers sẽ cùng doanh nghiệp bạn xác định
                giải pháp phù hợp và thực tế.
              </Text>
            </Box>
            <Box maxW="555px" borderRadius="20px" overflow="hidden">
              <EnterpiseFormInput />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default Students;
