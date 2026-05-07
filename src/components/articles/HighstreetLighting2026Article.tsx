import { FunctionComponent } from "react";
import { Group, Image } from "@mantine/core";
import { Article } from "../article/";
import watfordLights1 from "../../assets/watford_lights_1.jpeg";
import watfordLights2 from "../../assets/watford_lights_2.jpeg";

export const HighstreetLighting2026Article: FunctionComponent = () => (
  <>
    <Article>
      <Article.Text>
        The Watford Town Centre BID celebrated the Watford Chinese Culture Show
        and Lunar New Year by once again arranging two days of high street
        lighting ceremonies. The events were held on February 15th and February
        17th—the first day of the Lunar New Year—starting at 3 p.m.
      </Article.Text>
      <Article.Text>
        偉福鎮中心商業促進區 (BID)
        為慶祝偉福中國文化展和農曆新年，再次舉辦了為期兩天的商業街亮燈儀式。活動於2月15日和2月17日（農曆新年第一天）舉行，下午3點開始。
      </Article.Text>
    </Article>
    <Group mx="auto">
      <Image w={450} maw="90vw" src={watfordLights1} />
      <Image w={450} maw="90vw" src={watfordLights2} />
    </Group>
  </>
);
