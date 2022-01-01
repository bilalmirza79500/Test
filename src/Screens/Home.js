import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,


} from 'react-native';
import GlobalStyle from '../Utiles/GlobalStyle';
import { useNavigation } from '@react-navigation/core';



export default function Screen1({ route }) {

    const Users = [
        {
            id: 1,
            name: 'User A'
        },
        {
            id: 2,
            name: 'User B'
        }, {
            id: 3,
            name: 'User C'
        },
    ];
    const [name, setName] = useState('');


    const Navigation = useNavigation();





    return (
        <View style={style.bodymain}>
            <View style={style.body}>
                <Text style={[
                    GlobalStyle.customFont,
                    style.text
                ]}>
                    Screen 1
                </Text>
                <Pressable
                    // onPress={() => { Navigation.navigate('Screen_2') }}
                    onPress={() => { for (let user of Users) { setName(user.name); } }}
                    style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
                >
                    <Text style={[
                        GlobalStyle.customFont,
                        style.text
                    ]}>
                        Get the last User
                    </Text>
                </Pressable>
                <Text style={style.text}>{name}</Text>
            </View>
            <View style={style.body}>
                <Pressable
                    onPress={() => { Navigation.navigate('Screen_3') }}
                    style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
                >
                    <Text style={[
                        GlobalStyle.customFont,
                        style.text
                    ]}>
                        Go To Screen 3
                    </Text>
                </Pressable>
            </View>
            <View style={style.body}>
                <Pressable
                    onPress={() => { Navigation.navigate('Screen_4') }}
                    style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
                >
                    <Text style={[
                        GlobalStyle.customFont,
                        style.text
                    ]}>
                        Go To Screen 4
                    </Text>
                </Pressable>
            </View>
            <View style={style.body}>
                <Pressable
                    onPress={() => { Navigation.navigate('Screen_5') }}
                    style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
                >
                    <Text style={[
                        GlobalStyle.customFont,
                        style.text
                    ]}>
                        Go To Screen 5
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    body: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodymain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        // fontWeight: 'bold',
        margin: 10,
        // fontFamily:'DancingScript-Medium',
    },
})