import { Anchor, Title } from "@mantine/core";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Anchor href="/" title="Watford Chinese Association">
      <Title
        ff="Georgia,Garamond,Palatino,Times,Times New Roman,Arial"
        c="gray.2"
      >
        Watford Chinese Association
      </Title>
    </Anchor>
  );
};
