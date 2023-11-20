import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import {
  BG_COLOR,
  BG_TEXT_COLOR,
  BD_BOTTOM_CARD,
  BG_BUTTON_COLOR,
  TEXT_COLOR,
  TEXT_BOLD_COLOR,
  BD_CARD_COLOR,
  BG_CARD_COLOR,
} from "@/components/styles/color";

interface RecruitmentSlugProps {}

const RecruitmentSlug: React.FC<RecruitmentSlugProps> = () => {
  return (
    <Box mt="80px">
      <Box backgroundColor={BG_COLOR}>
        <Box padding="20px">
          <Image
            src="/image/recruitmentSlug.jpg"
            w="1200px"
            margin="auto"
            h={["400px", "600px", "600px"]}
            objectFit="cover"
            borderRadius="20px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default RecruitmentSlug;
