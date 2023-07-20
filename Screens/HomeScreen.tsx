import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatBubble from "../Components/chatBubble";
import { ChatScreen } from "./ChatScreen";
import { HomeTabs } from "../Navigations/HomeTabs";


export const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <HomeTabs/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07201d',
    paddingTop: 5,
  },
});
