import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  dataView: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
});

export default styles;
