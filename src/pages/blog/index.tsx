import {
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { NextPage } from "next";
import { format } from "date-fns";

import { BG_COLOR, HOVER_TEXT_COLOR } from "@/components/styles/color";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../api";
import { BlogData } from "../api";

const Blog: NextPage = () => {
  const [blogs, setBlogs] = useState<BlogData>();

  useEffect(() => {
    fetchDataBlogs(1);
  }, []);

  async function fetchDataBlogs(page: number) {
    const res = await fetchBlogs(page);
    setBlogs(res);
  }

  const handleClickButton = (page: number) => {
    fetchDataBlogs(page);
  };

  const renderButtons = (pageCount: number, currentPage: number) => {
    const buttons = [];
    for (let i = 0; i < pageCount; i++) {
      if (currentPage != i + 1) {
        buttons.push(
          <Button
            size="sm"
            onClick={() => {
              handleClickButton(i + 1);
            }}
          >
            {i + 1}
          </Button>
        );
      } else {
        buttons.push(
          <Button colorScheme="teal" disabled size="sm">
            {i + 1}
          </Button>
        );
      }
    }
    return buttons;
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
          <Link href="/blog">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              / Blog
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box padding="30px" maxWidth="1200px" width="100%" margin="auto">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {blogs?.data.map((blog, index) => (
            <Link href={`/blog/${blog.attributes.slug}`}>
              <GridItem
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                borderRadius="20px"
                overflow="hidden"
              >
                <Box overflow="hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${blog.attributes.thumbail.data.attributes.url}`}
                    borderTopRightRadius="20px"
                    borderTopLeftRadius="20px"
                    transition="transform 0.3s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </Box>
                <Flex direction="column" gap="5px" padding="10px">
                  <Text
                    fontSize={["14px", "16px", "16px"]}
                    fontWeight="700"
                    h="120px"
                  >
                    {blog.attributes.title}
                  </Text>
                  <Text
                    fontSize={["14px", "15px", "15px"]}
                    h="50px"
                    pb="15px"
                    justifyItems="end"
                  >
                    POST ON{" "}
                    {format(
                      new Date(blog.attributes.publishedAt),
                      "dd/MM/yyyy"
                    )}{" "}
                    BY {blog.attributes.author}
                  </Text>
                </Flex>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Box>
      <Box
        w="100%"
        alignItems="center"
        justifyContent="center"
        display="flex"
        gap="10px"
        pb="20px"
      >
        {renderButtons(
          blogs?.meta.pagination.pageCount || 0,
          blogs?.meta.pagination.page || 0
        )}
      </Box>
    </Box>
  );
};
export default Blog;
