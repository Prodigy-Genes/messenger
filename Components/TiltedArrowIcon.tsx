import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TiltedArrowIcon = () => {
  return (
    <View>
      <Ionicons name="arrow-down" size={24} color="red" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
 
  icon: {
    transform: [{ rotate: "45deg" }]
  }
});

export default TiltedArrowIcon;
