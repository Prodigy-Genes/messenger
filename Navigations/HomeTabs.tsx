import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../Screens/ChatScreen';
import StatusScreen from '../Screens/StatusScreen';
import CallScreen from '../Screens/CallScreen';
import CustomTabBar from './CustomTabBar'; // Import the custom TabBar component
import {CommunityScreen} from "../Screens/CommunityScreen";

const Tab = createMaterialTopTabNavigator();



export const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Chats'
      tabBar={(props) => <CustomTabBar {...props} />} // Use the custom TabBar here
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white"
        },
        tabBarLabelStyle: {
          fontWeight: "bold"
        },
        tabBarStyle: {
          backgroundColor: "#095f3b"
        }
      }}
    >
      <Tab.Screen name="comm" component={CommunityScreen} />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallScreen} />
    </Tab.Navigator>
  );
}
