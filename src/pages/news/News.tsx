import { Group, List, Stack, Image, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import show1BigDance from "../../assets/show_1_big_dance.jpeg";
import cny2025Second from "../../assets/cny_2025_2.jpeg";
import cny2025Third from "../../assets/cny_2025_3.jpeg";
import chineseCultureShow from "../../assets/chinese_new_year_culture_show_2025_2.jpeg";
import { SetDocumentTitle, Article } from "../../components";

export const News: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="News" />
      <Group p={0} justify="space-between">
        <Stack gap="md">
          <Title order={1}>News</Title>
          <Title order={4}>
            15/05/2025 – Charitable Sale on May 27th – 5月27日慈善義賣
          </Title>
          <Article>
            <Article.Text>
              We will raise funds for the club by selling Dragon Boat Festival
              dumplings. The income generated, after deducting necessary
              expenses, will be used for the club. The traditional rice
              dumplings are made of sticky rice, green beans, pork, salty eggs,
              shiitake mushrooms, chestnut, etc.
            </Article.Text>
            <Article.Text>
              The price is £5 a piece. To order, please contact Bi Mei at 07741
              857376. The Zongzi can be collected at the club on the 27th May
              2025. They are available on a first-come, first-served basis,
              while stocks last.
            </Article.Text>
            <Article.Text>
              我們將通過出售端午節粽子為俱樂部籌集資金，收入扣除必要開支後的餘額將用於俱樂部。
              傳統粽子：糯米、綠豆、豬肉、鹹蛋黄、香菇、栗子等。
            </Article.Text>
            <Article.Text>
              價格為每隻5英鎊。如需訂購，請聯紫碧梅，電話：07741 857376。
              粽子將於5月27日在俱樂部領取。
            </Article.Text>
            <Article.Text>粽子數量有限，先到先得，售完即止。</Article.Text>
          </Article>
          <Title order={4} mt="lg">
            28/04/2025 – Sold-out Chinese New Year Culture event a resounding
            success at Watford Palace Theatre.
          </Title>
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
          <Title order={4} mt="lg">
            20/04/2025 – Highstreet lighting ceremonies for Chinese New Year
          </Title>
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
          <Title order={3} mt="lg">
            Past Events
          </Title>
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
