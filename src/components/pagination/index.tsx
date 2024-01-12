// Pagination.tsx
import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageCount }) => {
  const getButtonsPage = (pageCount: number, currentPage: number) => {
    let buttons = [];
    for (let index = 1; index < pageCount; index++) {
      const element = <Button colorScheme="teal">{index}</Button>;

      buttons.push(element);
    }

    return buttons;
  };

  return (
    <Box>
      <Flex>{getButtonsPage(pageCount, currentPage)}</Flex>
    </Box>
  );
};

export default Pagination;
