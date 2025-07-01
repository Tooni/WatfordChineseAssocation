import { FunctionComponent } from "react";
import { Article } from "../article/";
import chineseCultureShow from "../../assets/chinese_new_year_culture_show_2025_2.jpeg";

export const ChineseCultureSuccessArticle: FunctionComponent = () => (
  <Article>
    <Article.Image src={chineseCultureShow} fit="contain" />
    <Article.Text>
      Anita Chan, chair of the Watford Chinese Association said: "This
      Snake year's Chinese Culture Show was a success. The energy in the
      auditorium was electric, and it is clear that an event like this
      brought our community closer together. The night party showcased a
      variety of traditional art which had touched innumerable people
      with its profound cultural heritage performances. It is wonderful
      that the Spring Festival brought people together to appreciate
      Chinese cultural traditions, regardless of their backgrounds."
    </Article.Text>
    <Article.Text>
      The show included fantastic performances by Lijun Bi and other
      performers to celebrate the start of the Year of the Snake. This
      show was curated by Lijun Bi.
    </Article.Text>
    <Article.Text>
      The association has organised the Chinese New Year Culture Show at
      the Watford Palace Theatre since 2015. The programme includes
      Chinese painting demonstrations, tea ceremonies, lion dances,
      Chinese dances, songs, music, magic, acrobats, marshal arts and
      Bian Lian ("Face-Changing"). Performers include professionals and
      local talents. The Theatre has 500 seats and tickets have sold out
      every year. The Association enjoys strong support from our members
      and the community.
    </Article.Text>
    <Article.Text>
      The association also organises other activities in town, these
      include: Putonghua, calligraphy, dancing, singing, chi gong,
      health talks and exercises.
    </Article.Text>
    <Article.Text>
      Elected Mayor of Watford, Peter Taylor, said: "It was great
      attending the Chinese New Year cultural show recently — a vibrant
      celebration of culture and tradition. A special thank you to the
      Watford Chinese Association for organising such a fantastic event.
      Our town is so privileged to have so many different communities
      living here in Watford, and this rich diversity is what makes our
      town so unique."
    </Article.Text>
  </Article>
);
