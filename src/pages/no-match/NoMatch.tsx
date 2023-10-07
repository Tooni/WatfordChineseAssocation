import { Title, Center } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const NoMatch: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("Page Not Found");
  }, []);
  return (
    <Center h="50vh">
      <Title>Error 404: Page Not Found!</Title>
    </Center>
  );
};
