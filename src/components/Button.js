import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const baseContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#fff'
};

const baseText = {
  fontSize: 36
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    ...baseContainer
  },
  specialContainer: {
    flex: 2,
    backgroundColor: '#9bc23c',
    borderRadius: 40,
    ...baseContainer
  },
  text: {
    ...baseText
  },
  specialText: {
    ...baseText,
    color: '#fff'
  }
});

class Button extends Component {
  render() {
    const { text, special, onPress } = this.props;
    return (
      <TouchableOpacity
        style={special ? styles.specialContainer : styles.container}
        onPress={() => {
					this.text.bounce(500);
					onPress(text);
				}}
      >
        <Animatable.Text
          style={special ? styles.specialText : styles.text}
          ref={(ref) => {
						this.text = ref;
					}}
        >
          {text}
        </Animatable.Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
