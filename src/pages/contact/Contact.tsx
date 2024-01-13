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
          <Text>Call us at ......</Text>
          <Text>Or email us at ......</Text>
        </Box>
      </Stack>
    </>
  );
};
