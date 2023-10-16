import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';
import { View, Text, ImageBackground } from 'react-native';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car.item;

  return (

    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImg} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tagline}>
          {tagline}
          {' '}
          <Text style={styles.taglineCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton type='primary' text='Custom Order' onPress={() => {
          console.warn('Custom Order was pressed')
        }} />
        <StyledButton type='secondary' text='Existing Inventory' onPress={() => {
          console.warn('Existing Inventory was pressed')
        }} />
      </View>
    </View>

  )
}

export default CarItem;