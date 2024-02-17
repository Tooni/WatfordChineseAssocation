import { Text, Title, useMantineTheme, Box, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components/set-document-title/SetDocumentTitle";

export const Location: FunctionComponent = () => {
  const theme = useMantineTheme();
  return (
    <>
      <SetDocumentTitle title="Location" />
      <Stack>
        <Title order={1}>Where to find us?</Title>
        <Text>Every Tuesday from 10:30am to 3:00pm.</Text>
        <Box>
          <Text>Watford Palace Theatre</Text>
          <Text>20 Clarendon Road</Text>
          <Text>Watford</Text>
          <Text>WD17 1JZ</Text>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.5740057443809!2d-0.3984285608359023!3d51.65712639296199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac151c1488f%3A0x5879b314c72cb7fa!2sWatford%20Palace%20Theatre!5e0!3m2!1sen!2suk!4v1696839604247!5m2!1sen!2suk"
          width="100%"
          height="450px"
          style={{
            border: `2px solid ${theme.colors.red[6]}`,
            borderRadius: "4px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Stack>
    </>
  );
};
