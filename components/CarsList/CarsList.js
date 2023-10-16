import React from 'react';
import CarItem from '../CarItem';
import cars from '../../assets/data/cars'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(item) => <CarItem car={item} />}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CarsList;