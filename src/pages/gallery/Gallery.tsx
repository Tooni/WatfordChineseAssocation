import { FunctionComponent } from "react";
import { ImageGallery, SetDocumentTitle } from "../../components";
import { IMAGES } from "./Images";

export const Gallery: FunctionComponent = () => {
  return (
    <>
      <SetDocumentTitle title="Gallery" />
      <ImageGallery images={IMAGES} />
    </>
  );
};
