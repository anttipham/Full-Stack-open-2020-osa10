import { Platform } from "react-native";

let font;
switch (Platform.OS) {
  case "android":
    font = "Roboto";
    break;
  case "ios":
    font = "Arial";
    break;
  default:
    font = "System";
    break;
}

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    background: "#e1e4e8",
    error: "#d73a4a",
    appBar: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20
  },
  fonts: {
    main: font,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;