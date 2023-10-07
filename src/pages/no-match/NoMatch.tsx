import { Title, Center } from "@mantine/core";
import { FunctionComponent } from "react";

export const NoMatch: FunctionComponent = () => {
  return (
    <Center h="50vh">
      <Title>Error 404: Page Not Found!</Title>
    </Center>
  );
};
