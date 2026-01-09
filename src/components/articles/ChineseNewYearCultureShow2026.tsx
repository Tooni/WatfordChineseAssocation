import { FunctionComponent } from "react";
import { Image, Group } from "@mantine/core";
import cnyCultureShowLeaflet1 from "../../assets/chinese_new_year_culture_show_2026_1.jpeg";
import cnyCultureShowLeaflet2 from "../../assets/chinese_new_year_culture_show_2026_2.jpeg";

export const ChineseNewYearCultureShow2026: FunctionComponent = () => (
  <>
    <Group mx="auto" gap="xs">
      <Image maw={550} src={cnyCultureShowLeaflet1} />
      <Image maw={550} src={cnyCultureShowLeaflet2} />
    </Group>
  </>
);
