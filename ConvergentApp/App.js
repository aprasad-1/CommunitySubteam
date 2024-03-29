import * as React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config"

import ExploreScreen from './src/screens/ExploreScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Explore') {
          iconName = focused ? 'home' : 'home-outline';

        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>  
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );_
}

export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

