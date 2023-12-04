import { FunctionComponent, useEffect } from "react";
import { APP_TITLE } from "../constants";

export const SetDocumentTitle: FunctionComponent<{ title?: string }> = ({ title }) => {
  useEffect(() => {
    document.title = `${APP_TITLE}${title ? `: ${title}` : ""}`;
  }, [title]);
  return null;
};
