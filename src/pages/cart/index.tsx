import {
  Box,
  Image,
  Text,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Thead,
  Th,
  Tfoot,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { DeleteIcon } from "@chakra-ui/icons";

import { BG_COLOR, HOVER_TEXT_COLOR } from "@/components/styles/color";
import CartFormInput from "@/components/formInput/cartFormInput";
import { ProductItem, useCartCount } from "@/components/cartCount";

const Cart: NextPage = () => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  const {
    currentCart,
    deleteItem,
    plusQuantity,
    minusQuantity,
    getProductItems,
  } = useCartCount();

  const totalPrice = (): number => {
    let total = 0;
    productItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  useEffect(() => {
    getItems();
  }, [currentCart]);

  const getItems = async () => {
    const productItemsFromContext = await getProductItems();

    setProductItems(productItemsFromContext || []);
  };

  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <Box mt="80px">
      <Box
        backgroundColor={BG_COLOR}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex padding="30px" gap="5px">
          <Link href="/introduction/tools">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              Bộ công cụ
            </Text>
          </Link>
          <Link href="/cart">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              / Giỏ hàng
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box maxW="1200px" margin="auto">
        <Flex direction="column" mt="50px" gap="30px" mb="50px">
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Sản phẩm</Th>
                    <Th>Đơn giá</Th>
                    <Th>Số lượng</Th>
                    <Th>Thành tiền</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productItems.map((item) => (
                    <Tr>
                      <Td>
                        <Flex
                          alignItems={["flex-start", "flex-start", "center"]}
                          gap="10px"
                          direction={["column", "column", "row"]}
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${item.imageUrl}`}
                            w="120px"
                            height="120px"
                            objectFit="contain"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                            borderRadius="20px"
                          />
                          <Text fontWeight="600">{item.title}</Text>
                        </Flex>
                      </Td>
                      <Td>{formatPrice(item.price)}</Td>
                      <Td>
                        <NumberInput
                          w={["100%", "100%", "30%"]}
                          defaultValue={item.quantity}
                          min={1}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper
                              onClick={() => {
                                plusQuantity(item.id);
                              }}
                            />
                            <NumberDecrementStepper
                              onClick={() => {
                                minusQuantity(item.id);
                              }}
                            />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td>{formatPrice(item.price * item.quantity)}</Td>
                      <Td>
                        <DeleteIcon
                          cursor="pointer"
                          color="#ff0000"
                          fontSize="20px"
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        />
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
                      {formatPrice(totalPrice())}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <CartFormInput totalAmount={totalPrice()} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Cart;
