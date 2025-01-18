import { Image, Group, Title, Anchor } from "@mantine/core";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Anchor component={Link} to="/">
      <Group>
        <Image src={logo} alt="Watford Chinese Association" h={90} />
        <Title
          ff="Georgia,Garamond,Palatino,Times,Times New Roman,Arial"
          c="gray.2"
        >
          Watford Chinese Association
        </Title>
      </Group>
    </Anchor>
  );
};
