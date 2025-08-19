import { FunctionComponent } from "react";
import { Image } from "@mantine/core";
import { Article } from "../article/";
import bathTrip1 from "../../assets/bath_trip_1.jpeg";
import bathTrip2 from "../../assets/bath_trip_2.jpeg";

export const BathTripArticle: FunctionComponent = () => (
  <>
    <Article>
      <Article.Image src={bathTrip2} fit="contain" maw="90vw" />
      <Article.Text>
        The Association organized a day trip to the historic city of Bath. The
        event was a huge success, with all 53 available seats on the coach
        booking up quickly after the announcement was made.
      </Article.Text>
      <Article.Text>
        We began our journey from Watford Junction at 8:00 AM, arriving in
        Bath's city center just before 11:00 AM. Our first stop was a visit to
        the iconic Roman Baths and the Pump Room.
      </Article.Text>
      <Article.Text>
        Around 1:00 PM, members broke into smaller groups to enjoy lunch,
        exploring the city's diverse culinary scene and experiencing a wide
        range of cuisines.
      </Article.Text>
      <Article.Text>
        The afternoon was dedicated to a variety of activities tailored to
        different interests. Members explored landmarks like the Pulteney Bridge
        & Weir, the Royal Crescent & The Circus, and had opportunities for
        shopping and browsing. Some opted for the convenient Hop-on Hop-off Bus
        city tour or a scenic boat trip along the river.
      </Article.Text>
      <Article.Text>
        As the day came to a close, we all reunited at a local cafe for a
        relaxing afternoon tea before making our way back to the coach. We
        boarded the coach at 5:00 PM for our return journey to Watford.
      </Article.Text>
      <Article.Text>
        The weather was hot but pleasant, making for a comfortable and enjoyable
        day. To keep everyone refreshed, we provided water and snacks throughout
        the coach journeys. We were also treated to some wonderful singing
        entertainment, which added to the fun and excitement of the day.
      </Article.Text>
      <Article.Text>
        Overall, the trip was a fantastic opportunity for members to connect,
        explore, and create lasting memories. Everyone was excited about the
        trip and we look forward to planning more events in the future.
      </Article.Text>
    </Article>
    <Image mx="auto" maw="90vw" src={bathTrip1} />
  </>
);
