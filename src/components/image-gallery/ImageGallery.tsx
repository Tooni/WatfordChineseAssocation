import { ActionIcon, Container, Text, Image, Group } from "@mantine/core";
import { FunctionComponent, useState } from "react";

export const ImageGallery: FunctionComponent<{ images: string[] }> = ({
  images,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const numImgs = images.length;
  if (numImgs === 0) {
    return null;
  }
  const nextImg = () => {
    setImgIndex((i) => (i + 1) % numImgs);
  };
  const prevImg = () => {
    setImgIndex((i) => (i - 1 + numImgs) % numImgs);
  };
  return (
    <Container>
      <Group gap="lg" justify="center" mb="lg">
        <ActionIcon onClick={prevImg}>
          <Text fw={700}>←</Text>
        </ActionIcon>
        <Text w={70} style={{ textAlign: "center" }}>
          {imgIndex + 1} / {images.length}
        </Text>
        <ActionIcon onClick={nextImg}>
          <Text fw={700}>→</Text>
        </ActionIcon>
      </Group>
      <Image src={images[imgIndex]} mah={800} fit="contain" />
    </Container>
  );
};
