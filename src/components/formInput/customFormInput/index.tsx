import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

import {
  TEXT_BOLD_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
} from "@/components/styles/color";

interface CustomFormInputProps {}

const CustomFormInput: React.FC<CustomFormInputProps> = () => {
  return (
    <Box maxWidth="1200px" margin="auto">
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="700"
        marginBottom="50px"
        color={TEXT_BOLD_COLOR}
      >
        Bạn chưa biết liệu khoá học có phù hợp với mình hay không?
      </Text>

      <Flex direction="column" gap="30px" alignItems="center">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Input variant="flushed" placeholder="Họ và Tên" />
          </GridItem>
          <GridItem>
            <Input variant="flushed" placeholder="Số điện thoại" />
          </GridItem>
          <GridItem>
            <Input variant="flushed" placeholder="Email" />
          </GridItem>
          <GridItem>
            <Select variant="flushed" placeholder="Loại dịch vụ">
              <option value="option1">Đăng kí khóa học</option>
              <option value="option2">Tư vấn doanh nghiệp</option>
            </Select>
          </GridItem>
        </Grid>
        <Textarea placeholder="Lời nhắn" resize="none" h="190px" maxW="450px" />
        <Button
          mt="30px"
          padding={["10px", "20px", "25px"]}
          borderRadius="10px"
          border="4px solid"
          borderColor={BD_COLOR}
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          backgroundColor={BG_BUTTON_COLOR}
          transition="transform 0.3s"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Text
            fontSize={["16px", "20px", "25px"]}
            fontWeight="600"
            color={TEXT_COLOR}
          >
            Nhận tư vấn
          </Text>
        </Button>
        <Text fontWeight="500">
          Nhân sự Lab sẽ liên hệ lại ít nhất là 24h sau khi điền đơn
        </Text>
      </Flex>
    </Box>
  );
};
export default CustomFormInput;
