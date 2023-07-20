import React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TiltedArrowIcon from "../Components/TiltedArrowIcon";
import PhoneIcon from "../Components/PhoneIcon";
import { CallerAdder } from "../Components/CallerAdder";
import CallScreenFooter from "../Components/CallerScreenFooter";
import { Divider } from "react-native-elements"


export const CallScreen = () => {
  return (
    <View style={styles.container}>
       <ScrollView>
        <TouchableOpacity style={styles.CreateCall} activeOpacity={0.7}>
          <View style={styles.CreateCallcircle}>
            <Ionicons name="link-outline" size={26} color="white" style={styles.icon} />
          </View>
          <View style={styles.CreateCallText}>
            <Text style={styles.createText}>Create call link</Text>
            <Text style={styles.shareText}>Share a link for your WhatsApp call</Text>
          </View>
        </TouchableOpacity >
        <View style={styles.Recent}>
          <Text style={styles.recent}>Recent</Text>
        </View>
        <View style={styles.recentCalls}>
          <TouchableOpacity style={styles.Calls} activeOpacity={0.7}>
            <TouchableOpacity activeOpacity={0.7}><Image
              source={{
                uri: "https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }}
              style={styles.callerImage}
            /></TouchableOpacity>
            <View style={styles.callerInfo}>
              <Text style={styles.callerName}>Lisa</Text>
              <View style={styles.callerTimeContainer}>
                <TiltedArrowIcon/>
                <PhoneIcon/>
                <Text style={styles.callerTime}>Yesterday 11:57</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Calls} activeOpacity={0.7}>
            <TouchableOpacity activeOpacity={0.7}><Image
              source={{
                uri: "https://media.istockphoto.com/id/1403278751/photo/abstract-particle-background.webp?b=1&s=170667a&w=0&k=20&c=BdJSofDWBiySpZe_-SgecLnt9MB5ZBp1FtCIGaNASB8="
              }}
              style={styles.callerImage}
            /></TouchableOpacity>
            <View style={styles.callerInfo}>
              <Text style={styles.callerName}>Dora</Text>
              <View style={styles.callerTimeContainer}>
                <TiltedArrowIcon/>
                <PhoneIcon/>
                <Text style={styles.callerTime}>Today 09:30</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Divider style={styles.divider}/>
      <CallScreenFooter/>
      <CallerAdder/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121a17",
  },
  CreateCall: {
    backgroundColor: "#121a17",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  CreateCallcircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4d9e95",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    transform: [{ rotate: "-45deg" }]
  },
  CreateCallText: {
    marginLeft: 10,
  },
  createText: {
    fontSize: 14,
    color: "white",
  },
  shareText: {
    fontSize: 12,
    color: "grey",
    marginTop: 4
  },
  Recent: {
    paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 10
  },
  recent: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  recentCalls: {
    flex: 1,
    backgroundColor: "#121a17",
  },
  Calls: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
   
  },
  callerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  callerInfo: {
    flex: 1,
  },
  callerName: {
    color: "white",
    fontSize: 16,
  },
  callerTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  callerTime: {
    color: "grey",
    fontSize: 12,
    marginLeft: 4,
  },
  divider: {
    backgroundColor: "#253332",
    height: 1,
    marginVertical: 30
  }
});

export default CallScreen;
