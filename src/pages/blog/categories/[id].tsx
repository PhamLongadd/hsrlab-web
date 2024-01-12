import {
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { format } from "date-fns";
import { NextPageContext } from "next";

import {
  BD_CARD_COLOR,
  BG_COLOR,
  TEXT_BOLD_COLOR,
  HOVER_TEXT_COLOR,
} from "@/components/styles/color";
import { BlogData, fetchBlogByCategories } from "../../api";
import Link from "next/link";

const BlogCategories = ({
  categories,
  id,
}: {
  categories: BlogData;
  id: string;
}) => {
  const handleClickButton = (page: number) => {
    fetchBlogByCategories(id, page);
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
          <Link href="/blog">
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              Blog
            </Text>
          </Link>
          {categories.data.map((e) => (
            <Text
              fontSize="18px"
              fontWeight="700"
              _hover={{ color: HOVER_TEXT_COLOR }}
            >
              / {e.attributes.blog_category.data.attributes.name}
            </Text>
          ))}
        </Flex>
      </Box>
      <Box paddingTop="30px" maxW="1200px" margin="auto">
        {categories.data.map((e) => (
          <Text
            fontSize="25px"
            fontWeight="700"
            color={TEXT_BOLD_COLOR}
            borderLeft="5px solid"
            borderColor={BD_CARD_COLOR}
            borderRadius="4px"
            paddingLeft="15px"
            marginLeft="10px"
          >
            {e.attributes.blog_category.data.attributes.name}
          </Text>
        ))}
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
          {categories.data.map((e, index) => (
            <Link href={`/blog/${e.attributes.slug}`}>
              <GridItem
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                borderRadius="20px"
                overflow="hidden"
              >
                <Box overflow="hidden">
                  <Image
                    // src={blog.attributes.thumnail.data.attributes.url}
                    src="/image/card.png"
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
                    {e.attributes.title}
                  </Text>
                  <Text
                    fontSize={["14px", "15px", "15px"]}
                    h="50px"
                    pb="15px"
                    justifyItems="end"
                  >
                    POST ON{" "}
                    {format(new Date(e.attributes.publishedAt), "dd/MM/yyyy")}{" "}
                    BY {e.attributes.author}
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
          categories?.meta.pagination.pageCount || 0,
          categories?.meta.pagination.page || 0
        )}
      </Box>
    </Box>
  );
};
export default BlogCategories;

BlogCategories.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query;
  if (id === null) {
    return {};
  }

  const res = await fetchBlogByCategories(id as string, 1);

  return { categories: res, id: id };
};
