import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  textContainer: {
    marginTop: '25%',

    width: '100%',
    alignItems: 'center'
  },

  name: {
    fontSize: 32,
    fontWeight: '700'
  },

  tagline: {
    fontWeight: '500',
    fontSize: 17,
    paddingTop: 10,
    color: '#495057'
  },

  taglineCTA: {
    textDecorationLine: 'underline'
  },

  backgroundImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    gap: 15,
    bottom: 45,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
  }
});

export default styles;