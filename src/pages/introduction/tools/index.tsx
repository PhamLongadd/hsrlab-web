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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Markdown from "react-markdown";

import {
  BG_COLOR,
  HOVER_TEXT_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";
import CustomFormInput from "@/components/formInput/customFormInput";
import { fetchHardwareTools, HardwareTool } from "@/pages/api";
import { useCartCount } from "@/components/cartCount";

const Tools: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const targetRef = React.createRef<HTMLDivElement>();
  const [hardwareTool, setHardwareTool] = useState<HardwareTool[]>([]);
  const [selectedTool, setSelectedTool] = useState<HardwareTool | null>(null);

  const { addItem } = useCartCount();

  useEffect(() => {
    async function fetchDataHardwareTool() {
      const res = await fetchHardwareTools();
      setHardwareTool(res.data);
    }

    fetchDataHardwareTool();
  }, []);

  const openModal = (tool: HardwareTool) => {
    setSelectedTool(tool);
    onOpen();
  };

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addToCart = (tool: HardwareTool) => {
    addItem(tool.id);
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
          <Link href="/">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              Trang chủ
            </Text>
          </Link>
          <Link href="/course">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              / Bộ công cụ
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box
        padding="30px"
        maxWidth="1200px"
        width="100%"
        margin="auto"
        display="flex"
        flexDirection="column"
        gap="50px"
      >
        <Text
          fontSize="30px"
          fontWeight="700"
          textAlign="center"
          marginBottom="30px"
          color={TEXT_BOLD_COLOR}
        >
          Bộ công cụ
        </Text>
        {hardwareTool.map((e) => (
          <Flex direction="column" gap="100px">
            <Flex
              flexDirection={["column", "column", "row"]}
              justifyContent="space-between"
              gap="50px"
            >
              <Box maxW="555px">
                <Image
                  borderRadius="20px"
                  src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${e.attributes?.images?.data[0]?.attributes?.url}`}
                  width="100%"
                  height="400px"
                  objectFit="contain"
                />
              </Box>
              <Box
                maxW="555px"
                display="flex"
                flexDirection="column"
                gap="30px"
              >
                <Text fontSize="25px" fontWeight="700">
                  {e.attributes.title}
                </Text>
                <Text>{e.attributes.description}</Text>
                <Text
                  fontSize="18px"
                  color={TEXT_BOLD_COLOR}
                  onClick={() => openModal(e)}
                  cursor="pointer"
                >
                  Xem chi tiết
                </Text>

                <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
                  <ModalOverlay bg="rgba(0, 0, 0, 0.1)" />
                  <ModalContent>
                    <ModalBody paddingTop="14px">
                      <ModalCloseButton />
                      <article className="markdown-body">
                        <Markdown>
                          {selectedTool?.attributes.information}
                        </Markdown>
                      </article>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="ghost" mr={3} onClick={onClose}>
                        Đóng
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          onClose();
                          scrollToTarget();
                        }}
                      >
                        Nhận tư vẫn ngay
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Flex gap="30px" direction={["column", "column", "row"]}>
                  <Link href="/cart" target="_blank">
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
                      onClick={() => addToCart(e)}
                    >
                      <Text
                        fontSize={["20px", "20px", "20px"]}
                        fontWeight="600"
                        color={TEXT_COLOR}
                      >
                        Đặt hàng ngay
                      </Text>
                    </Button>
                  </Link>
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
                    w={["100%", "100%", "50%"]}
                    onClick={() => addToCart(e)}
                  >
                    <Text
                      fontSize={["20px", "20px", "20px"]}
                      fontWeight="600"
                      color={TEXT_COLOR}
                    >
                      Thêm vào giỏ hàng
                    </Text>
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Box>
      <Box padding="70px" borderTop="1px solid #000" ref={targetRef}>
        <Text
          textAlign="center"
          fontSize="30px"
          fontWeight="700"
          marginBottom="50px"
          color={TEXT_BOLD_COLOR}
        >
          Vui lòng để lại thông tin tư vấn?
        </Text>
        <CustomFormInput />
      </Box>
    </Box>
  );
};
export default Tools;
