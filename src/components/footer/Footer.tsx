import { Group, Text } from "@mantine/core";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <Group justify="flex-end" mt="xl">
      <Text size="xs">
        Copyright © 2024 Watford Chinese Association. All rights reserved.
      </Text>
    </Group>
  );
};
