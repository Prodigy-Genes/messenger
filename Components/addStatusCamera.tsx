import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



export const AddStatusCamera = () =>{
    const handleaddStatusCameraPress = () => {

    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleaddStatusCameraPress} activeOpacity={0.7}>
            <View style={styles.circle}>
                <Icon name="ios-camera" size={24} color="white"/>
            </View>
        </TouchableOpacity>
    )
        
    
}


const styles=StyleSheet.create({
    container : {
        position: "absolute",
        bottom: 20,
        right: 20
    },

    circle : {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4d9e95',
    }

})

export default AddStatusCamera