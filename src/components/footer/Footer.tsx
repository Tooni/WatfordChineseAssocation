import { Group, Text } from "@mantine/core";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Group justify="flex-end" mt="xl">
      <Text size="xs">
        Copyright © {currentYear} Watford Chinese Association. All rights
        reserved.
      </Text>
    </Group>
  );
};
