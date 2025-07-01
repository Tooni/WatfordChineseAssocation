import { ReactNode } from "react";
import { HighstreetLightingArticle } from "./HighstreetLightingArticle";
import { ChineseCultureSuccessArticle } from "./ChineseCultureSuccessArticle";
import { CharitableSaleArticle } from "./CharitableSaleArticle";

export const articles: Record<
  string,
  {
    title: string;
    summary: string;
    component: ReactNode;
  }
> = {
  "2025-04-20": {
    title: "Highstreet lighting ceremonies for Chinese New Year",
    summary:
      "Local business companies arranged two days of high street lighting ceremonies.",
    component: <HighstreetLightingArticle />,
  },
  "2025-04-28": {
    title:
      "Sold-out Chinese New Year Culture event a resounding success at Watford Palace Theatre",
    summary:
      "The Watford Chinese Association's Chinese New Year Culture Show was a resounding success.",
    component: <ChineseCultureSuccessArticle />,
  },
  "2025-05-15": {
    title: "Charitable Sale on May 27th – 5月27日慈善義賣",
    summary:
      "We will raise funds for the club by selling Dragon Boat Festival dumplings.",
    component: <CharitableSaleArticle />,
  },
};
