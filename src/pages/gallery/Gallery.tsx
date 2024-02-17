import { Text } from "@mantine/core";
import { FunctionComponent } from "react";
import { SetDocumentTitle } from "../../components/set-document-title/SetDocumentTitle";
import { ImageGallery } from "../../components/image-gallery/ImageGallery";
import { IMAGES } from "./Images";

export const Gallery: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Gallery" />
      <ImageGallery images={IMAGES} />
    </>
  );
};
