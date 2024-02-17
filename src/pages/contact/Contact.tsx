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
          <Text>Contact Anita Chan at</Text>
          <Text>Phone: 07757881088</Text>
          <Text>Email: <a href = "mailto: anitachanyl@yahoo.co.uk">anitachanyl@yahoo.co.uk</a></Text>
          <Text>WeChat: Anitachan88</Text>
        </Box>
      </Stack>
    </>
  );
};
