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

import GlobalStyle from '../Utiles/GlobalStyle';




import { useNavigation } from '@react-navigation/core';


export default function Screen2({ navigation, route }) {

    const { ItemNmae, Itemid } = route.params;




    const Navigation = useNavigation();
    // const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    // navigation.goBack();

    // }

    return (
        <View style={style.body}>
            <Text style={[
                GlobalStyle.customFont,
                style.text
            ]}>
                Screen 2
            </Text>
            <Pressable
                onPress={() => { Navigation.navigate('Screen_1'), { Message: 'Message from screen 2' } }}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={[
                GlobalStyle.ButtonText,
                style.text
            ]}>
                    Go To Screen 1
                </Text>
            </Pressable>
            <Text style={style.text}>{ItemNmae}</Text>
            <Text style={style.text}>ID: {Itemid}</Text>

        </View>
    )
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // text: {
    //     fontSize: 40,
    //     fontWeight: 'bold',
    //     margin: 10,
    //     // fontFamily: 'DancingScript-Regular',

    // },
})