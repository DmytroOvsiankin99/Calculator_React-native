import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class CalcDisplay extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.display}>{this.props.display}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    display: {textAlign: 'right', fontSize: 60, color: '#fff' , paddingRight: 25, paddingLeft: 10, paddingBottom: 30}
});