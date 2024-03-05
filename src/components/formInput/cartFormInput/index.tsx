import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import React from "react";

import {
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
} from "@/components/styles/color";
import {
  CreateLinkPayOSBody,
  FormOrderBody,
  OrderHardwareToolBody,
  Status,
  createLinkPayOS,
  createOrderHardwareTool,
  formOrder,
} from "@/pages/api";
import { useCartCount } from "@/components/cartCount";

interface CartFormInputProps {
  totalAmount: number;
}

type formOrderInput = {
  full_name: string;
  phone_number: string;
  email: string;
  city: string;
  district: number;
  address: string;
  note: string;
  amount: number;
  status: Status;
};

const CartFormInput: React.FC<CartFormInputProps> = ({ totalAmount }) => {
  const { register, handleSubmit, reset } = useForm<formOrderInput>();
  const { currentCart } = useCartCount();
  const router = useRouter();

  const handleFormOrder: SubmitHandler<formOrderInput> = async (data) => {
    try {
      const createFormOrderBody: FormOrderBody = {
        full_name: data.full_name,
        phone_number: data.phone_number,
        email: data.email,
        city: data.city,
        district: data.district,
        address: data.address,
        note: data.note,
        amount: totalAmount,
        status: Status.PENDING,
      };

      const res = await formOrder(createFormOrderBody);
      const orderId = res.data.id;
      currentCart.map(async (e) => {
        const createOrderHardwareToolBody: OrderHardwareToolBody = {
          order: orderId,
          hardware_tool: e.id,
          quantity: e.quantity,
        };
        await createOrderHardwareTool(createOrderHardwareToolBody);
      });

      const createLinkPayOSBody: CreateLinkPayOSBody = {
        orderCode: orderId + 1000,
        amount: totalAmount,
        description: "THANHTOANHSRLAB",
        cancelUrl: `${process.env.NEXT_PUBLIC_HOST}/cart/cancel`,
        returnUrl: `${process.env.NEXT_PUBLIC_HOST}/cart/success?orderId=${orderId}`,
      };
      const resCreateLinkPayOS = await createLinkPayOS(createLinkPayOSBody);
      const urlPayOs = resCreateLinkPayOS.data.checkoutUrl;
      localStorage.removeItem("cart");
      router.push(urlPayOs);

      reset();
    } catch (error: any) {}
  };

  return (
    <Box maxWidth="1200px">
      <form onSubmit={handleSubmit(handleFormOrder)}>
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          gap={["20px", "20px", "0px"]}
          padding={["20px", "20px", "0px"]}
          maxW="1200px"
          justifyContent="space-around"
        >
          <Box display="flex" flexDirection="column" gap="20px">
            <Text fontWeight="600">THÔNG TIN KHÁCH HÀNG</Text>
            <Flex direction="column" gap="20px">
              <Input
                required
                variant="flushed"
                placeholder="Họ và Tên"
                {...register("full_name")}
              />
              <Input
                required
                variant="flushed"
                placeholder="Số điện thoại"
                {...register("phone_number")}
              />
              <Input
                required
                variant="flushed"
                placeholder="Email"
                {...register("email")}
              />
            </Flex>
          </Box>
          <Box display="flex" flexDirection="column" gap="20px">
            <Text fontWeight="600">THÔNG TIN NHẬN HÀNG</Text>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
            >
              <GridItem>
                <Input
                  required
                  variant="flushed"
                  placeholder="Tỉnh/Thành phố"
                  {...register("city")}
                />
              </GridItem>
              <GridItem>
                <Input
                  required
                  variant="flushed"
                  placeholder="Quận/Huyện"
                  {...register("district")}
                />
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 2 }}>
                <Input
                  required
                  variant="flushed"
                  placeholder="Địa chỉ cụ thể"
                  {...register("address")}
                />
              </GridItem>
            </Grid>
            <Textarea
              placeholder="Ghi chú"
              resize="none"
              {...register("note")}
            />
            <Button
              padding={["20px", "20px", "20px"]}
              borderRadius="10px"
              border="4px solid"
              borderColor={BD_COLOR}
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              backgroundColor={BG_BUTTON_COLOR}
              transition="transform 0.3s"
              _hover={{
                transform: "scale(1.1)",
              }}
              w="100%"
              type="submit"
            >
              <Text
                fontSize={["20px", "20px", "20px"]}
                fontWeight="600"
                color={TEXT_COLOR}
              >
                Thanh toán
              </Text>
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default CartFormInput;
