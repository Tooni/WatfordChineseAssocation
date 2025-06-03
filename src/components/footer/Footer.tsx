import { Group } from "@mantine/core";
import { FunctionComponent } from "react";

const currentYear = new Date().getFullYear();

export const Footer: FunctionComponent = () => {
  return (
    <Group justify="flex-end" mt="xl" fz="xs">
      Copyright © {currentYear} Watford Chinese Association. All rights
      reserved.
    </Group>
  );
};
