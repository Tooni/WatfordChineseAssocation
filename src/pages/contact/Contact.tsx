import { Text } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const Contact: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("Contact");
  }, []);
  return <Text>Contact</Text>;
};
