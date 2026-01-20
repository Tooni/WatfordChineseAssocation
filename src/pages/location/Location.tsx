import { Text, Title, useMantineTheme, Box, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components";

export const Location: FunctionComponent = () => {
  const theme = useMantineTheme();
  return (
    <>
      <SetDocumentTitle title="Location" />
      <Stack>
        <Title order={1}>Where to find us?</Title>
        <Text>Every Tuesday from 10:30am to 3:00pm.</Text>
        <Box>
          <Text>Watford Palace Workshop (The Barn)</Text>
          <Text>1 Watford House Ln</Text>
          <Text>Watford</Text>
          <Text>WD17 1BJ</Text>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.1373352077!2d-0.4006096233709328!3d51.6573218718478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac169f1ce7d%3A0x25f62b53c279e996!2sThe%20Barn!5e0!3m2!1sen!2suk!4v1768924365918!5m2!1sen!2suk"
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
