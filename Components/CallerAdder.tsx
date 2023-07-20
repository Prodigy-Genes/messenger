import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const CallerAdder =() =>{
    const handleCallerAdder =() =>{

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.circle}><MaterialIcons name="add-call" size={24} color="white"/></View>
            </TouchableOpacity>
        </View>
    )
}


const styles=StyleSheet.create({
    container : {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    circle : {
        backgroundColor: '#4d9e95',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})