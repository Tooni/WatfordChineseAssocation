import { Text } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const About: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("About");
  }, []);
  return <Text>About</Text>;
};
