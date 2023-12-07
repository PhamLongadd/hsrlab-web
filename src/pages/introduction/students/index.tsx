import { Box, Image, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

import {
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
} from "@/components/styles/color";

interface EnterpiseProps {}

const Enterpise: React.FC<EnterpiseProps> = () => {
  return (
    <Box mt="80px">
      <Image
        src="/image/trangchu1.jpg"
        w="100%"
        h={["400px", "600px", "700px"]}
        objectFit="cover"
      />
      {/* <Box padding="30px" maxWidth="1200px" width="100%" margin="auto">
        <Text
          fontSize="30px"
          fontWeight="700"
          textAlign="center"
          marginBottom="30px"
          color={TEXT_BOLD_COLOR}
        >
          Chia sẻ của học viên
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 2fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box overflow="hidden">
              <Image
                src="/image/card.png"
                borderTopRightRadius="20px"
                borderTopLeftRadius="20px"
                transition="transform 0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Flex direction="column" gap="10px" padding="20px">
              <Text fontSize="20px" fontWeight="700" textAlign="center">
                Marketing Foundation
              </Text>
              <Text>
                Khoá học cung cấp tư duy marketing nền tảng dành cho người mới
                bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng lộ
                trình phát triển nghề nghiệp.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box> */}
      <Box backgroundColor={BG_CARD_COLOR}>
        <Text
          color="white"
          fontSize="30px"
          textAlign="center"
          fontWeight="700"
          padding="10px"
        >
          Thành tích của học viên
        </Text>
      </Box>
      <Box mt="50px" mb="50px">
        <Flex
          maxW="1200px"
          margin="auto"
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          padding="10px"
          gap="20px"
        >
          <Box
            maxW="555px"
            border="10px solid "
            borderColor={BD_CARD_COLOR}
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <Image
              src="/image/gioithieu.png"
              w="450px"
              objectFit="contain"
              borderRadius="10px"
            />
          </Box>
          <Flex direction="column" maxW="555px" gap="30px">
            <Text
              fontSize="30px"
              fontWeight="700"
              borderBottom="2px solid"
              borderColor={BD_CARD_COLOR}
              color={TEXT_BOLD_COLOR}
            >
              Phương Mai - Product Team
            </Text>
            <Text>
              TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
              nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
              để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
              thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
              bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân là
              rất lớn, nhưng đồng thời điều này cũng mang lại cho mình những
              trải nghiệm quý giá.
            </Text>
            <Text>
              Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và hạnh
              phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết và
              chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt hơn mà
              không có cảm giác "giậm chân tại chỗ" trong công việc. Hạnh phúc
              hơn vì mình được làm việc trong môi trường đề cao sự hợp tác, hỗ
              trợ lẫn nhau, coi trọng sự cải tiến và những giá trị thật. Mình
              học được và được truyền cảm hứng rất nhiều từ sếp và những người
              đồng nghiệp trẻ trung và tài năng.{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        backgroundImage="url('/image/bgOurTeam.jpg')"
        mb="50px"
        backgroundSize="cover"
      >
        <Box pt="50px" pb="50px">
          <Flex
            maxW="1200px"
            margin="auto"
            justifyContent="space-between"
            flexDirection={["column", "column", "row"]}
            padding={["10px", "20px", "50px"]}
            gap="20px"
            backgroundColor="rgba(5, 31, 79, 0.9)"
          >
            <Flex direction="column" maxW="555px" gap="30px">
              <Text
                fontSize="30px"
                fontWeight="700"
                borderBottom="2px solid #fff"
                color="white"
              >
                Phương Mai - Product Team
              </Text>
              <Text color="white">
                TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
                nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
                để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
                thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
                bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân
                là rất lớn, nhưng đồng thời điều này cũng mang lại cho mình
                những trải nghiệm quý giá.
              </Text>
              <Text color="white">
                Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và
                hạnh phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết
                và chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt
                hơn mà không có cảm giác "giậm chân tại chỗ" trong công việc.
                Hạnh phúc hơn vì mình được làm việc trong môi trường đề cao sự
                hợp tác, hỗ trợ lẫn nhau, coi trọng sự cải tiến và những giá trị
                thật. Mình học được và được truyền cảm hứng rất nhiều từ sếp và
                những người đồng nghiệp trẻ trung và tài năng.{" "}
              </Text>
            </Flex>
            <Box maxW="555px">
              <Image
                src="/image/gioithieu.png"
                w="450px"
                objectFit="contain"
                borderRadius="10px"
                boxShadow="3px 3px 4px rgba(255, 255, 255, 0.8)"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box mt="50px" mb="50px">
        <Flex
          maxW="1200px"
          margin="auto"
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          padding="10px"
          gap="20px"
        >
          <Box
            maxW="555px"
            border="10px solid "
            borderColor={BD_CARD_COLOR}
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <Image
              src="/image/gioithieu.png"
              w="450px"
              objectFit="contain"
              borderRadius="10px"
            />
          </Box>
          <Flex direction="column" maxW="555px" gap="30px">
            <Text
              fontSize="30px"
              fontWeight="700"
              borderColor={BD_CARD_COLOR}
              color={TEXT_BOLD_COLOR}
              borderBottom="2px solid"
            >
              Phương Mai - Product Team
            </Text>
            <Text>
              TM tạo ra môi trường nuôi dưỡng và khuyến khích sự phát triển cá
              nhân. Mọi người đều được đóng góp tiếng nói và năng lực của mình
              để đưa ra giải pháp tốt nhất cho vấn đề, được tiếp xúc với những
              thử thách mới, những kiến thức mới hàng ngày để không ngừng tiến
              bộ trong công việc. Ở TM, áp lực làm mới và phát triển bản thân là
              rất lớn, nhưng đồng thời điều này cũng mang lại cho mình những
              trải nghiệm quý giá.
            </Text>
            <Text>
              Trải nghiệm tại TM đã giúp mình trở thành một người tự tin và hạnh
              phúc hơn. Tự tin vì mặc dù có rất nhiều điều mình chưa biết và
              chưa giỏi nhưng mình luôn có cơ hội để thử, sai và làm tốt hơn mà
              không có cảm giác "giậm chân tại chỗ" trong công việc. Hạnh phúc
              hơn vì mình được làm việc trong môi trường đề cao sự hợp tác, hỗ
              trợ lẫn nhau, coi trọng sự cải tiến và những giá trị thật. Mình
              học được và được truyền cảm hứng rất nhiều từ sếp và những người
              đồng nghiệp trẻ trung và tài năng.{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Enterpise;
