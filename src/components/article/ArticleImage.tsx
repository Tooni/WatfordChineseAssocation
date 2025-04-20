import { FunctionComponent } from "react";
import { Image, ImageProps } from "@mantine/core";
import classes from "./Article.module.css";

type ArticleImageProps = ImageProps;

export const ArticleImage: FunctionComponent<ArticleImageProps> = ({
  ...imageProps
}) => {
  return <Image className={classes.floatRight} fit="contain" {...imageProps} />;
};
