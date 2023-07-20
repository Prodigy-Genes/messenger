import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export const WriteStatus = () =>{

    const handleWriteStatus = () =>{

    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleWriteStatus} activeOpacity={0.7}>
            <View style={styles.circle}>
                <Icon name="pencil" size={24} color="white" />
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        position:"absolute",
        bottom: 100,
        right:24
    },

    circle : {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#202b29",
    }
})


