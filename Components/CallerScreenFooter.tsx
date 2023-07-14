import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const CallScreenFooter = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="lock" size={10} color="grey" style={styles.icon} />
      <Text style={styles.text}>
        Your personal calls are <Text style={styles.encryptedText}>end-to-end encrypted</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 1,
    justifyContent: "center",
    marginBottom: 10,
    marginRight: 30

  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "grey",
    fontSize: 10,
  },
  encryptedText: {
    color: "green",
    fontWeight: "bold",
  },
});

export default CallScreenFooter;
