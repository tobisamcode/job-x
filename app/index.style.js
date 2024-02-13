import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  container: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default styles;
