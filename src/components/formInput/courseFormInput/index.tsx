import { Flex, Text, Button, Input, Select, Textarea } from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCourses, FormCourseBody, formInputCourse } from "@/pages/api";

import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";
import { useEffect, useState } from "react";
import { NextPage } from "next";

type FormCourseInput = {
  full_name: string;
  email: string;
  phone_number: string;
  birth_year: number;
  address: string;
  course: string;
  message: string;
  suitable_time: string;
  group_friends: string;
};

type CourseName = {
  id: number;
  attributes: {
    name: string;
  };
};

const CourseFormInput: NextPage = () => {
  const [courseNames, setCourseNames] = useState<CourseName[]>([]);
  const { register, handleSubmit, reset } = useForm<FormCourseInput>();

  useEffect(() => {
    async function getCourseNames() {
      const res = await getCourses();
      setCourseNames(res.data);
    }

    getCourseNames();
  }, []);

  const handleFormCourse: SubmitHandler<FormCourseInput> = async (data) => {
    try {
      const createFormCourseBody: FormCourseBody = {
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        birth_year: data.birth_year,
        address: data.address,
        course: data.course,
        message: data.message,
        suitable_time: data.suitable_time,
        group_friends: data.group_friends,
      };
      await formInputCourse(createFormCourseBody);
      toast("Đã đăng kí nhận tư vẫn thành công", { type: "success" });
      reset();
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormCourse)}
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
          Đăng ký khoá học tại HSR LAB
        </Text>
        <Text>
          Vui lòng điền đầy đủ các thông tin dưới đây. Chúng tôi sẽ liên lạc lại
          trong 24h làm việc.
        </Text>
        <Input
          required
          placeholder="Họ và tên của bạn"
          backgroundColor="white"
          {...register("full_name")}
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
          placeholder="Năm sinh"
          backgroundColor="white"
          type="number"
          {...register("birth_year")}
        />
        <Flex direction="column" gap="10px">
          <Text>Bạn đang học tập, làm việc tại:*</Text>
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
              <option key={courseName.id} value={courseName.id}>
                {index + 1} . {courseName.attributes.name}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>Bạn mong muốn gì khi tham gia khoá học?</Text>
          <Textarea
            required
            placeholder="Lời nhắn"
            resize="none"
            h="90px"
            backgroundColor="white"
            {...register("message")}
          />
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>Khoảng thời gian phù hợp để TM tư vấn cho bạn*</Text>
          <Select
            required
            placeholder="Chọn khoảng thời gian"
            backgroundColor="white"
            {...register("suitable_time")}
          >
            <option value="9:00 - 12:00">9:00 - 12:00</option>
            <option value="14:00 - 17:00">14:00 - 17:00</option>
            <option value="17:00 - 18:00">17:00 - 18:00</option>
          </Select>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>
            Nếu đăng ký nhóm/ hoặc được cựu học viên giới thiệu, bạn hãy điền
            thông tin bạn của mình dưới đây
          </Text>
          <Textarea
            placeholder="Họ tên - SĐT - Email của nhóm bạn"
            resize="none"
            h="90px"
            backgroundColor="white"
            {...register("group_friends")}
          />
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
export default CourseFormInput;
