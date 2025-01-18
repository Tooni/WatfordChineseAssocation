import { Title, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Anchor component={Link} to="/">
      <Title
        ff="Georgia,Garamond,Palatino,Times,Times New Roman,Arial"
        c="gray.2"
      >
        Watford Chinese Association
      </Title>
    </Anchor>
  );
};
