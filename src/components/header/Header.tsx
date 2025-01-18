import { Group, Button, Text, Divider, Box, Container } from "@mantine/core";
import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { APP_MAX_WIDTH } from "../../constants";

export const Header: FunctionComponent = () => {
  return (
    <Box bg="red.8">
      <Container maw={APP_MAX_WIDTH}>
        <Group py="xs" justify="space-between">
          <Logo />
          <Group gap="xs" align="center">
            <HeaderButton label="About" to="/" />
            <HeaderButton label="News" to="/news" />
            <HeaderButton label="Gallery" to="/gallery" />
            <HeaderButton label="Contact" to="/contact" />
            <HeaderButton label="Location" to="/location" />
          </Group>
        </Group>
      </Container>
      <Divider />
    </Box>
  );
};

interface HeaderButtonProps {
  to: `/${string}`;
  label: string;
}
const HeaderButton: FunctionComponent<HeaderButtonProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Button
      size="compact-md"
      component={Link}
      to={to}
      variant="filled"
      bg={isActive ? "gray.3" : "red"}
    >
      <Text size="lg" fw={700} c={isActive ? "red" : "gray.2"}>
        {label}
      </Text>
    </Button>
  );
};
