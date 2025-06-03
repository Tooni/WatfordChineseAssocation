import { Title, Box, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components";
import { Holidays } from "../../components/holidays";

const currentYear = new Date().getFullYear();

export const Calendar: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Calendar" />
      <Stack>
        <Title order={1}>Calendar {currentYear}</Title>
        <Box>
          <Holidays />
        </Box>
      </Stack>
    </>
  );
};
