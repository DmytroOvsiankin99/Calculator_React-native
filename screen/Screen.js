require('./../lib/swisscalc.lib.format.js');
require('./../lib/swisscalc.lib.operator.js');
require('./../lib/swisscalc.lib.operatorCache.js');
require('./../lib/swisscalc.lib.shuntingYard.js');
require('./../lib/swisscalc.calc.calculator.js');
require('./../lib/swisscalc.display.numericDisplay.js');
require('./../lib/swisscalc.display.memoryDisplay.js');
require('./../lib/swisscalc.display.fixedPointDisplay.js')
require('./../lib/swisscalc.calc.loanCalculator.js')
require('./../lib/swisscalc.calc.tipCalculator.js')

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalcButton, CalcDisplay, CalcButtonZero } from '../lib/index.js';

export default class ScreenCalc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: '0'
        }
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    }

    binaryOperator = (val) => {
        this.calc.addBinaryOperator(val);
    }

    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onEquelPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onUnaryPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onMemoryClear = () => {
        this.calc.memoryClear();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onMemoryRecall = () => {
        this.calc.memoryRecall();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onMemoryPlus = () => {
        this.calc.memoryPlus();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    onMemoryMinus = () => {
        this.calc.memoryMinus();
        this.setState({ display: this.calc.getMainDisplay() })
    }

    render() {
        return (
            <View style={style.container}>
                <CalcDisplay display={this.state.display} />

                <View style={style.rowWrap}>
                    <CalcButton onPress={() => { this.onClearPress() }} title='AC' backgroundColor='#a4a4a4' />
                    <CalcButton onPress={() => { this.onPlusMinusPress() }} title='+/-' backgroundColor='#a4a4a4' />
                    <CalcButton onPress={() => { this.onUnaryPress(this.oc.PercentOperator) }} title='%' backgroundColor='#a4a4a4' />
                    <CalcButton onPress={() => { this.binaryOperator(this.oc.DivisionOperator) }} title='÷' backgroundColor='#ff9e04' />
                </View>
                <View style={style.rowWrap}>
                    <CalcButton onPress={() => { this.onMemoryClear() }} title='mc' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onMemoryRecall() }} title='mr' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onMemoryMinus() }} title='m-' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onMemoryPlus() }} title='m+' backgroundColor='#ff9e04' />
                </View>
                <View style={style.rowWrap}>
                    <CalcButton onPress={() => { this.onDigitPress('7') }} title='7' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('8') }} title='8' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('9') }} title='9' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.binaryOperator(this.oc.MultiplicationOperator) }} title='×' backgroundColor='#ff9e04' />
                </View>
                <View style={style.rowWrap}>
                    <CalcButton onPress={() => { this.onDigitPress('4') }} title='4' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('5') }} title='5' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('6') }} title='6' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.binaryOperator(this.oc.SubtractionOperator) }} title='-' backgroundColor='#ff9e04' />
                </View>
                <View style={style.rowWrap}>
                    <CalcButton onPress={() => { this.onDigitPress('1') }} title='1' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('2') }} title='2' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.onDigitPress('3') }} title='3' backgroundColor='#343434' />
                    <CalcButton onPress={() => { this.binaryOperator(this.oc.AdditionOperator) }} title='+' backgroundColor='#ff9e04' />
                </View>
                <View style={style.rowWrap}>
                    <CalcButtonZero  onPress={() => { this.onDigitPress('0') }} />
                    <CalcButton onPress={() => { this.onDigitPress('.') }} title=',' backgroundColor='#343434' />
                    <CalcButton onPress={this.onEquelPress} title='=' backgroundColor='#ff9e04' />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: { paddingBottom: 20, backgroundColor: '#000', flex: 1, justifyContent: 'flex-end' },
    rowWrap: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }
})