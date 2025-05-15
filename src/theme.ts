import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "red",
  fontFamily:
    "Palatino,Georgia,Garamond,Times,Times New Roman,Arial,Helvetica,sans-serif",
  fontSizes: {
    xs: "16px",
    sm: "18px",
    md: "20px",
    lg: "24px",
    xl: "28px",
  },
  components: {
    List: {
      defaultProps: {
        withPadding: true,
      },
    },
  },
});
