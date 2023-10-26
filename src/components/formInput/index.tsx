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

interface FormInputProps {}

const FormInput: React.FC<FormInputProps> = () => {
  return (
    <Box maxWidth="1200px" margin="auto">
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="700"
        marginBottom="50px"
      >
        Liên hệ với chúng tôi
      </Text>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
        gap="20px"
      >
        <Flex direction="column" justifyContent="space-between" gap="20px">
          <Text fontSize="30px" fontWeight="700">
            Tư Vấn Miễn Phí
          </Text>
          <Text>Chúng tôi luôn vui lòng được hỗ trợ cho khách hàng!</Text>
          <Text fontSize="30px" fontWeight="700">
            Thông Tin Liên Hệ
          </Text>
          <Text>Hotline: 0912-345-678</Text>
          <Text>Email: hsrlab@gmail.com</Text>
          <Text fontSize="30px" fontWeight="700">
            Giờ Làm Việc
          </Text>
          <Text>8:00AM - 5:00PM (Mon - Sun)</Text>
          <Text fontSize="30px" fontWeight="700">
            Địa Chỉ
          </Text>
          <Text>Số 76 - P. Duy Tân - Q. Cầu Giấy - Hà Nội</Text>
        </Flex>
        <Flex direction="column" gap="30px" alignItems="center">
          <Text fontSize="20px" fontWeight="700">
            Xin vui lòng để lại thông tin tư vấn
          </Text>
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
          <Textarea placeholder="Lời nhắn" resize="none" h="190px" />
          <Button
            padding="30px"
            fontSize="25px"
            marginTop="30px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            transition="transform 0.3s"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            Nhận tư vấn
          </Button>
          <Text fontWeight="500">
            Nhân sự Lab sẽ liên hệ lại ít nhất là 24h sau khi điền đơn
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default FormInput;
