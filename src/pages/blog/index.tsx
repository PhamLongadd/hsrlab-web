import { Box, Image, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

import { BG_COLOR } from "@/components/styles/color";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
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
            <Text fontSize="18px" fontWeight="700">
              Trang chủ
            </Text>
          </Link>
          <Link href="/blog">
            <Text fontSize="18px" fontWeight="700">
              / Blog
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box padding="30px" maxWidth="1200px" width="100%" margin="auto">
        <Text fontSize="30px" fontWeight="700" marginBottom="30px">
          _ Chia sẻ kiến thức
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
      </Box>
      <Box backgroundColor={BG_COLOR}>
        <Box padding="30px" maxWidth="1200px" width="100%" margin="auto">
          <Text fontSize="30px" fontWeight="700" marginBottom="30px">
            _ Chia sẻ kiến thức
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
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
                  bắt đầu, giúp hệ thống hoá kiến thức chuyên môn và định hướng
                  lộ trình phát triển nghề nghiệp.
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Blog;
