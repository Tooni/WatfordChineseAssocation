import { Group, List, Text, Stack, Image, Anchor, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import show1BigDance from "../../assets/show_1_big_dance.jpeg";
import chineseNewYearCultureShow2025 from "../../assets/chinese_new_year_culture_show_2025.jpeg";
import { SetDocumentTitle } from "../../components/set-document-title/SetDocumentTitle";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Group p={0} justify="space-between">
        <Stack gap="md">
          <Title order={1}>News</Title>
          <Title order={3}>Events</Title>
          <Text>
            We are pleased to announce that in celebration of the Lunar New Year and the Watford Chinese Culture Show, local commercial companies, especially those on the high street, have arranged a two-day high street lighting ceremony that will take place on 29 January (the first day of the Lunar New Year) and 9 February, starting from 3pm.
          </Text>
          <Anchor
            href={chineseNewYearCultureShow2025}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image h={700} src={chineseNewYearCultureShow2025} fit="contain" />
          </Anchor>
          <Title order={5}>Planned</Title>
          <List listStyleType="lower-alpha">
            <List.Item>Chinese New Year Culture Show 2025</List.Item>
          </List>
          <Title order={5}>Past</Title>
          <List listStyleType="lower-alpha">
            <List.Item>Dragon Boat Festival Lunch</List.Item>
            <List.Item>Southend-on-Sea Day Trip</List.Item>
            <List.Item>Logo Competition</List.Item>
            <List.Item>Mid-Autumn Festival Lunch</List.Item>
            <List.Item>Watford Football Stadium Tour</List.Item>
            <List.Item>Christmas lunch</List.Item>
            <List.Item>Chinese New Year Reunion Dinner</List.Item>
          </List>
        </Stack>
        <Image h={400} src={show1BigDance} fit="contain" />
      </Group>
    </>
  );
};
