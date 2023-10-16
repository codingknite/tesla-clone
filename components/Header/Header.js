import React from 'react';
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'
import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    top: 50,
    zIndex: 99,
    paddingHorizontal: 12,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  logo: {
    width: 100,
    height: 25,
    resizeMode: 'contain',
  },

  menu: {
    width: 20,
    height: 20,
  }
});

const Header = () => {

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
    </View>
  )
}

export default Header;