import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class CalcButtonZero extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                style={style.container}>
                <Text style={style.text}>0</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: { width: 70, height: 70, borderRadius: 70, flex: 1, marginRight: 8, marginLeft: 8 , backgroundColor: '#343434'},
    text: { color: '#fff', textAlign: 'center', lineHeight: 70, fontSize: 26, textAlign: 'left', paddingLeft: 30 }
});