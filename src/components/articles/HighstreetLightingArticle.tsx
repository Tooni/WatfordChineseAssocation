import { FunctionComponent } from "react";
import {Group, Image} from "@mantine/core";
import { Article } from "../article/";
import cny2025Second from "../../assets/cny_2025_2.jpeg";
import cny2025Third from "../../assets/cny_2025_3.jpeg";

export const HighstreetLightingArticle: FunctionComponent = () => (
    <>
        <Article>
        <Article.Text>
            To celebrate the Chinese New Year 2025 and the Watford Chinese Culture Show, local business companies, especially in the High Street, specially arranged two days of high street lighting ceremonies, which were held on 29th January (the first day of the Lunar New Year) and 9th February respectively, starting at 3 p.m.
        </Article.Text>
        <Article.Text>
            The show included fantastic performances by Lijun Bi and other
            performers to celebrate the start of the Year of the Snake. This
            show was curated by Lijun Bi.
        </Article.Text>
        <Article.Text>
            地方機構尤其是商業街為了慶祝中國農曆新年和偉福中國文化節，特別安排兩天高街亮燈儀式， 分別是1月29日（年初一）和2月9日，時間由下午3點開始。
        </Article.Text>
        <Article.Text>
            This was a local government initiative to light up the Chinese New Year's Calendar, and may be the first of its kind in the UK.
        </Article.Text>
        <Article.Text>
            這是地方政府為農曆新年亮燈的創舉, 這在英國可能還是首例。
        </Article.Text>
    </Article>
        <Group mx="auto">
            <Image w={450} maw="90vw" src={cny2025Second} />
            <Image w={450} maw="90vw" src={cny2025Third} />
        </Group>
        </>
);
