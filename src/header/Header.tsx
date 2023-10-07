import { Group, Button } from "@mantine/core";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Header: FunctionComponent = () => {
  return (
    <Group justify="space-between">
      <Logo />
      <Group align="center">
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="about">About</Button>
        <Button component={Link} to="news">News</Button>
        <Button component={Link} to="contact">Contact</Button>
      </Group>
    </Group>
  );
};
