import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

import { BG_COLOR, HOVER_TEXT_COLOR } from "@/components/styles/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartCount } from "@/components/cartCount";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { currentCart } = useCartCount();

  return (
    <Box
      display="flex"
      position="fixed"
      top={0}
      zIndex={999}
      backgroundColor="white"
      width="100%"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
    >
      <Box width="1200px" ml="10px" mr="10px">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Image src="/image/logohsr.png" w="60px" h="80px" />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            w="900px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/">
              <Text
                fontWeight="700"
                fontSize="18px"
                transition="transform 0.3s"
                _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
              >
                Trang chủ
              </Text>
            </Link>
            <Menu>
              <MenuButton
                fontWeight="700"
                transition="transform 0.3s"
                _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
              >
                <Flex alignItems="center" fontSize="18px">
                  Giới thiệu
                  <ChevronDownIcon fontSize="25px" />
                </Flex>
              </MenuButton>
              <MenuList>
                <Link href="/introduction/hsrLab">
                  <MenuItem fontWeight="700">Về HSR LAB</MenuItem>
                </Link>
                <Link href="/course">
                  <MenuItem fontWeight="700">Các khóa học</MenuItem>
                </Link>
                <Link href="/introduction/tools">
                  <MenuItem fontWeight="700">Bộ công cụ</MenuItem>
                </Link>
                <Link href="/introduction/enterpise">
                  <MenuItem fontWeight="700">Dành cho doanh nghiệp</MenuItem>
                </Link>
                <Link href="/introduction/students">
                  <MenuItem fontWeight="700">Học viên</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Link href="/course">
              <Text
                fontWeight="700"
                fontSize="18px"
                transition="transform 0.3s"
                _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
              >
                Khóa học
              </Text>
            </Link>
            <Link href="/competition">
              <Text
                fontWeight="700"
                fontSize="18px"
                transition="transform 0.3s"
                _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
              >
                Cuộc thi
              </Text>
            </Link>
            <Box>
              <Menu>
                <MenuButton
                  fontWeight="700"
                  transition="transform 0.3s"
                  _hover={{
                    color: HOVER_TEXT_COLOR,
                    transform: "scale(1.1)",
                  }}
                >
                  <Flex alignItems="center" fontSize="18px">
                    Tài liệu chuyên môn
                    <ChevronDownIcon fontSize="25px" />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <Link href="/blog">
                    <MenuItem fontWeight="700">Blog</MenuItem>
                  </Link>
                  <MenuItem fontWeight="700">Video</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            {/* <Link href="/recruitment">
            <Text
              fontWeight="700"
              fontSize="18px"
              transition="transform 0.3s"
              _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
            >
              Tuyển dụng
            </Text>
          </Link> */}
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Link href="/cart" target="_blank">
              <Box
                display="flex"
                position="relative"
                alignItems="center"
                justifyContent="space-between"
                w="auto"
                gap="5px"
                backgroundColor="rgba(234, 242, 254)"
                padding="5px 12px"
                borderRadius="8px"
                _hover={{
                  background: BG_COLOR,
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} width="20px" />
                <Flex gap="10px" alignItems="center">
                  <Text fontWeight="600" fontSize="15px">
                    Giỏ hàng
                  </Text>
                  {currentCart.length > 0 && (
                    <Box
                      position="absolute"
                      backgroundColor="red"
                      color="#fff"
                      padding={currentCart.length >= 10 ? "5px 8px" : "0px 9px"}
                      borderRadius="50%"
                      top="-10px"
                      right="-5px"
                    >
                      {currentCart.length}
                    </Box>
                  )}
                </Flex>
              </Box>
            </Link>
            <Button
              display={{ base: "block", md: "none" }}
              onClick={onToggle}
              variant="unstyled"
            >
              <Flex alignItems="center" gap="10px">
                <HamburgerIcon fontSize="30px" />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onToggle}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton fontSize="20px" />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Link href="/">
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  mb={4}
                  onClick={onClose}
                  cursor="pointer"
                >
                  Trang chủ
                </Text>
              </Link>
              <Box marginBottom={4}>
                <Menu>
                  <MenuButton fontWeight="700">
                    <Flex alignItems="center" fontSize="20px">
                      Giới thiệu
                      <ChevronDownIcon fontSize="25px" />
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <Link href="/introduction/hsrLab">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Về HSR LAB
                      </MenuItem>
                    </Link>
                    <Link href="/course">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Các khóa học
                      </MenuItem>
                    </Link>
                    <Link href="/introduction/tools">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Bộ công cụ
                      </MenuItem>
                    </Link>
                    <Link href="/introduction/enterpise">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Dành cho doanh nghiệp
                      </MenuItem>
                    </Link>
                    <Link href="/introduction/students">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Học viên
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </Box>
              <Link href="/course">
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  mb={4}
                  onClick={onClose}
                  cursor="pointer"
                >
                  Khóa học
                </Text>
              </Link>
              <Link href="/competition">
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  mb={4}
                  onClick={onClose}
                  cursor="pointer"
                >
                  Cuộc thi
                </Text>
              </Link>
              <Box marginBottom={4}>
                <Menu>
                  <MenuButton fontWeight="700">
                    <Flex alignItems="center" fontSize="20px">
                      Tài liệu chuyên môn
                      <ChevronDownIcon fontSize="25px" />
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <Link href="/blog">
                      <MenuItem
                        fontWeight="700"
                        onClick={onClose}
                        cursor="pointer"
                      >
                        Blog
                      </MenuItem>
                    </Link>
                    <MenuItem
                      fontWeight="700"
                      onClick={onClose}
                      cursor="pointer"
                    >
                      Video
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              {/* <Link href="/recruitment">
                  <Text
                    fontWeight="700"
                    fontSize="20px"
                    mb={4}
                    onClick={onClose}
                    cursor="pointer"
                  >
                    Tuyển dụng
                  </Text>
                </Link> */}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default HeaderBar;
