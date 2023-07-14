import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



export const ChatBubble =() => {
    const handleChatPress = () => {
    // Handle chat press event
  };

  const handleAddChatPress = () => {
    // Handle add chat press event
  };



    return (

        <TouchableOpacity style={styles.addChatButton} onPress={handleAddChatPress}>
            <View style={styles.addChatCircle}>
            <Icon name="chatbubble-ellipses-outline" size={24} color="white" />
            </View>
         </TouchableOpacity>
  
    )
}

const styles = StyleSheet.create({
    addChatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addChatCircle: {
    backgroundColor: '#4d9e95',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ChatBubble