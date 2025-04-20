import { Group, List, Stack, Image, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import show1BigDance from "../../assets/show_1_big_dance.jpeg";
import cny2025Second from "../../assets/cny_2025_2.jpeg";
import cny2025Third from "../../assets/cny_2025_3.jpeg";
import { SetDocumentTitle, Article } from "../../components";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Group p={0} justify="space-between">
        <Stack gap="md">
          <Title order={1}>News</Title>
          <Article>
            <Article.Text>
              To celebrate the Chinese New Year 2025 and the Watford Chinese
              Culture Show, local business companies, especially in the High
              Street, specially arranged two days of high street lighting
              ceremonies, which were held on 29th January (the first day of the
              Lunar New Year) and 9th February respectively, starting at 3 p.m.
            </Article.Text>
            <Article.Text>
              地方機構尤其是商業街為了慶祝中國農曆新年和偉福中國文化節，特別安排兩天高街亮燈儀式，
              分別是1月29日（年初一）和2月9日，時間由下午3點開始。
            </Article.Text>
            <Article.Text>
              This was a local government initiative to light up the Chinese New
              Year's Calendar, and may be the first of its kind in the UK.
            </Article.Text>
            <Article.Text>
              這是地方政府為農曆新年亮燈的創舉, 這在英國可能還是首例。
            </Article.Text>
          </Article>
          <Group mx="auto">
            <Image maw={450} src={cny2025Second} />
            <Image maw={450} src={cny2025Third} />
          </Group>
          <Title order={1}>Past Events</Title>
          <List listStyleType="lower-alpha">
            <List.Item>Chinese New Year Culture Show 2025</List.Item>
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
