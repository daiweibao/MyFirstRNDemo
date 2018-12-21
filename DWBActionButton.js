import React, { Component } from 'react';
import { StyleSheet, View,Text,Alert } from 'react-native';
import ButtonMy from 'apsl-react-native-button'


export default class ActionButton extends Component {

        render() {
        return (

            <View style={styles.ViewSyt}>
                <ButtonMy style={{backgroundColor: '#c771ec'}} onPress={()=>{
                    Alert.alert('我是一个button');
                }}>
                    <View style={styles.actionButtonIcon}>
                        <Text style={styles.actionButtonIcon}>我是一个button</Text>
                    </View>
                </ButtonMy>
            </View>


        );
    }

}

const styles = StyleSheet.create({
    ViewSyt:{
        flex:1,
        marginTop:100,
        fontSize: 20,
        height: 40,
        color: 'white',

    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});