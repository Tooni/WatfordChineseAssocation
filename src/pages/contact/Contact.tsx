import { Text, Title, List, Box, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components";

export const Contact: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Contact" />
      <Stack>
        <Title order={1}>How to contact us?</Title>
        <Box>
          <Text>Contact our Chair, Mrs Anita Chan, at</Text>
          <List>
            <List.Item>Phone: 07757881088 (please text)</List.Item>
          </List>
        </Box>
      </Stack>
    </>
  );
};
