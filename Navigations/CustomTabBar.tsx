import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the necessary navigation component


interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}



const CustomTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.row}>
        <Text style={styles.Text}>WhatsApp</Text>

        <View style={styles.iconsContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="camera" size={24} color="#d8d8d87d" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <MaterialIcons name="search" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <MaterialIcons name="more-vert" size={24} color="grey" />
          </TouchableOpacity>
          
        </View>
      </View>


      <View style={styles.tabsContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="groups" size={24} color="grey"  style={styles.group}/>
        </TouchableOpacity>


        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabButton, { borderBottomColor: isFocused ? "#2fd46e" : "transparent" }]}
            >
              <Text style={[styles.tabButtonText, { color: isFocused ? "#2fd46e" : "grey" }]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 150,
    paddingTop: 57,
    backgroundColor: "#16161646",
    borderBottomWidth: 1,
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 14,
    width: 100,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    left: -20,
  },
  tabButton: {
    borderBottomWidth: 2,
    paddingBottom: 8,
    paddingHorizontal: 16,
    marginBottom: -10
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Text: {
    color: "#d8d8d87d",
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 10,
  },
  group:{
    marginLeft: 10
  }
});

export default CustomTabBar;
