import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SearchComponent from './Components/SearchComponent';
import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <StatusBar style="auto" />
    </View>
  );
}
