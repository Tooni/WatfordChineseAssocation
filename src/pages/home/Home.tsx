import { Text } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../set-document-title/SetDocumentTitle";

export const Home: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Location" />
      <Text>Home</Text>
    </>
  );
};
