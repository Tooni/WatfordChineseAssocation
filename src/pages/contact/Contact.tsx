import { Text, Title, Box, Stack } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const Contact: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("Contact");
  }, []);
  return (
    <Stack>
      <Title order={2}>How to contact us?</Title>
      <Box>
        <Text>Call us at ......</Text>
        <Text>Or email us at ......</Text>
      </Box>
    </Stack>
  );
};
