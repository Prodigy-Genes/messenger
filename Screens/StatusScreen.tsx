import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AddStatusCamera } from "../Components/addStatusCamera";
import { WriteStatus } from "../Components/WriteStatus";
import Icon from 'react-native-vector-icons/Ionicons';



export const StatusScreen = () => {
  return (
    <View style={styles.container}>
       
      <TouchableOpacity style={styles.addStatusButton}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.addStatusIcon}
        />
        <View style={styles.addStatusOverlay}>
            <View style={styles.addStatusCircle}>
                <Text style={styles.addStatusPlus}>+</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.threedots}>
            <View style={styles.HorizontalIcon}>
                <Icon name="ellipsis-horizontal" size={20} color="grey" />
            </View>
        </TouchableOpacity>
        <View style={styles.statusInfo}>
          <View style={styles.addStatusTextContainer}>
            <Text style={styles.addName}>My status</Text>
            <Text style={styles.addStatusText}>Tap to add status update</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.min}>
            <Text style={styles.minn}>Recent updates</Text>
        </View>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusItem}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.statusImage}
          />
          <View style={styles.statusInfo}>
            <Text style={styles.statusName}>Lisa</Text>
            <Text style={styles.statusText}>Just now</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusItem}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.statusImage}
          />
          <View style={styles.statusInfo}>
            <Text style={styles.statusName}>Dorothy</Text>
            <Text style={styles.statusText}>Today, 10:30 AM</Text>
          </View>
        </TouchableOpacity>
        {/* Add more status items here */}
      </View>
      <WriteStatus />
      <AddStatusCamera/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121a17",
  },
  addStatusButton: {
    backgroundColor: "#121a17",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  min: {
    marginLeft: 12,
    marginTop: -20
  },
  addStatusIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },

  addStatusOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -265,
    marginBottom: -35,
    
  },
  threedots :{
    position: "absolute",
    bottom: 25,
    right: 10
  },
  HorizontalIcon:{
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  addStatusCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#4d9e95",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#07201d"
  },
  addStatusPlus: {
    fontSize: 23,
    color: "white",
  },

  statusInfo: {
    flex: 1,
  },
  addStatusTextContainer: {
    marginLeft: 0,
  },
  addName: {
    fontSize: 16,
    color: "white",
  },
  addStatusText: {
    color: "gray",
  },
  minn: {
    fontSize: 12,
    color: "grey",
  },
  statusContainer: {
    padding: 16,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  statusImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  statusName: {
    fontSize: 16,
    color: "white",
  },
  statusText: {
    color: "gray",
  },
});

export default StatusScreen;
