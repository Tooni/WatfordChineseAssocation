import { APP_TITLE } from "../constants";

export const getTitle = (t?: string) => `${APP_TITLE}${t ? `: ${t}` : ""}`;
