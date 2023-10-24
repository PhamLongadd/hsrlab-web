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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
      <Box
        display="flex"
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
          ml={2}
        >
          aa
        </Button>
        {/* <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
        > */}
        <Text fontWeight="700">Trang chủ</Text>
        <Menu>
          <MenuButton fontWeight="700">
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
        <Text fontWeight="700">Khóa học</Text>
        <Text fontWeight="700">Ưu đãi</Text>
        <Text fontWeight="700">Liên hệ</Text>
        {/* </Box> */}
      </Box>
    </Box>
  );
};
export default HeaderBar;
