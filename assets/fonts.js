import { useFonts } from "expo-font";

const fontMappings = {
  "Inter-Semibold": require("./fonts/Inter/Inter-SemiBold.otf"),
  // Add more fonts here if needed
};

const loadFonts = () => {
  return useFonts(fontMappings);
};

export { loadFonts, fontMappings };
