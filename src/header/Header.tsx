import { Group, Button, Text, Divider } from "@mantine/core";
import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Header: FunctionComponent = () => {
  return (
    <>
      <Group p="lg" bg="red.8" justify="space-between">
        <Logo />
        <Group align="center">
          <HeaderButton label="Home" to="/" />
          <HeaderButton label="News" to="/news" />
          <HeaderButton label="Contact" to="/contact" />
        </Group>
      </Group>
      <Divider mb="lg" />
    </>
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
