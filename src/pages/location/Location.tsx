import { Text, Title, useMantineTheme, Box, Stack } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const Location: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("Location");
  }, []);
  const theme = useMantineTheme();
  return (
    <Stack>
      <Title order={2}>Where to find us?</Title>
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
  );
};
