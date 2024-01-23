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
import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";
import { FormAdviseBody, formInputAdvise } from "@/pages/api";

type formAdviseInput = {
  full_name: string;
  phone_number: string;
  email: string;
  type: string;
  message: string;
};

const FormInput: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formAdviseInput>();

  const handleFormAdvise: SubmitHandler<formAdviseInput> = async (data) => {
    try {
      const createFormAdviseBody: FormAdviseBody = {
        full_name: data.full_name,
        phone_number: data.phone_number,
        email: data.email,
        type: data.type,
        message: data.message,
      };
      await formInputAdvise(createFormAdviseBody);
      toast("Đã đăng kí nhận tư vẫn thành công", { type: "success" });
      reset();
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  return (
    <Box maxWidth="1200px" margin="auto">
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="700"
        marginBottom="50px"
        color={TEXT_BOLD_COLOR}
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
          <Text>Hotline:</Text>
          <Text>(+84) 983 166 226 (Mr.Hiệp)</Text>
          <Text>(+84) 848 873 799 (Ms.Linh)</Text>
          <Text>(+84) 856 050 765 (Ms.Huyền)</Text>
          <Text>Email: hsrlab@gmail.com</Text>
          <Text fontSize="30px" fontWeight="700">
            Giờ Làm Việc
          </Text>
          <Text>8:00AM - 5:00PM (Mon - Sun)</Text>
          <Box maxW="500px" display="flex" flexDirection="column" gap="10px">
            <Text fontSize="30px" fontWeight="700">
              Địa Chỉ
            </Text>
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
          </Box>
        </Flex>
        <Flex direction="column" gap="30px" alignItems="center">
          <Text fontSize="20px" fontWeight="700">
            Xin vui lòng để lại thông tin tư vấn
          </Text>
          <form
            onSubmit={handleSubmit(handleFormAdvise)}
            style={{
              width: "100%",
            }}
          >
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
              mb="20px"
            >
              <GridItem>
                <Input
                  required
                  variant="flushed"
                  placeholder="Họ và Tên"
                  {...register("full_name")}
                />
              </GridItem>
              <GridItem>
                <Input
                  required
                  variant="flushed"
                  placeholder="Số điện thoại"
                  {...register("phone_number")}
                />
              </GridItem>
              <GridItem>
                <Input
                  variant="flushed"
                  placeholder="Email"
                  {...register("email")}
                />
              </GridItem>
              <GridItem>
                <Select
                  required
                  variant="flushed"
                  placeholder="Loại dịch vụ"
                  {...register("type")}
                >
                  <option value="course">Đăng kí khóa học</option>
                  <option value="enterprise">Tư vấn doanh nghiệp</option>
                </Select>
              </GridItem>
            </Grid>
            <Textarea
              placeholder="Lời nhắn"
              resize="none"
              h="190px"
              {...register("message")}
            />
            <Box mt="30px" alignItems="center" display="flex">
              <Button
                mx="auto"
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
                type="submit"
              >
                <Text
                  fontSize={["16px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Nhận tư vấn
                </Text>
              </Button>
              <ToastContainer />
            </Box>
          </form>
          <Text fontWeight="500">
            Nhân sự Lab sẽ liên hệ lại ít nhất là 24h sau khi điền đơn
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default FormInput;
