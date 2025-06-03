import { Image, Group, Title, Anchor } from "@mantine/core";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { APP_TITLE } from "../../constants";

export const Logo: FunctionComponent = () => {
  return (
    <Anchor component={Link} to="/">
      <Group wrap="nowrap">
        <Image src={logo} alt={APP_TITLE} h={100} w={100} />
        <Title
          ff="Georgia,Garamond,Palatino,Times,Times New Roman,Arial"
          c="gray.2"
          order={2}
        >
          {APP_TITLE}
        </Title>
      </Group>
    </Anchor>
  );
};
