import { Text, Title, Box, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components/set-document-title/SetDocumentTitle";

export const Contact: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Contact" />
      <Stack>
        <Title order={2}>How to contact us?</Title>
        <Box>
          <Text>Contact our Chair, Mrs Anita Chan, at</Text>
          <List>
            <List.Item>Phone: 07757881088</List.Item>
            <List.Item>Email: <a href = "mailto: anitachanyl@yahoo.co.uk">anitachanyl@yahoo.co.uk</a></List.Item>
            <List.Item>WeChat: Anitachan88</List.Item>
          </List>
        </Box>
      </Stack>
    </>
  );
};
