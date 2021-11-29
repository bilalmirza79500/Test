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
import { useNavigation } from '@react-navigation/core';



export default function Screen1({ }) {
 
    const Navigation = useNavigation();


   


    return (
        <View style={style.body}>
            <View>
                <Text style={style.text}>
                    Screen 1
                </Text>
            </View>
            <Pressable
                onPress={()=>{Navigation.navigate('Screen_2')}}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Go To Screen 2
                </Text>
            </Pressable>
            <Pressable
                onPress={()=>{Navigation.navigate('Screen_3')}}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Go To Screen 3
                </Text>
            </Pressable>
            <Pressable
                onPress={()=>{Navigation.navigate('Screen_4')}}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Go To Screen 4
                </Text>
            </Pressable>
            <Pressable
                onPress={()=>{Navigation.navigate('Screen_5')}}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Go To Screen 5
                </Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
})