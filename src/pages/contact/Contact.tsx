import { Text, Title, List, Box, Stack, Image } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components";
import anitaPhoneNumber from "../../assets/anita_phone_number.png";

export const Contact: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Contact" />
      <Stack>
        <Title order={1}>How to contact us?</Title>
        <Box>
          <Text>Contact our Chair, Mrs Anita Chan, at</Text>
          <List>
            <List.Item>
              Phone (please text)
              <Image src={anitaPhoneNumber} maw={140} fit="contain" />
            </List.Item>
          </List>
        </Box>
      </Stack>
    </>
  );
};
