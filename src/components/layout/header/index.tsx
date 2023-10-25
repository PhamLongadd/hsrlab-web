import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
  Flex,
  Slide,
  Portal,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

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
        padding="10px"
      >
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/100"
        />

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

        <Text fontWeight="700" mb={4}>
          Trang chủ
        </Text>
        <Menu>
          <MenuButton fontWeight="700" mb={4}>
            <Flex alignItems="center">
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
        <Text fontWeight="700" mb={4}>
          Khóa học
        </Text>
        <Text fontWeight="700" mb={4}>
          Ưu đãi
        </Text>
        <Text fontWeight="700" mb={4}>
          Liên hệ
        </Text>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
