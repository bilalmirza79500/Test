import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
  navigation,

} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from './constents/images';



import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { BottomNavigation } from 'react-native-paper';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();

// const stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer
    initialRouteName="Screen_2"
    drawerpostion= 'right'
    drawerType='slide'
    hideStatusBar={true}
    >
      <Drawer.Navigator
      drawerStyle={{
        backgroundColor:'#00f'
      }}
      screenOptions={{
        headerShown:true,
        swipeEnabled:false,
        gestureEnabled:false,
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#0080ff'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontSize:25,
          fontWeight:'bold',
        }
      }}
      >
        <Drawer.Screen
          name='Screen_1'
          component={Screen1}
          options={{
            title:'Screen1',
            drawerIcon:({focused}) =>(
              <FontAwesome5
              name="btc"
              />
            )
          }}
        />
        <Drawer.Screen
          name='Screen_2'
          component={Screen2}
          options={{
            header: () => null
          }}
        />
        <Drawer.Screen
          name='Screen_3'
          component={Screen3}
          options={{
            header: () => null
          }}
        />
        <Drawer.Screen
          name='Screen_4'
          component={Screen4}
          options={{
            header: () => null
          }}
        />
        <Drawer.Screen
          name='Screen_5'
          component={Screen5}
          options={{
            header: () => null
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}









export default App;