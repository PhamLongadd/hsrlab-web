import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Thead,
  Th,
  Tfoot,
  Input,
  Grid,
  GridItem,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FormOrderBody,
  Status,
  getOrderHardwareToolsByOrderId,
  getPaymentUrlInfo,
  updateOrder,
} from "@/pages/api";

type HardwareTool = {
  attributes: {
    hardware_tool: {
      data: {
        attributes: {
          price: number;
          title: string;
          images: {
            data: [
              {
                attributes: {
                  url: string;
                };
              }
            ];
          };
        };
      };
    };
    quantity: number;
  };
};

const Success: NextPage = () => {
  const [hardwareTool, setHardwareTool] = useState<HardwareTool[]>([]);
  const [inforOrder, setInforOrder] = useState<FormOrderBody>();
  const router = useRouter();

  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  useEffect(() => {
    const orderId = router.query.orderId;
    async function updateOrderStatusAndGetProductItems(orderId: number) {
      updateOrderStatus(orderId);
      const resOrderHardwareToolsByOrderId =
        await getOrderHardwareToolsByOrderId(orderId);
      setHardwareTool(resOrderHardwareToolsByOrderId.data);
    }

    if (orderId) {
      updateOrderStatusAndGetProductItems(Number(orderId));
    }
  }, [router.query.orderId]);

  const updateOrderStatus = async (orderId: number) => {
    const res = await getPaymentUrlInfo(orderId);
    // if (res.data.status == "PAID") {
    const resUpdateOrder = await updateOrder(orderId, Status.PAID);
    setInforOrder(resUpdateOrder.data.attributes);
    toast("Đã mua hàng thành công", { type: "success" });
    // }
  };

  return (
    <Box mt="80px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="100px"
        gap="20px"
      >
        <CheckCircleIcon fontSize="70px" color="green" />
        <Flex direction="column">
          <Text fontWeight="600" fontSize="20px">
            THANH TOÁN THÀNH CÔNG
          </Text>
          <Text>Mã đơn hàng: {router.query.orderId}</Text>
        </Flex>
      </Box>
      <Box maxW="1200px" margin="auto">
        <Flex
          direction={["column", "column", "row"]}
          mt="50px"
          gap="30px"
          mb="50px"
        >
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Sản phẩm</Th>
                    <Th>Đơn giá</Th>
                    <Th>Số lượng</Th>
                    <Th>Thành tiền</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {hardwareTool.map((item) => (
                    <Tr>
                      <Td>
                        <Flex
                          alignItems="flex-start"
                          gap="10px"
                          direction="column"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${item.attributes.hardware_tool.data.attributes.images.data[0].attributes.url}`}
                            w="120px"
                            height="120px"
                            objectFit="contain"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                            borderRadius="20px"
                          />
                          <Text fontWeight="600">
                            {
                              item.attributes.hardware_tool.data.attributes
                                .title
                            }
                          </Text>
                        </Flex>
                      </Td>
                      <Td>
                        {formatPrice(
                          item.attributes.hardware_tool.data.attributes.price
                        )}
                      </Td>
                      <Td>
                        <Input
                          defaultValue={item.attributes.quantity}
                          w={["100%", "100%", "30%"]}
                          isReadOnly={true}
                        />
                      </Td>
                      <Td>
                        {formatPrice(
                          item.attributes.hardware_tool.data.attributes.price *
                            item.attributes.quantity
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Tổng tiền</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th fontSize="20px" color="#ff0000">
                      {formatPrice(inforOrder?.amount)}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
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
                    isReadOnly={true}
                    value={inforOrder?.full_name}
                  />
                  <Input
                    required
                    variant="flushed"
                    placeholder="Số điện thoại"
                    isReadOnly={true}
                    value={inforOrder?.phone_number}
                  />
                  <Input
                    required
                    variant="flushed"
                    placeholder="Email"
                    isReadOnly={true}
                    value={inforOrder?.email}
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
                      isReadOnly={true}
                      value={inforOrder?.city}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      required
                      variant="flushed"
                      placeholder="Quận/Huyện"
                      isReadOnly={true}
                      value={inforOrder?.district}
                    />
                  </GridItem>
                  <GridItem colSpan={{ base: 2, md: 2 }}>
                    <Input
                      required
                      variant="flushed"
                      placeholder="Địa chỉ cụ thể"
                      isReadOnly={true}
                      value={inforOrder?.address}
                    />
                  </GridItem>
                </Grid>
                <Textarea
                  placeholder="Ghi chú"
                  resize="none"
                  isReadOnly={true}
                  value={inforOrder?.note}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <ToastContainer />
    </Box>
  );
};
export default Success;
