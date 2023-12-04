import { Anchor, Text, Title } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { getTitle } from "../../util/getTitle";

export const About: FunctionComponent = () => {
  useEffect(() => {
    document.title = getTitle("About");
  }, []);
  return (
    <>
      <Title order={3}>Our objectives are</Title>
      <Text>
        <ol type="i">
          <li>
            to serve the Watford Chinese community and promote its relationships
            as well as Chinese culture.
          </li>
          <li>
            to promote understanding, knowledge and awareness among the Chinese
            community.
          </li>
          <li>
            to organise employment, education, social and leisure activities for
            the Chinese Community.
          </li>
          <li>to provide advice and assistance.</li>
        </ol>
      </Text>
      <Title order={3}>History</Title>
      <Text>
        <p>
          The Association started over 30 years ago. Watford Borough Council
          realised that the welfare of the local community was somewhat
          overlooked. It asked Mrs. Hutchinson to set up an association to
          provide a socialising platform for the Chinese community. With a group
          of volunteers including Mrs. Kim Wong the Watford Chinese Association
          was established in 1996. Initially they met every Tuesday, when the
          takeaways were closed for business, at the Hollywell Community Centre.
          Now we have over 300 families as members. Most live in West
          Hertfordshire but some even come from south of the Thames and of
          different nationalities.
        </p>
        <p>
          In 1998, with a fund of £1,000, the{" "}
          <Anchor href="https://www.watfordchineseschool.co.uk/">
            Watford Chinese Sunday School
          </Anchor>{" "}
          was founded, headed by Mrs Hutchinson, to teach Mandarin and
          Cantonese.
        </p>
        <p>
          The School formed a Dancing Group. It was invited to perform at the
          Watford Carnival, the World Economic Forum dinner, the Queen's Jubilee
          in Buckingham Palace and other venues. It won the first prize at the
          UK Chinese School Association competition.
        </p>

        <p>
          Over the years, the Association has provided a bridge for
          multi-cultural exchange. Together with other ethnic groups, it helped
          to set up Watford Celebration, a festival of culture and beliefs.
        </p>

        <p>
          It was awarded the Audentior Awards by the Watford Borough Council in
          2016 in recognition for its contribution to community relations.
        </p>

        <p>
          As a result of increasing elderly membership, the Watford Association
          Centre for the Older People was created in 2013. Its principal mission
          is to provide a centre for social activities for the Chinese elderly
          community, and others, from the surrounding areas who are interested
          in Chinese culture and tradition.
        </p>

        <p>
          The activities include: Putonghua, calligraphy, dancing, singing, chi
          gong, health talks and exercises. We are fortunate that the{" "}
          <Anchor href="https://watfordpalacetheatre.co.uk/">
            Watford Palace Theatre
          </Anchor>{" "}
          let us have free use of their facilities every Tuesday from 10:30 am
          to 3:00 pm., for which we are thankful.
        </p>

        <p>
          The Association organise lunches and dinners for the major festivals
          of the year, such as Lunar New Year, The Dragon Boat Festival, The
          Mid-Autumn Festival and Christmas. On average, we have 80 to 100
          people at these events. They are sponsored by Chinese supermarkets,
          such as See Woo and Wing Yip. We are most thankful for their
          sponsorship.
        </p>

        <p>
          The Watford Chinese Association organises coach tours for its members.
          They cover not only Britain's spots of natural beauty but have also
          ventured across the Channel.
        </p>

        <p>
          We have also organised the Chinese New Year Culture Show at the
          Watford Palace Theatre since 2015. The programme includes Chinese
          painting demonstrations, tea ceremonies, lion dances, Chinese dances,
          songs, music, magic, acrobats, marshal arts and Bian Lian
          ("Face-Changing"). Performers include professionals and local talents.
          The Theatre has 500 seats and tickets have sold out every year. The
          Association enjoys strong support from our members and the community.
        </p>
      </Text>
    </>
  );
};
