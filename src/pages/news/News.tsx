import { Group, Stack, Title, Text,Anchor } from "@mantine/core";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SetDocumentTitle } from "../../components";
import { articles } from "../../components/articles/articles";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Group p={0} justify="space-between">
        <Stack gap="xl">
          <Title order={1}>News</Title>
          {
            Object.entries(articles).map(([date, article]) => (
                <Anchor w="fit-content" component={Link} to={`/news/${date}`} c="inherit" ml="sm">
                    <Stack gap="xs">

              <Title key={date} order={3}>
                {date} – {article.title}
              </Title>
                    <Text lineClamp={1}>{article.summary}</Text>
                    <Text td="underline" fz="xs">Click to read more</Text>
              </Stack>
                </Anchor>

            ))
          }
        </Stack>
      </Group>
    </>
  );
};
