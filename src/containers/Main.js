import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {
  pressNum,
  enter,
  operation,
  clear,
  swap,
  toggleNegative
} from '../state/stack/actions';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    backgroundColor: '#333',
    paddingTop: Platform.OS === 'ios' ? 30 : 20
  },
  bottom: {
    flex: 1
  },
  number: {
    backgroundColor: '#333',
    textAlign: 'right',
    padding: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#fff'
  }
});

class App extends Component {
  render() {
    const {
      calculatorState: {
        stack,
        inputState
      },
      pressNum,
      enter,
      operation,
      clear,
      swap,
      toggleNegative
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.bottomBorder}onPress={() => toggleNegative(2)}>
            <Animatable.Text
              numberOfLines={1}
              style={styles.number}
              ref={(ref) => {
                this.row3 = ref;
              }}
            >
              {stack[2] || 0}
            </Animatable.Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBorder} onPress={() => toggleNegative(1)}>
            <Animatable.Text
              numberOfLines={1}
              style={styles.number}
              ref={(ref) => {
                this.row2 = ref;
              }}
            >
              {stack[1] || 0}
            </Animatable.Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleNegative(0)}>
            <Animatable.Text
              numberOfLines={1}
              style={styles.number}
              ref={(ref) => {
                this.row1 = ref;
              }}
            >
              {stack[0] || 0}
            </Animatable.Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button
              onPress={() => {
                clear();
                this.row1.shake(300);
                this.row2.shake(600);
                this.row3.shake(900);
              }}
              text="clear"
            />
            <Button
              onPress={(op) => {
                operation(op);
                this.row1.flipInX(400);
              }}
              text="pow"
            />
            <Button
              onPress={() => {
                swap();
                this.row1.slideInDown(400);
                this.row2.slideInUp(400);
              }}
              text="swap"
            />
            <Button
              onPress={(op) => {
                operation(op);
                this.row1.flipInX(400);
              }}
              text="/"
            />
          </View>
          <View style={styles.row}>
            <Button onPress={pressNum} text="9" />
            <Button onPress={pressNum} text="8" />
            <Button onPress={pressNum} text="7" />
            <Button
              onPress={(op) => {
                operation(op);
                this.row1.flipInX(400);
              }}
              text="X"
            />
          </View>
          <View style={styles.row}>
            <Button onPress={pressNum} text="6" />
            <Button onPress={pressNum} text="5" />
            <Button onPress={pressNum} text="4" />
            <Button
              onPress={(op) => {
                operation(op);
                this.row1.flipInX(400);
              }} 
              text="-"
            />
          </View>
          <View style={styles.row}>
            <Button onPress={pressNum} text="3" />
            <Button onPress={pressNum} text="2" />
            <Button onPress={pressNum} text="1" />
            <Button
              onPress={(op) => {
                operation(op);
                this.row1.flipInX(400);
              }}
              text="+"
            />
          </View>
          <View style={styles.row}>
            <Button onPress={pressNum} text="0" />
            <Button onPress={pressNum} text="." />
            <Button
              onPress={enter}
              text="enter"
              special
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  calculatorState: state
});

export default connect(mapStateToProps, {
  pressNum,
  enter,
  operation,
  clear,
  swap,
  toggleNegative
})(App);
