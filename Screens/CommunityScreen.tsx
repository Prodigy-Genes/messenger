import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const CommunityScreen =() => {
    return (
      <ScrollView style={styles.Container}><View >
        <TouchableOpacity activeOpacity={0.7}><View style={styles.NewCommunity}>
          <View style={styles.roundedsquare}/>
          <View style={styles.circle} />
          <AntDesign name="plus" size={22} color="white" style={styles.plus}/>
          <FontAwesome5 name="users" size={24} color="#c9c9c9" style={styles.users}/>
          <Text style={styles.Text}>New Community</Text>
        </View></TouchableOpacity>

        <View style={styles.userCommunity}>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.MainCommunity}>
            <View style={styles.roundedsquareInfo}>
              <Image source={{
                uri: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              }}
              style={styles.Image}
              />
              <Text style={styles.InfoText}> Live Life! </Text>
            </View>
          </View></TouchableOpacity>
          <Divider/>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.Announcements}>
              <View style={styles.ProfileCircle} />
              <Ionicons name="notifications" size={30} color="#00ffaa" style={styles.Notification} />
              <View style={styles.AnnouncementTextContainer}><Text style={styles.AnnouncementText}>Announcements</Text>
              <Text style={styles.Info}> +233 59 849 4033 : Have Fun</Text></View>
          </View></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.ViewAllContainer}><Entypo name="chevron-right" size={24} color="grey" />
          <Text style={styles.Viewall}>View all </Text></View></TouchableOpacity>
        </View>

        <View style={styles.userCommunity}>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.MainCommunity}>
            <View style={styles.roundedsquareInfo}>
              <Image source={{
                uri: "https://images.unsplash.com/photo-1611496855431-6501b335c67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }}
              style={styles.Image}
              />
              <Text style={styles.InfoText}> THe StRaw Hat PirAtes </Text>
            </View>
          </View></TouchableOpacity>
          <Divider/>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.Announcements}>
              <View style={styles.ProfileCircle} />
              <Ionicons name="notifications" size={30} color="#00ffaa" style={styles.Notification} />
              <View style={styles.AnnouncementTextContainer}><Text style={styles.AnnouncementText}>Announcements</Text>
              <Text style={styles.Info}> Luffy: Orewa Luffy!</Text></View>
          </View></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.ViewAllContainer}><Entypo name="chevron-right" size={24} color="grey" />
          <Text style={styles.Viewall}>View all </Text></View></TouchableOpacity>
        </View>

        <View style={styles.userCommunity}>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.MainCommunity}>
            <View style={styles.roundedsquareInfo}>
              <Image source={{
                uri: "https://images.unsplash.com/photo-1525431836161-e40d6846e656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              }}
              style={styles.Image}
              />
              <Text style={styles.InfoText}> WE ARE FAMILY </Text>
            </View>
          </View></TouchableOpacity>
          <Divider/>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.Announcements}>
              <View style={styles.ProfileCircle} />
              <Ionicons name="notifications" size={30} color="#00ffaa" style={styles.Notification} />
              <View style={styles.AnnouncementTextContainer}><Text style={styles.AnnouncementText}>Announcements</Text>
              <Text style={styles.Info}> Barney : I'm Awesome</Text></View>
          </View></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}><View style={styles.ViewAllContainer}><Entypo name="chevron-right" size={24} color="grey" />
          <Text style={styles.Viewall}>View all </Text></View></TouchableOpacity>
        </View>
        
        
        
        
      </View></ScrollView>


    )
}


const styles=StyleSheet.create({
  Container:{
    backgroundColor:"#121a17",
    flex: 1,
  },
  NewCommunity:{
    backgroundColor:"#27312d37",
    flexDirection: "row",
    height: 75,
  },
  roundedsquare:{
    width:60,
    height:60,
    borderRadius: 10,
    backgroundColor: "#a1a1a1d7",
    marginLeft: 10,
    marginTop: 10
  },
  circle:{
    width:25,
    height:25,
    borderRadius: 0.5*25,
    backgroundColor: "#00ffd5",
    position: "absolute",
    bottom:3,
    left: 49,
    borderWidth: 3,
    borderColor: "#121a17"
  },
  plus:{
    position: "absolute",
    bottom: 4,
    left: 50,
  },
  users:{
    position: "absolute",
    bottom: 25,
    left: 25
  },
  Text:{
    marginLeft: 20,
    bottom: -25,
    fontSize: 16,
    color: "white"
  },



  userCommunity:{
    backgroundColor: "#27312d37",
    height: 200,
    marginTop: 30

  },
  MainCommunity:{
    height: 150/2,
  },
  roundedsquareInfo:{
    flexDirection: "row"
  },
  Image:{
    width: 60,
    height: 60,
    borderRadius:10,
    marginLeft: 10,
    marginTop: 10

  },
  InfoText:{
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 20,
    color: "white"
  },
  Announcements:{
    flexDirection: "row",
    marginTop: 8
  },
  
  ProfileCircle:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#30a56f",
    marginTop: 10,
    marginLeft: 10
  },
  Notification:{
    position: "absolute",
    left: 20,
    bottom: 10,
  }
  ,
  AnnouncementText:{
    fontSize: 16,
    fontWeight: "700",
    color: "white"
  },
  AnnouncementTextContainer:{
    marginTop: 10,
    marginLeft: 10
  },
  Info:{
    marginTop: 3,
    color: "grey"
  },
  
  ViewAllContainer:{
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 25
  },
  Viewall :{
    marginLeft: 25,
    color: "grey"

  }








})


