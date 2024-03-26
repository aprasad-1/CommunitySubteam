const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PersonalProfilePage from "./screens/PersonalProfilePage";
import GroupPage from "./screens/GroupPage";
import CreatejoinGroup from "./screens/CreatejoinGroup";
import SearchPage from "./screens/SearchPage";
import SearchIndividualScreen from "./screens/SearchIndividualScreen";
import VotingPage from "./screens/VotingPage";
import Rectangle from "./components/Rectangle";
import FlowbitesearchSolid from "./components/FlowbitesearchSolid";
import IconamoonprofileFill from "./components/IconamoonprofileFill";
import ClaritygroupSolid from "./screens/ClaritygroupSolid";
import Rectangle1 from "./components/Rectangle1";
import FlowbitesearchSolid1 from "./components/FlowbitesearchSolid1";
import IconamoonprofileFill1 from "./components/IconamoonprofileFill1";
import ClaritygroupSolid1 from "./screens/ClaritygroupSolid1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Livvic-Regular": require("./assets/fonts/Livvic-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PersonalProfilePage"
              component={PersonalProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupPage"
              component={GroupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatejoinGroup"
              component={CreatejoinGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchPage"
              component={SearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchIndividualScreen"
              component={SearchIndividualScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VotingPage"
              component={VotingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClaritygroupSolid"
              component={ClaritygroupSolid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClaritygroupSolid1"
              component={ClaritygroupSolid1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
