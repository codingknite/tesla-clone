import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';
import modelx from '../../assets/images/ModelS.jpeg';
import { View, Text, ImageBackground } from 'react-native';

const CarItem = () => {

  return (

    <View style={styles.carContainer}>
      <ImageBackground source={modelx} style={styles.backgroundImg} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $125,000</Text>
      </View>

      <StyledButton type='primary' text='Custom Order' onPress={() => {
        console.warn('Custom Order was pressed')
      }} />
      <StyledButton type='secondary' text='Existing Inventory' onPress={() => {
        console.warn('Existing Inventory was pressed')
      }} />
    </View>

  )
}

export default CarItem;