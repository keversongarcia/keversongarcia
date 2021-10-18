import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Box as="header" textAlign="center">
      <Box
        as="nav"
        bg="URL(/banner.jpg)"
        bgSize="cover"
        bgPosition="center"
        h="200px"
      />
      <Avatar size="2xl" mt="-40px" />
    </Box>
  );
};

export default Header;
