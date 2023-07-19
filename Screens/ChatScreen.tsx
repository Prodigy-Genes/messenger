import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons'

export const ChatScreen = () =>{
    return(
        <ScrollView style={styles.container}>
           <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.ProfileContainer}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  }}
                  style={styles.ProfileImage}
                />
              </TouchableOpacity>
              <View style={styles.ProfileInfo}>
                <Text style={styles.ProfileName}>Nana Ama</Text>
                <Text style={styles.ProfileMessage}>Hi</Text>
              </View>
              <View style={styles.MessageCount}>
                <Text style={styles.MessageCountText}>3</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.ProfileContainer}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1415844380/photo/water-leaf-splash-wave-isolated-on-the-white-background.webp?b=1&s=170667a&w=0&k=20&c=8zQWSsssMT-xrkj8MNcUPGLs1suOlMXi8YgyZorUpjg=",
                  }}
                  style={styles.ProfileImage}
                />
              </TouchableOpacity>
              <View style={styles.ProfileInfo}>
                <Text style={styles.ProfileName}>Dorothy</Text>
                <Text style={styles.ProfileMessage}>Hi</Text>
              </View>
              <View style={styles.MessageCount}>
                <Text style={styles.MessageCountText}>1</Text>
              </View>
            </View>
          </TouchableOpacity>


          
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#121a17"
    },
    ProfileContainer:{
        height: 71,
        marginTop: 9,
        flexDirection: "row",
    },
    ProfileInfo:{
        flexDirection: "column",
    },
    ProfileImage :{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 20,
        marginTop: 10
    },
    ProfileName:{
        fontSize: 16,
        color:"#ffffff",
        marginLeft: 12,
        marginTop: 15
    },
    ProfileMessage:{
        fontSize: 14,
        color: "#aca9a9",
        marginLeft: 12
    },
    MessageCount: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#08ffc1",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: 10,
        top: 40
    },
    MessageCountText: {
        color: "#121a17",
        fontSize: 12,
        fontWeight: "bold"
    }
});
