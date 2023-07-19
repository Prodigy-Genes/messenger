import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../Screens/ChatScreen';
import StatusScreen from '../Screens/StatusScreen';
import CallScreen from '../Screens/CallScreen';

const Tab = createMaterialTopTabNavigator();

export const HomeTabs=() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Call" component={CallScreen} />
    </Tab.Navigator>
  );
}