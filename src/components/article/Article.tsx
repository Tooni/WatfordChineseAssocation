import {
  FunctionComponent,
  PropsWithChildren,
  Children,
  ReactElement,
} from "react";
import classes from "./Article.module.css";
import { ArticleImage } from "./ArticleImage";
import { ArticleText } from "./ArticleText";

type ArticleCompoundComponent = FunctionComponent<PropsWithChildren> & {
  Image: typeof ArticleImage;
  Text: typeof ArticleText;
};

export const Article: ArticleCompoundComponent = ({ children }) => {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const image = childrenArray.find((child) => child.type === ArticleImage);
  const text = childrenArray.filter((child) => child.type === ArticleText);
  return (
    <div className={classes.root}>
      {image}
      {text}
    </div>
  );
};

Article.Image = ArticleImage;
Article.Text = ArticleText;
