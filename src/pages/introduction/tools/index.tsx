import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = () => {
  return (
    <Box mt="80px">
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
                Bộ học cụ Wisechild
              </Text>
              <Text>SKU: JMC-NY-2101A</Text>
              <Text fontSize="30px" fontWeight="700">
                7.500.000 VNĐ
              </Text>
              <Text>
                Giải pháp STEAM Mầm non, phù hợp với trẻ từ 3- 5 tuổi (lứa tuổi
                mầm non), bộ học cụ bao gồm 137 chi tiết giúp trẻ thỏa sức sáng
                tạo & học tập.
              </Text>
              <Text>
                Thông qua chương trình học tập được biên soạn phù hợp với lứa
                tuổi, trẻ sẽ được thỏa sức trải nghiệm bộ học cụ Wisechild2 với
                nhiều chủ đề & bài học đa dạng, sẽ giúp các e tự do lắp ráp &
                xây dựng dựa trên bài học, cải thiện trí tưởng tượng và khả năng
                sáng tạo của trẻ nhằm hướng dẫn cho các em hiểu được những vấn
                đề trong cuộc sống thông qua những mô hình mà các e sáng tạo
                được.
              </Text>
              <Button padding={["10px", "20px", "30px"]}>
                <Text fontSize={["16px", "20px", "25px"]}>Đặt hàng ngay</Text>
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
                Bộ học cụ Wisechild
              </Text>
              <Text>SKU: JMC-NY-2101A</Text>
              <Text fontSize="30px" fontWeight="700">
                7.500.000 VNĐ
              </Text>
              <Text>
                Giải pháp STEAM Mầm non, phù hợp với trẻ từ 3- 5 tuổi (lứa tuổi
                mầm non), bộ học cụ bao gồm 137 chi tiết giúp trẻ thỏa sức sáng
                tạo & học tập.
              </Text>
              <Text>
                Thông qua chương trình học tập được biên soạn phù hợp với lứa
                tuổi, trẻ sẽ được thỏa sức trải nghiệm bộ học cụ Wisechild2 với
                nhiều chủ đề & bài học đa dạng, sẽ giúp các e tự do lắp ráp &
                xây dựng dựa trên bài học, cải thiện trí tưởng tượng và khả năng
                sáng tạo của trẻ nhằm hướng dẫn cho các em hiểu được những vấn
                đề trong cuộc sống thông qua những mô hình mà các e sáng tạo
                được.
              </Text>
              <Button padding={["10px", "20px", "30px"]}>
                <Text fontSize={["16px", "20px", "25px"]}>Đặt hàng ngay</Text>
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
                Bộ học cụ Wisechild
              </Text>
              <Text>SKU: JMC-NY-2101A</Text>
              <Text fontSize="30px" fontWeight="700">
                7.500.000 VNĐ
              </Text>
              <Text>
                Giải pháp STEAM Mầm non, phù hợp với trẻ từ 3- 5 tuổi (lứa tuổi
                mầm non), bộ học cụ bao gồm 137 chi tiết giúp trẻ thỏa sức sáng
                tạo & học tập.
              </Text>
              <Text>
                Thông qua chương trình học tập được biên soạn phù hợp với lứa
                tuổi, trẻ sẽ được thỏa sức trải nghiệm bộ học cụ Wisechild2 với
                nhiều chủ đề & bài học đa dạng, sẽ giúp các e tự do lắp ráp &
                xây dựng dựa trên bài học, cải thiện trí tưởng tượng và khả năng
                sáng tạo của trẻ nhằm hướng dẫn cho các em hiểu được những vấn
                đề trong cuộc sống thông qua những mô hình mà các e sáng tạo
                được.
              </Text>
              <Button padding={["10px", "20px", "30px"]}>
                <Text fontSize={["16px", "20px", "25px"]}>Đặt hàng ngay</Text>
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Tools;
