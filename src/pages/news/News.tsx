import { Stack, Image, Title, Text, Anchor } from "@mantine/core";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SetDocumentTitle } from "../../components";
import { articles } from "../../components/articles/articles";
import show1BigDance from "../../assets/show_1_big_dance.jpeg";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Stack gap="xl">
        <Title order={1}>News</Title>
        {Object.entries(articles).map(([date, article]) => (
          <Anchor
            w="fit-content"
            component={Link}
            key={date}
            to={`/news/${date}`}
            c="inherit"
          >
            <Stack gap="xs">
              <Title key={date} order={3}>
                {date} – {article.title}
              </Title>
              <Text lineClamp={1}>{article.byline}</Text>
              <Text td="underline" fz="xs">
                Click to read more
              </Text>
            </Stack>
          </Anchor>
        ))}
        <Image h={400} maw="90vw" src={show1BigDance} fit="contain" />
      </Stack>
    </>
  );
};
