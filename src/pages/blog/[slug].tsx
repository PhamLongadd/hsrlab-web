import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { format } from "date-fns";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { TEXT_BOLD_COLOR, TEXT_BLACK_COLOR } from "@/components/styles/color";
import { fetchBlogBySlug, Blog, fetchBlogs } from "../api";
import Link from "next/link";

const BlogDetail = ({ blog }: { blog: Blog }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchDataBlogs() {
      const res = await fetchBlogs(1);
      setBlogs(res.data);
    }

    fetchDataBlogs();
  }, []);

  return (
    <Box mt="80px">
      <Box maxW="1200px" margin="auto" pt="20px" pb="20px">
        <Flex gap="10px" direction={["column", "column", "row"]}>
          <Box
            borderRight="1px solid"
            borderColor="rgba(0,0,0,0.1)"
            maxW="940px"
          >
            <Box padding="20px">
              <Flex direction="column" gap="12px">
                <Link
                  href={`/blog/categories/${blog.attributes.blog_category.data.id}`}
                >
                  <Text
                    color={TEXT_BOLD_COLOR}
                    fontWeight="700"
                    _hover={{ color: TEXT_BLACK_COLOR }}
                    maxW="200px"
                  >
                    {blog.attributes.blog_category.data.attributes.name}
                  </Text>
                </Link>
                <Text
                  color={TEXT_BLACK_COLOR}
                  fontWeight="700"
                  fontSize={["25px", "30px", "35px"]}
                >
                  {blog.attributes.title}
                </Text>
                <Text color={TEXT_BLACK_COLOR}>
                  POST ON{" "}
                  {format(new Date(blog.attributes.publishedAt), "dd/MM/yyyy")}{" "}
                  BY {blog.attributes.author}
                </Text>
              </Flex>
            </Box>
            <Box padding="20px">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${blog.attributes.thumbail.data.attributes.url}`}
                w="1200px"
                margin="auto"
                h={["400px", "600px", "600px"]}
                objectFit="cover"
                borderRadius="20px"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
              />
            </Box>
            <Box padding="20px">
              <article className="markdown-body">
                <Markdown>{blog.attributes.content}</Markdown>
              </article>
            </Box>
          </Box>
          <Box
            maxW={["full", "full", "260px"]}
            padding={["20px", "20px", "0px"]}
          >
            <Box>
              <Box borderBottom="3px solid" borderColor="rgba(0,0,0,0.1)">
                <Text
                  color={TEXT_BOLD_COLOR}
                  fontWeight="700"
                  pb="10px"
                  fontSize="20px"
                >
                  LATEST POSTS
                </Text>
              </Box>
              <Box mt="10px" display="flex" flexDirection="column" gap="10px">
                {blogs.slice(0, 10).map((e, index) => (
                  <Link href={`/blog/${e.attributes.slug}`}>
                    <Flex
                      key={index}
                      gap="10px"
                      justifyContent="start"
                      borderBottom={
                        index === blogs.length - 1 ? "none" : "1px solid"
                      }
                      pb={index === blogs.length - 1 ? "0" : "10px"}
                      borderColor="rgba(0,0,0,0.1)"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${e.attributes.thumbail.data.attributes.url}`}
                        w="60px"
                        margin="auto"
                        h="60px"
                        objectFit="cover"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
                      />
                      <Text maxW="400px">{e.attributes.title}</Text>
                    </Flex>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default BlogDetail;

BlogDetail.getInitialProps = async ({ query }: NextPageContext) => {
  const slug = query.slug?.toString() || "";
  if (!query.slug) {
    return {};
  }

  const res = await fetchBlogBySlug(slug);

  if (res.lenght != 0) {
    return { blog: res[0] };
  }
};
