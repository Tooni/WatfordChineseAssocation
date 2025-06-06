import { Anchor, List, Text, Stack, Title } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle, Article } from "../../components";
import logoCompetition from "../../assets/logo_competition.jpeg";
import restaurant2 from "../../assets/restaurant_2.jpeg";

export const About: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="About" />
      <Stack gap="md">
        <Title order={1}>About</Title>
        <Title order={3}>Our objectives are</Title>
        <List listStyleType="lower-roman" maw="90vw">
          <List.Item>
            to serve the Watford Chinese community and promote its relationship
            with the local community as well as Chinese culture.
          </List.Item>
          <List.Item>
            to promote understanding, knowledge and awareness among the Chinese
            and the local community.
          </List.Item>
          <List.Item>
            to organise social and leisure activities for the Chinese community.
          </List.Item>
          <List.Item>to provide advice and assistance.</List.Item>
        </List>
        <Title order={3}>History</Title>
        <Article>
          <Article.Image src={restaurant2} fit="contain" />
          <Article.Text>
            The Association started over 30 years ago. Watford Borough Council
            realised that the welfare of the local community was somewhat
            overlooked. It asked Mrs Hutchinson to set up an association to
            provide a socialising platform for the Chinese community. With a
            group of volunteers including Mrs Kim Wong the Watford Chinese
            Association was established in 1996. Initially they met every
            Tuesday, when the takeaways were closed for business, at the
            Hollywell Community Centre. Now we have over 300 families as
            members. Most live in West Hertfordshire but some come from as far
            as south of the Thames, and some are of different nationalities.
          </Article.Text>
          <Article.Text>
            In 1998, with a fund of £1,000, the{" "}
            <Anchor href="https://www.watfordchineseschool.co.uk/">
              Watford Chinese Sunday School
            </Anchor>{" "}
            was founded, headed by Mrs Hutchinson, to teach Mandarin and
            Cantonese.
          </Article.Text>
          <Article.Text>
            The School formed a Dancing Group. It was invited to perform at the
            Watford Carnival, the World Economic Forum dinner, the Queen's
            Jubilee in Buckingham Palace and other venues. It won the first
            prize at the UK Chinese School Association competition.
          </Article.Text>
          <Article.Text>
            Over the years, the Association has provided a bridge for
            multi-cultural exchange. Together with other ethnic groups, it
            helped to set up Watford Celebration, a festival of culture and
            beliefs.
          </Article.Text>
          <Article.Text>
            Watford Celebration was awarded the Audentior Award by Watford
            Borough Council in 2016 in recognition of its contribution to
            community relations.
          </Article.Text>
          <Article.Text>
            As a result of increasing elderly membership, the Watford
            Association Centre for the Older People was created in 2013. Its
            principal mission is to provide a centre for social activities for
            the Chinese elderly community, and others, from the surrounding
            areas who are interested in Chinese culture and tradition.
          </Article.Text>
        </Article>

        <Title order={3}>Present</Title>
        <Article>
          <Article.Image src={logoCompetition} fit="contain" />
          <Article.Text>
            The activities include: Putonghua, calligraphy, dancing, singing,
            chi gong, health talks and exercises. We are fortunate that the{" "}
            <Anchor href="https://watfordpalacetheatre.co.uk/">
              Watford Palace Theatre
            </Anchor>{" "}
            let us have free use of their facilities every Tuesday from 10:30 am
            to 3:00 pm., for which we are thankful.
          </Article.Text>
          <Article.Text>
            The Association organise lunches and dinners for the major festivals
            of the year, such as Chinese New Year, The Dragon Boat Festival, The
            Mid-Autumn Festival and Christmas. On average, we have 80 to 100
            people at these events. They are sponsored by Chinese supermarkets,
            such as See Woo and Wing Yip. We are most thankful for their
            sponsorship.
          </Article.Text>
          <Article.Text>
            The Watford Chinese Association organises coach tours for its
            members. They cover not only Britain's spots of natural beauty but
            have also ventured across the Channel.
          </Article.Text>
          <Article.Text>
            We have also organised the Chinese New Year Culture Show at the
            Watford Palace Theatre since 2015. The programme includes Chinese
            painting demonstrations, tea ceremonies, lion dances, Chinese
            dances, songs, music, magic, acrobats, marshal arts and Bian Lian
            ("Face-Changing"). Performers include professionals and local
            talents. The Theatre has 500 seats and tickets have sold out every
            year. The Association enjoys strong support from our members and the
            community.
          </Article.Text>
        </Article>

        <Title order={3}>Committee</Title>
        <Text>
          At each AGM, the membership will elect the Association's Officers and
          other Committee members from amongst the Association's members. The
          Officers shall be: The Chair, Vice-Chair, Secretary and Treasurer who
          are elected to serve for a period of two years. The current committee
          is:
        </Text>
        <List>
          <List.Item>Chair: Mrs Anita Chan</List.Item>
          <List.Item>Secretary: Mrs Laura Liles</List.Item>
          <List.Item>Treasurer: Mrs Joyce Cheung</List.Item>
        </List>
      </Stack>
    </>
  );
};
