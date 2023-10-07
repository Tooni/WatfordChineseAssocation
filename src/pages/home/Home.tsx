import { Text } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const Home: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle();
  }, []);
  return (
    <Text>
      Home Page!!!
    </Text>
  );
};
