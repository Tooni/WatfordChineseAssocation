import { FunctionComponent } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Stack, Title, Button } from "@mantine/core";
import { SetDocumentTitle } from "../../components";
import {articles} from "../../components/articles/articles";

export const ArticlePage: FunctionComponent = () => {
  const { date } = useParams<{ date: string }>();

  if (!date) {
    return <Navigate to="/news" replace />;
  }

  const article = articles[date]

  if (!article) {
    return <Navigate to="/news" replace />;
  }


  return (
    <>
      <SetDocumentTitle title={article.title} />
      <Stack gap="md">
        <Button component={Link} to="/news" variant="light" size="sm" w="fit-content">
          ← Back to News
        </Button>
        
        <Title order={3}>{date} – {article.title}</Title>
        {article.component}
      </Stack>
    </>
  );
};
