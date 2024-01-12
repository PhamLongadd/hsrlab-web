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
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { HOVER_TEXT_COLOR } from "@/components/styles/color";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      position="fixed"
      top={0}
      zIndex={999}
      backgroundColor="white"
      width="100%"
      justifyContent="center"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
    >
      <Flex
        width="1200px"
        alignItems="center"
        justifyContent="space-between"
        marginLeft="10px"
        marginRight="10px"
      >
        <Image src="/image/logohsr.png" w="60px" h="80px" />

        <Button
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          variant="unstyled"
        >
          <Flex alignItems="center" gap="10px">
            <Text fontSize="20px">Menu</Text>
            <HamburgerIcon fontSize="30px" />
          </Flex>
        </Button>

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

        <Flex
          display={{ base: "none", md: "flex" }}
          w="1000px"
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
          <Box>
            <Menu>
              <MenuButton
                fontWeight="700"
                transition="transform 0.3s"
                _hover={{ color: HOVER_TEXT_COLOR, transform: "scale(1.1)" }}
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
      </Flex>
    </Box>
  );
};

export default HeaderBar;
