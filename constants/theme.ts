import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const COLORS = {
  green: "#109A27",
  white: "#ffffff",
};

export const FONTS = {
  JarkataSana_Bold: require("../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf"),
  JarkataSana_BoldItalic: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-BoldItalic.ttf"),
  JarkataSana_ExtraBold: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf"),
  JarkataSana_ExtraBoldItalic: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBoldItalic.ttf"),
  JarkataSana_ExtraLight: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLight.ttf"),
  JarkataSana_Italic: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Italic.ttf"),
  JarkataSana_Light: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-LightItalic.ttf"),
  JarkataSana_Medium: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf"),
  JarkataSana_MediumItalic: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-MediumItalic.ttf"),
  JarkataSana_Regular: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf"),
  JarkataSana_SemiBold: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf"),
  JarkataSana_SemiBoldItalic: require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBoldItalic.ttf"),
  Poppins_Black: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  Poppins_BlackItalic: require("../assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
  Poppins_Bold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  Poppins_BoldItalic: require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  Poppins_ExtraBold: require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
  Poppins_ExtraBoldItalic: require("../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
  Poppins_ExtraLight: require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
  Poppins_ExtraLightItalic: require("../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
  Poppins_Italic: require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
  Poppins_Light: require("../assets/fonts/Poppins/Poppins-Light.ttf"),
  Poppins_LightItalic: require("../assets/fonts/Poppins/Poppins-LightItalic.ttf"),
  Poppins_Medium: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
  Poppins_MediumItalic: require("../assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
  Poppins_Regular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  Poppins_SemiBold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  Poppins_SemiBoldItalic: require("../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
  Poppins_Thin: require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
  Poppins_ThinItalic: require("../assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
};

export const FontStyles = { normal: "normal", italic: "italic" };

export const FontWeights = {
  fwNormal: "normal",
  fwBold: "bold",
  fw100: "100",
  fw200: "200",
  fw300: "300",
  fw400: "400",
  fw500: "500",
  fw600: "600",
  fw700: "700",
  fw800: "800",
  fw900: "900",
};

export const TextAlignments = {
  text_auto: "auto",
  text_left: "left",
  text_right: "right",
  text_center: "center",
  text_justify: "justify",
};

export const TextDecorationLines = {
  none: "none",
  underline: "underline",
  line_through: "line-through",
  underline_linethrough: "underline line-through",
};

export const TextDecorationStyles = {
  solid: "solid",
  double: "double",
  dotted: "dotted",
  dashed: "dashed",
};

export const TextTransformations = {
  text_none: "none",
  text_uppercase: "uppercase",
  text_lowercase: "lowercase",
  text_capitalize: "capitalize",
};

export const TextAlignmentsVertical = {
  auto: "auto",
  top: "top",
  bottom: "bottom",
  center: "center",
};
