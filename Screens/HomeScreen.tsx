import React from "react";
import { View, StyleSheet } from "react-native";
import { ChatScreen } from "./ChatScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButtons } from "../Components/HeaderButtons";
import ChatBubble from "../Components/chatBubble";


export const HomeScreen = () => {
  const chats = [
    {
      sender: 'Lisa',
      receiver: 'Receiver 1',
      message: 'How is Luffy',
      messageStatus: "sent",
      unreadMessages: 20,
      timeSent: '10:00',
      profilePicture: "https://media.istockphoto.com/id/1407667294/photo/milk-or-yogurt-splash-with-strawberries-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=is&k=20&c=V3IWMNlf4adUCOkL6ipQ47Sq5zJGlUfahNZ8CWfdEhE=", // Replace with the actual profile picture URL
    },
    {
      sender: 'Dorothy',
      receiver: 'Receiver 2',
      message: 'How are you?',
      messageStatus: "delivered",
      unreadMessages: 0,
      timeSent: '11:30',
      profilePicture: "https://media.istockphoto.com/id/1403278751/photo/abstract-particle-background.webp?b=1&s=170667a&w=0&k=20&c=BdJSofDWBiySpZe_-SgecLnt9MB5ZBp1FtCIGaNASB8=", // Replace with the actual profile picture URL
    },
    {
      sender: 'Dora',
      receiver: 'Receiver 3',
      message: 'Have you seen the movie?',
      messageStatus: "recieved",
      unreadMessages: 0,
      timeSent: '1:45',
      profilePicture: "https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Replace with the actual profile picture URL
    },
  ];

  const handleChatPress = () => {
    // Handle chat press event
  };

  return (
    <View style={styles.container}>
       
      <HeaderButtons />  
      {chats.map((chat, index) => (
        <ChatScreen
          key={index}
          sender={chat.sender}
          receiver={chat.receiver}
          message={chat.message}
          messageStatus="delivered"
          unreadMessages={chat.unreadMessages}
          timeSent={chat.timeSent}
          profileImage={chat.profilePicture}
          onPress={handleChatPress}
        />
      ))}
      <ChatBubble />
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
