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
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { BottomNavigation } from 'react-native-paper';



// const Tab = BottomNavigation();

const stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Screen_1'

        // initialRouteName="Home"
        // tabBarOptions={{
        //   // keyboardHidesTabBar: true,
        //   style: {
        //     borderTopWidth: 0,
        //     borderTopColor: "transparent",
        //     height: 65
        //   },
        //   borderTopColor: "transparent",
        //   inactiveTintColor: 'white',
        //   activeBackgroundColor: '#FCA311',
        //   inactiveBackgroundColor: '#000',
        //   activeTintColor: 'white'
        // }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused }) => {
        //     var tintColor = '#fff';
        //     var border = { borderRadius: 200 };
        //     var icon;

        //     switch (route.name) {
        //       case 'Home':
        //         icon = Icons.home;
        //         border = {};
        //         break;
        //       case 'Search':
        //         icon = Icons.cart;
        //         border = {};
        //         break;

        //       case 'Movie':
        //         icon = Icons.player;
        //         border = {};
        //         break;

        //       case 'Player':
        //         icon = Icons.list;
        //         border = {};
        //         break;

        //       case 'Account':
        //         icon = Icons.account;
        //         border = {};

        //         break;
        //       default:
        //         break;
        //     }

        //     return (
        //       <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        //         <Image
        //           source={icon}
        //           resizeMode="contain"
        //           style={[
        //             tintColor,
        //             border,
        //             {
        //               marginTop: 0,
        //               height: 25,
        //               width: 25,
        //             },
        //           ]}
        //         />
        //       </View>
        //     );
        //   },
        // })}
      >

        <stack.Screen
          name='Screen_1'
          component={Screen1}
          options={{
            header: () => null
          }}
        />
        <stack.Screen
          name='Screen_2'
          component={Screen2}
          options={{
            header: () => null
          }}
        />
        <stack.Screen
          name='Screen_3'
          component={Screen3}
          options={{
            header: () => null
          }}
        />
        <stack.Screen
          name='Screen_4'
          component={Screen4}
          options={{
            header: () => null
          }}
        />
        <stack.Screen
          name='Screen_5'
          component={Screen5}
          options={{
            header: () => null
          }}
        />

      </stack.Navigator>
    </NavigationContainer>
  )
}









export default App;