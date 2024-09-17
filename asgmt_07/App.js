import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import apiCall from './api';

export default function App() {
  const [currency, setCurrency] = useState("THIS IS TEXT");
  const [currencyList, setCurrencyList] = useState({});

  //https://api.apilayer.com/currency_data/
  useEffect(() => {
    if(!currencyList){
      apiCall("symbols")
      .then(data => setCurrencyList(data.currencies))
      .catch(err => console.log("Error: " + err))
    }
  }, [currencyList])

  return (
    <View style={styles.container}>
      <Text>Here: { currencyList["AED"] }</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(itemValue, itemIndex) =>
          setCurrency(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
