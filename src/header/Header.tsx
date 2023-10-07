import { Group, Button } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Header: FunctionComponent = () => {
  return (
    <Group justify="space-between">
      <Logo />
      <Group align="center">
        <HeaderButton to="/">Home</HeaderButton>
        <HeaderButton to="/about">About</HeaderButton>
        <HeaderButton to="/news">News</HeaderButton>
        <HeaderButton to="/contact">Contact</HeaderButton>
      </Group>
    </Group>
  );
};

interface HeaderButtonProps {
  to: `/${string}`;
  children: ReactNode;
}
const HeaderButton: FunctionComponent<HeaderButtonProps> = ({
  to,
  children,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Button
      component={Link}
      to={to}
      variant={isActive ? "filled" : "outline"}
      color={isActive ? "red" : "gray"}
    >
      {children}
    </Button>
  );
};
