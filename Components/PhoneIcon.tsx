import React from "react";
import { View , StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const PhoneIcon = ({ size = 24, color = "#169c8d" }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="call-outline" size={size} color={color} />
        </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        position:"absolute",
        right:1,
        top: -20
    }
})

export default PhoneIcon;
