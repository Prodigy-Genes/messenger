import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <MaterialIcons name="group" size={20} color="grey" />
      </TouchableOpacity>
        
        <TouchableOpacity>
          <View>
            <Text style={styles.crewText}>Chats</Text>
            <View style={styles.circle} />
             <Text style={styles.circleText}>18</Text>
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.crewText}>Status </Text>
          <View style={styles.smalldot} /> 
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.crewText}>Calls </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 170,
    paddingTop: 60,
    backgroundColor: "#07201d",
    borderBottomWidth: 1,
    justifyContent: "space-around"
  },
  smalldot: {
    backgroundColor: "grey",
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 9,
    left: 37,
    
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
    bottom: 10,
    left: 30,
  },
  circleText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    bottom: 14,
    left: 32,
   
  },
  Text: {
    color: "gray",
    fontSize: 24,
    fontWeight: 'bold',
    left: 15
  },
});
