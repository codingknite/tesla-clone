import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import CarsList from './components/CarsList/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style='auto' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
