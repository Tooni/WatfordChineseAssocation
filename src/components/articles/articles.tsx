import { ReactNode } from "react";
import { HighstreetLightingArticle } from "./HighstreetLightingArticle";
import { ChineseCultureSuccessArticle } from "./ChineseCultureSuccessArticle";
import { CharitableSaleArticle } from "./CharitableSaleArticle";
import { BathTripArticle } from "./BathTripArticle.tsx";
import { ChairmansReportOf2023To2025Article } from "./ChairmansReportOf2023To2025Article.tsx";

export const articles: Record<
  string,
  {
    title: string;
    byline: string;
    component: ReactNode;
  }
> = {
  "2025-07-10": {
    title: "WCA Day Trip to Bath",
    byline:
      "The Association organized a day trip to the historic city of Bath.",
    component: <BathTripArticle />,
  },
  "2025-07-01": {
    title:
      "Chairman's Report: A Review of the Past Two Years – 主席報告：過去兩年回顧",
    byline:
      "Anita Chan reflects on the achievements and future plans of the Watford Chinese Association.",
    component: <ChairmansReportOf2023To2025Article />,
  },
  "2025-04-20": {
    title: "Highstreet lighting ceremonies for Chinese New Year",
    byline:
      "Local business companies arranged two days of high street lighting ceremonies.",
    component: <HighstreetLightingArticle />,
  },
  "2025-04-28": {
    title:
      "Sold-out Chinese New Year Culture event a resounding success at Watford Palace Theatre",
    byline:
      "The Watford Chinese Association's Chinese New Year Culture Show was a resounding success.",
    component: <ChineseCultureSuccessArticle />,
  },
  "2025-05-15": {
    title: "Charitable Sale on May 27th – 5月27日慈善義賣",
    byline:
      "We will raise funds for the club by selling Dragon Boat Festival dumplings.",
    component: <CharitableSaleArticle />,
  },
};
