import { Flex, Text, Button, Input, Select, Textarea } from "@chakra-ui/react";
import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import {
  getCourses,
  FormEnterpriseBody,
  formInputEnterprise,
} from "@/pages/api";
import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";

type FormEnterpriseInput = {
  name: string;
  email: string;
  phone_number: string;
  enterprise_name: string;
  address: string;
  course: string;
  target: string;
  time_suitable: string;
};

type CourseName = {
  id: number;
  attributes: {
    name: string;
  };
};

const EnterpiseFormInput: NextPage = () => {
  const [courseNames, setCourseNames] = useState<CourseName[]>([]);
  const { register, handleSubmit, reset } = useForm<FormEnterpriseInput>();

  useEffect(() => {
    async function getCourseNames() {
      const res = await getCourses();
      setCourseNames(res.data);
    }

    getCourseNames();
  }, []);

  const handleFormEnterprise: SubmitHandler<FormEnterpriseInput> = async (
    data
  ) => {
    try {
      const createFormEnterpriseBody: FormEnterpriseBody = {
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        enterprise_name: data.enterprise_name,
        address: data.address,
        course: data.course,
        target: data.target,
        time_suitable: data.time_suitable,
      };
      await formInputEnterprise(createFormEnterpriseBody);
      toast("Đã đăng kí nhận tư vẫn thành công", { type: "success" });
      reset();
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormEnterprise)}
      style={{
        width: "100%",
      }}
    >
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
        <Input
          required
          placeholder="Họ và tên của bạn"
          backgroundColor="white"
          {...register("name")}
        />
        <Input
          required
          placeholder="Email"
          backgroundColor="white"
          {...register("email")}
        />
        <Input
          required
          placeholder="Số điện thoại"
          backgroundColor="white"
          {...register("phone_number")}
        />
        <Input
          required
          placeholder="Tên doanh nghiệp của bạn"
          backgroundColor="white"
          {...register("enterprise_name")}
        />
        <Flex direction="column" gap="10px">
          <Text>Địa chỉ công ty*</Text>
          <Select
            required
            placeholder="Chọn địa điểm"
            backgroundColor="white"
            {...register("address")}
          >
            <option value="Hà Nội">Hà Nội</option>
            <option value="Khác">Khác</option>
          </Select>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>Khoá học bạn quan tâm*</Text>
          <Select
            required
            placeholder="Chọn khóa học"
            backgroundColor="white"
            {...register("course")}
          >
            {courseNames.map((courseName, index) => (
              <option key={courseName.id} value={courseName.attributes.name}>
                {index + 1} . {courseName.attributes.name}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>Mục tiêu đào tạo</Text>
          <Textarea
            required
            placeholder="Chia sẻ với HSR LAB mục tiêu đào tạo của quý doanh nghiệp"
            resize="none"
            h="90px"
            backgroundColor="white"
            {...register("target")}
          />
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>Khoảng thời gian phù hợp để TM tư vấn cho bạn*</Text>
          <Select
            required
            placeholder="Chọn khoảng thời gian"
            backgroundColor="white"
            {...register("time_suitable")}
          >
            <option value="9:00 - 12:00">9:00 - 12:00</option>
            <option value="14:00 - 17:00">14:00 - 17:00</option>
            <option value="17:00 - 18:00">17:00 - 18:00</option>
          </Select>
        </Flex>
        <Button
          padding={["20px", "20px", "25px"]}
          borderRadius="10px"
          backgroundColor={BG_BUTTON_COLOR}
          _hover={{ color: BG_BUTTON_COLOR }}
          type="submit"
        >
          <Text
            fontSize={["20px", "20px", "20px"]}
            fontWeight="600"
            color={TEXT_COLOR}
          >
            Nhận tư vấn
          </Text>
        </Button>
        <ToastContainer />
      </Flex>
    </form>
  );
};
export default EnterpiseFormInput;
