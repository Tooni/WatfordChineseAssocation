import { FunctionComponent } from "react";
import { List, Stack, Text } from "@mantine/core";
import { ImageGallery } from "../image-gallery";
import cultureShow2026_1 from "../../assets/culture_show_2026_1.jpeg";
import cultureShow2026_2 from "../../assets/culture_show_2026_2.jpeg";
import cultureShow2026_3 from "../../assets/culture_show_2026_3.jpeg";
import cultureShow2026_4 from "../../assets/culture_show_2026_4.jpeg";
import cultureShow2026_5 from "../../assets/culture_show_2026_5.jpeg";
import cultureShow2026_6 from "../../assets/culture_show_2026_6.jpeg";
import cultureShow2026_7 from "../../assets/culture_show_2026_7.jpeg";
import cultureShow2026_8 from "../../assets/culture_show_2026_8.jpeg";
import cultureShow2026_9 from "../../assets/culture_show_2026_9.jpeg";

const galleryImages = [
  cultureShow2026_1,
  cultureShow2026_2,
  cultureShow2026_3,
  cultureShow2026_4,
  cultureShow2026_5,
  cultureShow2026_6,
  cultureShow2026_7,
  cultureShow2026_8,
  cultureShow2026_9,
];

export const CultureShow2026SuccessArticle: FunctionComponent = () => (
  <Stack gap="md">
    <Text>
      The 10th annual cultural performance has successfully concluded,
      celebrating the Year of the Horse with a spectacular showcase of
      traditional Chinese arts.
    </Text>
    <Text>
      The sold-out event, attended by 600 people, highlighted our shared
      heritage and the vibrant multiculturalism of the Watford community.
    </Text>
    <Text fw={600}>Distinguished guests included:</Text>
    <List spacing="xs">
      <List.Item>
        Ms. Marion Brown MBE DL, Deputy Lieutenant of Hertfordshire.
      </List.Item>
      <List.Item>
        Ms. Wang Binbin and Ms. Qiu Chenxin, Directors of the Chinese Embassy
        Consular Section.
      </List.Item>
      <List.Item>Mr. Matt Turmaine, Labour MP.</List.Item>
      <List.Item>Councillor Agah Dychton, Deputy Mayor of Watford.</List.Item>
      <List.Item>Sam Semans and Asma Suleman, Watford Councillors.</List.Item>
    </List>
    <Text>
      Deputy Mayor Dychton praised the event for embodying Watford's commitment
      to inclusivity and artistic excellence, noting how it inspiringly passes
      on traditions.
    </Text>
    <Text>
      This resounding success is a testament to the dedication of our
      organizers, performers, and volunteers. As an integral part of the
      cultural calendar, the evening set a hopeful, vibrant tone for the year
      ahead.
    </Text>
    <Text>Several photographs from the event can be seen below:</Text>
    <ImageGallery images={galleryImages} />
  </Stack>
);
