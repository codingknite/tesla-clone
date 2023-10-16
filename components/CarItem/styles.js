import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    marginTop: '25%',

    width: '100%',
    alignItems: 'center'
  },

  title: {
    fontSize: 32,
    fontWeight: '700'
  },

  subtitle: {
    fontWeight: '500',
    fontSize: 17,
    paddingTop: 10,
    color: '#495057'
  },

  backgroundImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});

export default styles;