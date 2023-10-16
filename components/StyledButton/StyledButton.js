import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    padding: 10,
    width: '100%',
    borderRadius: 32,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 600,
  },
})

const StyledButton = ({ type, text, onPress }) => {

  const buttonTextColor = type === 'primary' ? '#ffffff' : '#000000';
  const buttonBackground = type === 'primary' ? '#000000' : '#ffffff';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, {
        backgroundColor: buttonBackground,
      }]} onPress={onPress}>
        <Text style={[styles.text, {
          color: buttonTextColor
        }]}>{text}</Text>
      </Pressable>
    </View>
  )
}


export default StyledButton;