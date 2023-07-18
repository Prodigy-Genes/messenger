import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export const CheckIn = () => {
  return (
    <View style={styles.container}><ScrollView>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Check-in</Text>
      </View>
      <View style={styles.header2}>
        <TouchableOpacity style={styles.Trips} activeOpacity={0.7}><View ><Text style={styles.MyTrip}>My Trips</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.Flights} activeOpacity={0.7}><View ><Text style={styles.AnyFlight}>Any Flight</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.Flyer} activeOpacity={0.7}><View ><Text style={styles.FrequentFlyer}>Frequent {"\n"}<Text style={styles.under}>Flyer</Text></Text></View></TouchableOpacity>  
      </View>
      <View style={styles.infoContainer}>
        <Text  style={styles.info}>Check-in Eligibility</Text>
        <Text style={styles.paragraph}>
            Check-in starts 72 hours before departure and ends 2 
            hours before departure
        </Text>
        </View>

        <View style={styles.holder}>
            <View style={styles.refresh}>
                <TouchableOpacity activeOpacity={0.7}><Text style={styles.refreshText}>Refresh</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}><EvilIcons name="refresh" size={24} color="black" style={styles.refreshIcon}/></TouchableOpacity>
            </View>
            <View style={styles.flightInfos}>
                <Ionicons name="airplane-outline" size={120} color="#8ea7a8" style={styles.airplane} />
                <Octicons name="no-entry" size={45} color="#097737" style={styles.noEntry}/>

                <Text style={styles.flightText}>No upcoming flights</Text>
            </View>

        </View>
        
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ecee",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height:"14%",
    top: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#9c9898"
  },
  textHeader: {
    fontSize: 30,
    top:30,
    fontWeight: "bold",
  },

  header2:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dce3e4",
    height:"10%",
    width: "98%",
    top: 14,
    marginLeft: 4,
    marginRight: 10,
    borderRadius: 15,
    opacity: 1
   
  },


  Trips:{
    backgroundColor: "#ffffff",
    width: "30%",
    height: "77%",
    left: -10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
    MyTrip:{
    fontSize: 20,
    color:"green"
  },


  Flights : {
   
    width: "30%",
    height: "77%",
    left: 0,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  AnyFlight:{
    fontSize: 20,
    color: "#000000"
  },

  Flyer:{
   
    width: "30%",
    height: "77%",
    right: -10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  FrequentFlyer:{
    fontSize: 20,
    color: "#000000",
    textAlign: "center"
  } ,
  under: {
    textAlign: "center"
},



infoContainer:{
    marginTop: 40,
    left: 10
},
info:{
    fontSize: 20,
    fontWeight: "500"
},
paragraph:{
    marginTop: 10,
    fontSize: 15
},


holder:{
    flexDirection: "column",
    marginTop: 18
},
refresh:{
    width: "95%",
    backgroundColor: "#ffff",
    marginLeft: 10,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",

},
refreshText:{
    right: -280,
    color: "#4b4a4a",
    top: 10
},
refreshIcon:{
    right: -347,
    top: -12
},

flightInfos:{
    width: "95%",
    backgroundColor: "#ffff",
    marginTop: 2,
    marginLeft: 10,
    height: 490,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"

},
flightText:{
    fontSize: 16,
    color: "#4b4a4a",
    top: -50
},

airplane:{
    transform:  [{rotate: "-90deg"}],
    top: -10,
    
},
noEntry : {
    left: 40,
    top: -115,
    transform: [{rotate: "45deg"}]
}


});
