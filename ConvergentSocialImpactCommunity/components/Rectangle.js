import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro,
    width: 329,
    height: 48,
  },
});

export default Rectangle;
