import { ActionIcon, Container, Text, Image, Group, Space } from "@mantine/core";
import { FunctionComponent, useState } from "react";

export const ImageGallery: FunctionComponent<{ images: string[] }> = ({
  images,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const nextImage = () => {
    setImgIndex((index) => (index + 1) % images.length);
  };
  const prevImage = () => {
    setImgIndex((index) => (index - 1 + images.length) % images.length);
  };
  if (images.length === 0) {
    return null;
  }
  return (
    <Container>
      <Group gap="lg" justify="center">
        <ActionIcon onClick={prevImage}>
          <Text fw={700}>←</Text>
        </ActionIcon>
        {imgIndex + 1} / {images.length}
        <ActionIcon onClick={nextImage}>
          <Text fw={700}>→</Text>
        </ActionIcon>
      </Group>
      <Space h="lg" />
      <Image src={images[imgIndex]} />
    </Container>
  );
};
