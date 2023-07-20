import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { HomeTabs } from "../Navigations/HomeTabs";



export const HeaderButtons = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <Text style={styles.Text}>WhatsApp</Text>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="ios-camera" size={24} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>

      <TouchableOpacity>
        <MaterialIcons name="groups" size={24} color="grey" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 160,
    paddingTop: 60,
    backgroundColor: "#16161646",
    borderBottomWidth: 1,
    justifyContent: "space-around"
  },
  smalldot: {
    backgroundColor: "grey",
    width: 9,
    height: 9,
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 8,
    left: 50,
    
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    justifyContent: "space-between",
    
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
    width: 100,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: '100%',
    left: -20
  },
  crewText: {
    color: "grey",
    fontSize: 16,
   
    marginRight: 8, // Add marginRight for space between crewText items
  },
  circle: {
    backgroundColor: "gray",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 50,
  },
  circleText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
    position: "absolute",
    bottom: 2,
    left: 51,
   
  },
  Text: {
    color: "gray",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  
  },
});
