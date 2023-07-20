/**import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProps } from "../App";

export const FirstScreen: React.FC<NavigationProps> =({navigation}) => {
    return (
        <View style={{alignItems:"center"}}>
            <Text>First Screen</Text>
            <Button
            title="Click Here"
            onPress={()=> navigation.navigate("SecondScreen") }
            />
        </View>
    )
} **/

/* Was using this file to study navigation*/ 