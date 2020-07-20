import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class CalcButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                style={[style.container, { backgroundColor: this.props.backgroundColor}]}>
                <Text style={[style.text]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {width: 70, height: 70, borderRadius: 70, marginRight: 8, marginLeft: 8},
    text: {color: '#fff',textAlign: 'center', lineHeight: 70, fontSize: 26}
});