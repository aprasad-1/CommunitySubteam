import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const FlowbitesearchSolid = () => {
  return (
    <View style={styles.flowbitesearchSolid}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    position: "absolute",
    height: "83.23%",
    width: "83.23%",
    top: "8.39%",
    right: "8.39%",
    bottom: "8.39%",
    left: "8.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  flowbitesearchSolid: {
    width: 31,
    height: 31,
    overflow: "hidden",
  },
});

export default FlowbitesearchSolid;
