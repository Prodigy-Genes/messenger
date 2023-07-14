import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const HeaderButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.Text}>WhatsApp</Text>
      </View>

      <TouchableOpacity style={styles.under}>
        <MaterialIcons name="group" size={20} color="grey" />
      </TouchableOpacity>

      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="ios-camera" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={20} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.crew}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>18</Text>
        </View>
        <View style={styles.smalldot} />
        <TouchableOpacity>
          <Text style={styles.crewText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.crewText}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.crewText}>Calls</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "#07201d",
    borderBottomWidth: 1,
    alignItems: "flex-start", // Align items to the start of the container
    flexDirection: "row",
    justifyContent: "space-between"
    
  },

  smalldot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "grey",
    bottom: 10,
    right: -28,
    position: "absolute"
  },

  row: {
    flexDirection: "row",
    alignItems: "center", // Add alignItems property to vertically align the text
    marginBottom: 20,
  },

  under: {
    position: "absolute", // Position the group icon absolutely
    bottom: 15, // Align the group icon to the bottom
    left: 0, // Align the group icon to the left
    marginLeft: 16, // Add some left margin to the group icon
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
    width: 100,
    marginBottom: 20
  },
  crew: {
    flexDirection: "row",
    alignItems: "center", // Add alignItems property to vertically align the crew text
    position: "absolute",
    bottom: 15,
    left: 0,
    marginLeft: 120,
    justifyContent: "space-around",
    width: 100,
    
  },
  crewText: {
    color: "grey",
    fontSize: 16,
    marginLeft: 80,
    
    
  },

  circle: {
    backgroundColor: "gray",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -10,
    left: 0
    
  },
  circleText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
  Text: {
    color: "gray",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

