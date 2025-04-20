import { FunctionComponent, PropsWithChildren } from "react";
import { Text } from "@mantine/core";

export const ArticleText: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <Text>{children}</Text>;
};
