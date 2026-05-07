import { ReactNode } from "react";
import { HighstreetLighting2025Article } from "./HighstreetLighting2025Article.tsx";
import { ChineseCultureSuccessArticle } from "./ChineseCultureSuccessArticle";
import { CharitableSaleArticle } from "./CharitableSaleArticle";
import { BathTripArticle } from "./BathTripArticle.tsx";
import { ChairmansReportOf2023To2025Article } from "./ChairmansReportOf2023To2025Article.tsx";
import { ChineseNewYearCultureShow2026 } from "./ChineseNewYearCultureShow2026.tsx";
import { CultureShow2026SuccessArticle } from "./CultureShow2026SuccessArticle";
import { HighstreetLighting2026Article } from "./HighstreetLighting2026Article";

export const articles: Record<
  string,
  {
    title: string;
    byline: string;
    component: ReactNode;
  }
> = {
  "2026-05-07": {
    title: "Highstreet lighting ceremonies for Chinese New Year 2026",
    byline:
      "Watford Town Centre BID arranged two days of high street lighting ceremonies to celebrate Chinese New Year.",
    component: <HighstreetLighting2026Article />,
  },
  "2026-04-20": {
    title:
      "10th Annual Chinese New Year Culture Show celebrates the Year of the Horse",
    byline:
      "A sold-out audience of 600 celebrated traditional Chinese arts and Watford's multicultural spirit.",
    component: <CultureShow2026SuccessArticle />,
  },
  "2026-01-09": {
    title:
      "Announcing the Chinese New Year Culture Show 2026, taking place on the 15th of February",
    byline:
      "The show will take place on February 15th 2026 at the Watford Palace Theatre.",
    component: <ChineseNewYearCultureShow2026 />,
  },
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
    title: "Highstreet lighting ceremonies for Chinese New Year 2025",
    byline:
      "Local business companies arranged two days of high street lighting ceremonies.",
    component: <HighstreetLighting2025Article />,
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
