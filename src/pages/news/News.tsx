import { Text } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const News: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("News");
  }, []);
  return <Text>News</Text>;
};
