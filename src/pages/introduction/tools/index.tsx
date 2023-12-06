import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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

import {
  BG_COLOR,
  HOVER_TEXT_COLOR,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  BD_COLOR,
  TEXT_BOLD_COLOR,
} from "@/components/styles/color";

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTool2,
    onOpen: onOpenTool2,
    onClose: onCloseTool2,
  } = useDisclosure();

  const {
    isOpen: isOpenTool3,
    onOpen: onOpenTool3,
    onClose: onCloseTool3,
  } = useDisclosure();

  const {
    isOpen: isOpenTool4,
    onOpen: onOpenTool4,
    onClose: onCloseTool4,
  } = useDisclosure();

  const {
    isOpen: isOpenTool5,
    onOpen: onOpenTool5,
    onClose: onCloseTool5,
  } = useDisclosure();

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
        <Flex direction="column" gap="100px">
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                LEGO EDUCATION SPIKE ESSENTIAL
              </Text>

              <Text>
                Các Minifigure đáng yêu là nhân tố quan trọng trong trải nghiệm
                SPIKE Essential. Mỗi Minifigure mang đặc điểm riêng, giúp học
                sinh tận hưởng việc giải quyết vấn đề thông qua nghệ thuật kể
                chuyện một cách hấp dẫn và ý nghĩa. Với tên gọi Maria, Daniel,
                Sofie và Leo, mỗi Minifigure đều sở hữu một câu chuyện cá nhân
                độc đáo. Nhờ tính cách và truyền cảm hứng của những nhân vật
                này, học sinh có thể khám phá và phát triển khả năng sáng tạo,
                tư duy logic và kỹ năng giải quyết vấn đề. SPIKE Essential không
                chỉ là một công cụ giáo dục mà còn là một người bạn đồng hành
                đáng tin cậy cho học sinh.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpen}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>

              <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>LEGO EDUCATION SPIKE ESSENTIAL</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="30px">
                        <TableContainer>
                          <Table variant="simple">
                            <Tbody>
                              <Tr>
                                <Td>Đối tượng</Td>
                                <Td>6 +</Td>
                              </Tr>
                              <Tr>
                                <Td>Phần cứng</Td>
                                <Td>
                                  1 não, 2 động cơ nhỏ, 1 cảm biến màu sắc, 1
                                  đèn led và 449 mảnh linh kiện.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm lập trình</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng máy tính hoặc qua
                                  trình duyệt: <br />- Dạng khối lệnh. <br />-
                                  Dạng câu lệnh tương tự Scratch.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm thiết kế 3D</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng trên máy tính
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Số bài học</Td>
                                <Td>
                                  30 bài có sẵn của LEGO & 50 bài thuộc hệ thống
                                  bài của HSRL.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Cuộc thi liên quan</Td>
                                <Td>WRO Việt Nam, Global Robotics Games.</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                        <Box>
                          <Flex direction="column" gap="10px">
                            <Text>GIÁ TRỊ HỌC TẬP:</Text>
                            <Text>
                              - Khám phá quá trình thiết kế bao gồm: xác định
                              vấn đề, xây dựng giải pháp và thử nghiệm quá
                              trình.
                            </Text>
                            <Text>
                              - Phát triển kỹ năng tư duy máy tính, bao gồm việc
                              tạo và điều chỉnh chuỗi, thử nghiệm, sửa lỗi và sử
                              dụng vòng lặp.
                            </Text>
                            <Text>
                              - Tăng cường kỹ năng giao tiếp bằng việc thảo luận
                              chung về trải nghiệm của học sinh.
                            </Text>
                            <Text>
                              - Tham gia vào việc giải quyết vấn đề thông qua
                              thuyết trình.
                            </Text>
                            <Text>
                              - Phát triển ngôn ngữ xã hội bằng cách giúp nhân
                              vật chính trong câu chuyện giải quyết vấn đề.
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                LEGO EDUCATION BRIC Q ESSENTIAL
              </Text>
              <Text>
                LEGO® Education BricQ Motion Essential được thiết kế nhằm khuyến
                khích học sinh khám phá Khoa học Vật lý thông qua các trải
                nghiệm thực tế. Chương trình giúp học sinh hiểu sâu hơn về lực,
                chuyển động và tương tác. Mục tiêu của BricQ là phát triển sự
                hiểu biết về khoa học vật lý thông qua các hoạt động học tập
                thực hành đơn giản, không cần sử dụng công nghệ cao cấp. Học
                sinh sẽ có cơ hội trải nghiệm những khoảnh khắc thú vị khi tham
                gia vào việc đặt các khối vào chuyển động. Đây là một công cụ
                giáo dục tuyệt vời để khuyến khích sự tò mò và sáng tạo của học
                sinh, đồng thời giúp họ áp dụng kiến thức về vật lý vào cuộc
                sống hàng ngày.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpenTool2}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>
              <Modal
                isOpen={isOpenTool2}
                onClose={onCloseTool2}
                isCentered
                size="5xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>LEGO EDUCATION BRIC Q ESSENTIAL</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="10px">
                        <Text>GIÁ TRỊ HỌC TẬP:</Text>
                        <Text>
                          - Nghiên cứu lực đẩy và kéo và sử dụng bằng chứng để
                          giải quyết vấn đề.
                        </Text>
                        <Text>
                          - Áp dụng kỹ năng khoa học để chỉ ra cách các lực tác
                          động lên một vật thể có thể thay đổi chuyển động của
                          nó.
                        </Text>
                        <Text>
                          - Thực hành ứng dụng nguyên nhân và kết quả, cũng như
                          lực cân bằng và lực không cân bằng để thiết kế, phát
                          triển và tối ưu hóa một giải pháp.
                        </Text>
                        <Text>
                          - Tăng cường kỹ năng giao tiếp khi học sinh làm việc
                          nhóm.
                        </Text>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onCloseTool2}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                SPIKE Prime Core Set
              </Text>
              <Text>
                Giải pháp STEAM Mầm non, phù hợp với trẻ từ 3- 5 tuổi (lứa tuổi
                mầm non), bộ học cụ bao gồm 137 chi tiết giúp trẻ thỏa sức sáng
                tạo & học tập.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpenTool3}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>
              <Modal
                isOpen={isOpenTool3}
                onClose={onCloseTool3}
                isCentered
                size="5xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>SPIKE Prime Core Set</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="30px">
                        <TableContainer>
                          <Table variant="simple">
                            <Tbody>
                              <Tr>
                                <Td>Đối tượng</Td>
                                <Td>10 +</Td>
                              </Tr>
                              <Tr>
                                <Td>Phần cứng</Td>
                                <Td>
                                  1 Não, 2 động cơ vừa, 1 động cơ lớn, 1 cảm
                                  biến màu sắc, 1 cảm biến siêu âm, 1 cảm
                                  <br /> biến lực và 528 mảnh linh kiện.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm lập trình</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng máy tính hoặc qua
                                  trình duyệt
                                  <br />- Dạng khối lệnh. <br />- Dạng câu lệnh
                                  tương tự Scratch. <br />- Dạng text: Python
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm thiết kế 3D</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng trên máy tính
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Số bài học</Td>
                                <Td>
                                  33 bài có sẵn của LEGO & 100 bài thuộc hệ
                                  thống bài của HSRL.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Cuộc thi liên quan</Td>
                                <Td>WRO, FLL, Global Robotics Games.</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                SPIKE Prime Expand Set
              </Text>
              <Text>
                Giải pháp STEAM Mầm non, phù hợp với trẻ từ 3- 5 tuổi (lứa tuổi
                mầm non), bộ học cụ bao gồm 137 chi tiết giúp trẻ thỏa sức sáng
                tạo & học tập.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpenTool4}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>
              <Modal
                isOpen={isOpenTool4}
                onClose={onCloseTool4}
                isCentered
                size="5xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>SPIKE Prime Expand Set</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="30px">
                        <TableContainer>
                          <Table variant="simple">
                            <Tbody>
                              <Tr>
                                <Td>Đối tượng</Td>
                                <Td>10 +</Td>
                              </Tr>
                              <Tr>
                                <Td>Phần cứng</Td>
                                <Td>
                                  1 động cơ lớn, 1 cảm biến màu sắc và 604 mảnh
                                  linh kiện.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm lập trình</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng máy tính hoặc qua
                                  trình duyệt
                                  <br />- Dạng khối lệnh. <br />- Dạng câu lệnh
                                  tương tự Scratch. <br />- Dạng text: Python
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm thiết kế 3D</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng trên máy tính
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Số bài học</Td>
                                <Td>
                                  33 bài có sẵn của LEGO & 100 bài thuộc hệ
                                  thống bài của HSRL.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Cuộc thi liên quan</Td>
                                <Td>WRO, FLL, Global Robotics Games.</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onCloseTool4}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                LEGO EDUCATION BRIC Q PRIME
              </Text>
              <Text>
                BricQ Motion Prime giúp khuyến khích sự hiểu biết về khoa học
                vật lý thông qua các trải nghiệm học tập thực hành đơn giản và
                dễ dàng. Chúng tôi không cần sử dụng công nghệ phức tạp mà học
                sinh có thể trải nghiệm những khám phá khoa học ngay trong lớp
                học.
              </Text>
              <Text>
                BricQ Motion Prime giúp khuyến khích sự hiểu biết về khoa học
                vật lý thông qua các trải nghiệm học tập thực hành đơn giản và
                dễ dàng. Chúng tôi không cần sử dụng công nghệ phức tạp mà học
                sinh có thể trải nghiệm những khám phá khoa học ngay trong lớp
                học.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpenTool5}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>
              <Modal
                isOpen={isOpenTool5}
                onClose={onCloseTool5}
                isCentered
                size="5xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>LEGO EDUCATION BRIC Q PRIME</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="10px">
                        <Text>GIÁ TRỊ HỌC TẬP:</Text>
                        <Text>
                          - Áp dụng kỹ năng điều tra khoa học để chỉ ra làm thế
                          nào các lực tác động lên một vật thể có thể thay đổi
                          chuyển động của nó.
                        </Text>
                        <Text>
                          - Thực hành ứng dụng nguyên nhân và kết quả, cũng như
                          lực cân bằng và lực không cân bằng để thiết kế, phát
                          triển và tối ưu hóa một giải pháp.
                        </Text>
                        <Text>
                          - Thực hành ứng dụng nguyên nhân và kết quả, cũng như
                          lực cân bằng và lực không cân bằng để thiết kế, phát
                          triển và tối ưu hóa một giải pháp.
                        </Text>
                        <Text>
                          - Tăng cường kỹ năng giao tiếp khi học sinh tham gia
                          làm việc nhóm để nói lên ý kiến của mình.
                        </Text>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onCloseTool5}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="space-between"
            gap="50px"
          >
            <Box maxW="555px">
              <Image
                borderRadius="20px"
                src="/image/tools.png"
                width="100%"
                height="460px"
                objectFit="contain"
              />
            </Box>
            <Box maxW="555px" display="flex" flexDirection="column" gap="30px">
              <Text fontSize="25px" fontWeight="700">
                MINDSTORMS EV3
              </Text>
              <Text>
                LEGO MINDSTORMS EV3 là một hệ thống robot học tập tích hợp, chủ
                yếu dành cho việc giáo dục và phát triển kỹ năng STEM (Khoa học,
                Công nghệ, Kỹ thuật và Toán học). Được thiết kế để cung cấp trải
                nghiệm lập trình và xây dựng robot, EV3 mang lại sự sáng tạo và
                thách thức cho người sử dụng.
              </Text>
              <Text>
                LEGO MINDSTORMS EV3 không chỉ là một công cụ giáo dục mạnh mẽ mà
                còn là một nền tảng sáng tạo và linh hoạt. Với sự đa dạng của
                linh kiện và khả năng lập trình linh hoạt, EV3 khuyến khích
                người sử dụng thực hiện những dự án phức tạp và phát triển kỹ
                năng STEM.
              </Text>
              <Text
                fontSize="18px"
                color={TEXT_BOLD_COLOR}
                onClick={onOpenTool4}
                cursor="pointer"
              >
                Xem chi tiết
              </Text>
              <Modal
                isOpen={isOpenTool4}
                onClose={onCloseTool4}
                isCentered
                size="5xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>MINDSTORMS EV3</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Flex direction="column" gap="30px">
                        <TableContainer>
                          <Table variant="simple">
                            <Tbody>
                              <Tr>
                                <Td>Đối tượng</Td>
                                <Td>9 +</Td>
                              </Tr>
                              <Tr>
                                <Td>Phần cứng</Td>
                                <Td>
                                  1 Não, 1 động cơ vừa , 2 động cơ lớn, 1 cảm
                                  biến màu sắc, 1 cảm biến siêu âm, 2 cảm
                                  <br /> biến chạm và 541 mảnh linh kiện.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm lập trình</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng máy tính hoặc qua
                                  trình duyệt
                                  <br />- Dạng khối lệnh. <br />- Dạng câu lệnh
                                  tương tự Scratch.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Phần mềm thiết kế 3D</Td>
                                <Td>
                                  Sử dụng thông qua ứng dụng trên máy tính
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Số bài học</Td>
                                <Td>
                                  30 bài có sẵn của LEGO & 150 bài thuộc hệ
                                  thống bài của HSRL.
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Cuộc thi liên quan</Td>
                                <Td>WRO, FLL, Global Robotics Games.</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onCloseTool4}>
                      Đóng
                    </Button>
                    <Button colorScheme="red">Nhận tư vẫn ngay</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                padding={["20px", "20px", "25px"]}
                borderRadius="10px"
                border="4px solid"
                borderColor={BD_COLOR}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                backgroundColor={BG_BUTTON_COLOR}
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  fontSize={["20px", "20px", "25px"]}
                  fontWeight="600"
                  color={TEXT_COLOR}
                >
                  Đặt hàng ngay
                </Text>
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Tools;
