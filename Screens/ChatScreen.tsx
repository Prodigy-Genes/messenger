import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

type ChatScreenProps = {
  sender: string;
  receiver: string;
  message: string;
  messageStatus: "sent" | "delivered" | "seen";
  unreadMessages: number;
  timeSent: string;
  profileImage: string;
  onPress: () => void;
}

export const ChatScreen = ({
  sender,
  receiver,
  message,
  messageStatus,
  unreadMessages,
  timeSent,
  profileImage,
  onPress,
}: ChatScreenProps) => {
  const getMessageStatusIcon = (): IconProps['name'] => {
    if (messageStatus === 'sent') {
      return 'checkmark';
    } else if (messageStatus === 'delivered') {
      return 'checkmark-done';
    } else if (messageStatus === 'seen') {
      return 'checkmark-done-sharp';
    } else {
      return 'checkmark';
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer}>
        <Image source={{uri: profileImage}} style={styles.profileImage} />
        {unreadMessages > 0 && <View style={styles.circle}><Text style={styles.circleText}>{unreadMessages}</Text></View>}
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.sender}>{sender}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.statusContainer}>
          <Icon
            name={getMessageStatusIcon()}
            size={16}
            color={messageStatus === 'seen' ? 'blue' : 'gray'}
          />
          <Text style={styles.timeSent}>{timeSent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImageContainer: {
    borderRadius: 25,
    marginRight: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    flex: 1,
  },
  sender: {
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
  },
  message: {
    position: "absolute",
    fontSize: 14,
    color: 'gray',
    top:22,
    left: 18
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeSent: {
    position: "absolute",
    marginLeft: 280,
    fontSize: 12,
    color: "#4d9e95",
    top: -20
  },
  circle: {
    backgroundColor: "#4d9e95",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    right: -320,
  },
  circleText: {
    color: "#07201d",
    fontSize: 12,
    fontWeight: 'bold',
  },
  circle1: {
    backgroundColor: "#4d9e95",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default ChatScreen;
