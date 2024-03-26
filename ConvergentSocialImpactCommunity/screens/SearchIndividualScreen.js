import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SearchIndividualScreen = () => {
  return (
    <View style={styles.searchIndividualScreen}>
      <View style={styles.starParent}>
        <View style={[styles.star, styles.starPosition1]} />
        <View style={[styles.star1, styles.starPosition]} />
        <View style={[styles.star2, styles.starPosition1]} />
        <View style={[styles.star3, styles.starPosition]} />
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.text, styles.miTypo]}>$$</Text>
        <Image
          style={[styles.starIcon, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <View style={[styles.rectangleView, styles.frameChild7Bg]} />
        <Text style={[styles.blantonMuseum, styles.asThePrimaryLayout]}>
          Blanton Museum
        </Text>
        <Text style={styles.description}>Description</Text>
        <Text style={[styles.hoursOfOperation, styles.asThePrimaryLayout]}>
          Hours of Operation
        </Text>
        <Text style={[styles.sunday, styles.am5pmTypo]}>Sunday</Text>
        <Text style={[styles.am5pm, styles.am5pmLayout]}>10am - 5pm</Text>
        <Text style={[styles.closed, styles.closedPosition]}>Closed</Text>
        <Text style={[styles.am5pm1, styles.am5pm1Position]}>10am - 5pm</Text>
        <Text style={[styles.am5pm2, styles.am5pm2Position]}>10am - 5pm</Text>
        <Text style={[styles.am5pm3, styles.am5pm3Position]}>10am - 5pm</Text>
        <Text style={[styles.am5pm4, styles.am5pm4Position]}>10am - 5pm</Text>
        <Text style={[styles.am5pm5, styles.am5pm5Position]}>10am - 5pm</Text>
        <Text style={[styles.monday, styles.closedPosition]}>Monday</Text>
        <Text style={[styles.tuesday, styles.am5pm1Position]}>Tuesday</Text>
        <Text style={[styles.wednesday, styles.am5pm2Position]}>Wednesday</Text>
        <Text style={[styles.thursday, styles.am5pm3Position]}>Thursday</Text>
        <Text style={[styles.friday, styles.am5pm4Position]}>Friday</Text>
        <Text style={[styles.saturday, styles.am5pm5Position]}>Saturday</Text>
        <Text style={[styles.asThePrimary, styles.asThePrimaryLayout]}>
          As the primary art collection for the city of Austin, the Blanton
          Museum of Art is a major resource for the community. With more than
          21,000 works in the collection, the Blanton showcases art from across
          the ages, from ancient Greek pottery to abstract expressionism. With a
          year-round schedule of traveling exhibitions, art lovers are sure to
          discover new and old favorites at the Blanton.
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.indoor, styles.miTypo]}>Indoor</Text>
        <Text style={[styles.mi, styles.miTypo]}>{`<5 mi`}</Text>
        <View style={[styles.frameChild7, styles.frameChildPosition]} />
        <Text style={styles.suggest}>Suggest</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starPosition1: {
    height: 32,
    backgroundColor: Color.colorSilver,
    top: 300,
    position: "absolute",
  },
  starPosition: {
    top: 299,
    height: 32,
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  frameLayout: {
    height: 17,
    width: 34,
    top: 337,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  miTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_3xs,
    top: 339,
    height: 17,
    position: "absolute",
  },
  starIconLayout: {
    height: 26,
    width: 22,
    top: 306,
    position: "absolute",
  },
  frameChild7Bg: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
  },
  asThePrimaryLayout: {
    height: 53,
    width: 266,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pmTypo: {
    height: 21,
    fontSize: FontSize.size_xs,
    top: 421,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pmLayout: {
    width: 69,
    marginLeft: -21,
  },
  closedPosition: {
    color: Color.colorGray_100,
    top: 442,
    height: 21,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pm1Position: {
    top: 463,
    color: Color.colorGray_100,
    height: 21,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pm2Position: {
    height: 20,
    top: 484,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pm3Position: {
    top: 504,
    color: Color.colorGray_100,
    height: 21,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pm4Position: {
    top: 525,
    color: Color.colorGray_100,
    height: 21,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  am5pm5Position: {
    top: 546,
    color: Color.colorGray_100,
    height: 21,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 8,
    width: 8,
    top: 270,
  },
  frameChildPosition: {
    left: 158,
    position: "absolute",
  },
  star: {
    left: 27,
    width: 27,
  },
  star1: {
    left: 26,
    width: 27,
  },
  star2: {
    left: 79,
    width: 42,
  },
  star3: {
    left: 53,
    width: 26,
  },
  frameChild: {
    left: 24,
  },
  frameItem: {
    left: 101,
  },
  frameInner: {
    left: 63,
  },
  text: {
    left: 8,
    width: 65,
  },
  starIcon: {
    left: 29,
  },
  starIcon1: {
    left: 51,
  },
  starIcon2: {
    left: 73,
  },
  starIcon3: {
    left: 95,
  },
  rectangleView: {
    top: 125,
    left: 20,
    width: 285,
    height: 169,
    position: "absolute",
  },
  blantonMuseum: {
    top: 15,
    fontSize: FontSize.size_21xl,
    marginLeft: -154,
    width: 266,
  },
  description: {
    marginLeft: -157,
    top: 592,
    fontSize: FontSize.size_11xl,
    height: 53,
    width: 266,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  hoursOfOperation: {
    marginLeft: -150,
    top: 390,
    fontSize: FontSize.size_xl,
  },
  sunday: {
    width: 54,
    marginLeft: -83,
  },
  am5pm: {
    height: 21,
    fontSize: FontSize.size_xs,
    top: 421,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  closed: {
    width: 69,
    marginLeft: -21,
  },
  am5pm1: {
    width: 69,
    marginLeft: -21,
  },
  am5pm2: {
    width: 69,
    marginLeft: -21,
  },
  am5pm3: {
    width: 69,
    marginLeft: -21,
  },
  am5pm4: {
    width: 69,
    marginLeft: -21,
  },
  am5pm5: {
    width: 69,
    marginLeft: -21,
  },
  monday: {
    width: 54,
    marginLeft: -83,
  },
  tuesday: {
    width: 54,
    marginLeft: -83,
  },
  wednesday: {
    marginLeft: -88,
    width: 65,
  },
  thursday: {
    width: 54,
    marginLeft: -83,
  },
  friday: {
    width: 54,
    marginLeft: -83,
  },
  saturday: {
    width: 54,
    marginLeft: -83,
  },
  asThePrimary: {
    top: 638,
    fontSize: FontSize.size_mini,
    marginLeft: -154,
    width: 266,
  },
  ellipseIcon: {
    left: 113,
    position: "absolute",
  },
  frameChild1: {
    left: 128,
    position: "absolute",
  },
  frameChild2: {
    left: 143,
    position: "absolute",
  },
  frameChild3: {
    height: 8,
    width: 8,
    top: 270,
  },
  frameChild4: {
    left: 173,
    position: "absolute",
  },
  frameChild5: {
    left: 188,
    position: "absolute",
  },
  frameChild6: {
    left: 203,
    position: "absolute",
  },
  indoor: {
    left: 47,
    width: 66,
  },
  mi: {
    left: 86,
    width: 65,
  },
  frameChild7: {
    top: 315,
    width: 146,
    height: 47,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
  },
  suggest: {
    top: 316,
    marginLeft: -83,
    fontSize: FontSize.size_11xl,
    height: 53,
    width: 266,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  starParent: {
    marginLeft: -162,
    top: 10,
    width: 366,
    height: 877,
    left: "50%",
    position: "absolute",
  },
  searchIndividualScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default SearchIndividualScreen;
