import { Group, List, Stack, Image, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import show1BigDance from "../../assets/show_1_big_dance.jpeg";
import { SetDocumentTitle } from "../../components/set-document-title/SetDocumentTitle";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Group p={0} justify="space-between">
        <Stack gap="md">
          <Title order={1}>News</Title>
          <Title order={3}>Events</Title>
          <Title order={5}>Planned</Title>
          <List listStyleType="lower-alpha">
            <List.Item>Christmas lunch</List.Item>
            <List.Item>Chinese New Year Culture Show 2024</List.Item>
            <List.Item>Chinese New Year Reunion Dinner</List.Item>
          </List>
          <Title order={5}>Past</Title>
          <List listStyleType="lower-alpha">
            <List.Item>Dragon Boat Festival Lunch</List.Item>
            <List.Item>Southend-on-Sea Day Trip</List.Item>
            <List.Item>Logo Competition</List.Item>
            <List.Item>Mid-Autumn Festival Lunch</List.Item>
            <List.Item>Watford Football Stadium Tour</List.Item>
          </List>
        </Stack>
        <Image h={400} src={show1BigDance} fit="contain" />
      </Group>
    </>
  );
};
