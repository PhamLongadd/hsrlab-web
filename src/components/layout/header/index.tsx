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
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  const { isOpen, onToggle } = useDisclosure();

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
                <Text fontWeight="700" fontSize="20px" mb={4}>
                  Trang chủ
                </Text>
                <Box marginBottom={4}>
                  <Menu>
                    <MenuButton fontWeight="700">
                      <Flex alignItems="center" fontSize="20px">
                        Giới thiệu
                        <ChevronDownIcon fontSize="25px" />
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontWeight="700">Về STEM</MenuItem>
                      <MenuItem fontWeight="700">Về HSR LAB</MenuItem>
                      <MenuItem fontWeight="700">Các khóa học</MenuItem>
                      <MenuItem fontWeight="700">Bộ công cụ</MenuItem>
                      <MenuItem fontWeight="700">
                        Dành cho doanh nghiệp
                      </MenuItem>
                      <MenuItem fontWeight="700">Học viên</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Text fontWeight="700" fontSize="20px" mb={4}>
                  Khóa học
                </Text>
                <Text fontWeight="700" fontSize="20px" mb={4}>
                  Ưu đãi
                </Text>
                <Text fontWeight="700" fontSize="20px" mb={4}>
                  Liên hệ
                </Text>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <Flex
          display={{ base: "none", md: "flex" }}
          width="1000px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontWeight="700" fontSize="20px" mb={4}>
            Trang chủ
          </Text>
          <Menu>
            <MenuButton fontWeight="700" mb={4}>
              <Flex alignItems="center" fontSize="20px">
                Giới thiệu
                <ChevronDownIcon fontSize="25px" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem fontWeight="700">Về STEM</MenuItem>
              <MenuItem fontWeight="700">Về HSR LAB</MenuItem>
              <MenuItem fontWeight="700">Các khóa học</MenuItem>
              <MenuItem fontWeight="700">Bộ công cụ</MenuItem>
              <MenuItem fontWeight="700">Dành cho doanh nghiệp</MenuItem>
              <MenuItem fontWeight="700">Học viên</MenuItem>
            </MenuList>
          </Menu>
          <Text fontWeight="700" fontSize="20px" mb={4}>
            Khóa học
          </Text>
          <Text fontWeight="700" fontSize="20px" mb={4}>
            Ưu đãi
          </Text>
          <Text fontWeight="700" fontSize="20px" mb={4}>
            Liên hệ
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderBar;

{
  /* <Flex width="1200px" alignItems="center" justifyContent="space-between">
        <Image src="/image/logohsr.png" w="60px" h="80px" />

        <Button
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          variant="unstyled"
        >
          <Flex alignItems="center" gap="20px">
            Menu
            {isOpen ? (
              <CloseIcon fontSize="30px" />
            ) : (
              <HamburgerIcon fontSize="30px" />
            )}
          </Flex>
        </Button>

        <Text fontWeight="700" fontSize="20px" mb={4}>
          Trang chủ
        </Text>
        <Menu>
          <MenuButton fontWeight="700" mb={4}>
            <Flex alignItems="center" fontSize="20px">
              Giới thiệu
              <ChevronDownIcon fontSize="25px" />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem fontWeight="700">Về STEM</MenuItem>
            <MenuItem fontWeight="700">Về HSR LAB</MenuItem>
            <MenuItem fontWeight="700">Các khóa học</MenuItem>
            <MenuItem fontWeight="700">Bộ công cụ</MenuItem>
            <MenuItem fontWeight="700">Dành cho doanh nghiệp</MenuItem>
            <MenuItem fontWeight="700">Học viên</MenuItem>
          </MenuList>
        </Menu>
        <Text fontWeight="700" fontSize="20px" mb={4}>
          Khóa học
        </Text>
        <Text fontWeight="700" fontSize="20px" mb={4}>
          Ưu đãi
        </Text>
        <Text fontWeight="700" fontSize="20px" mb={4}>
          Liên hệ
        </Text>
      </Flex> */
}
