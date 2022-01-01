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



import Screen1 from './Screens/Home';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Screen5 from './Screens/Screen5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { BottomNavigation } from 'react-native-paper';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();

const stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer
      initialRouteName="Screen_2"
      drawerpostion='right'
      drawerType='slide'
      hideStatusBar={true}
    >
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#00f'
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: false,
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          }
        }}
      >
        <Drawer.Screen
          name='Screen_1'
          component={Screen1}
          options={{
            title: 'Screen1',
            drawerIcon: ({ focused }) => (
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
            title:'Screen2',
            drawerIcon:({focused}) =>(
              <FontAwesome5
              name="btc"
              />
            )
          }}
          initialParams={{ ItemNmae: 'Item form Drawer', Itemid: 13 }}
        />
        <Drawer.Screen
          name='Screen_3'
          component={Screen3}
          options={{
            title: 'Screen3',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
              />
            )
          }}
        />
        <Drawer.Screen
          name='Screen_4'
          component={Screen4}
          options={{
            title:'Screen4',
            drawerIcon:({focused}) =>(
              <FontAwesome5
              name="btc"
              />
            )
          }}
        />
        <Drawer.Screen
          name='Screen_5'
          component={Screen5}
          options={{
            title:'Screen5',
            drawerIcon:({focused}) =>(
              <FontAwesome5
              name="btc"
              />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}









export default App;