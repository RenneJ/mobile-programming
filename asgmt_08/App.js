import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, Button, View } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 60.171900,
    longitude: 24.941400,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221
  });
  const [address, setAddress] = useState("");

  const handlePress = () => {
    const cleanedAddress = address.trim().replace(" ", "+")
    fetch(`https://geocode.maps.co/search?q=${cleanedAddress}&api_key=${process.env.EXPO_PUBLIC_API_KEY}`)
      .then(response => {
        if (!response.ok)
          throw new Error("Something went wrong:" + response.statusText);
        return response.json();
      })
      .then(setAddress(""))
      .then(data => setRegion({
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221
      }))
      .catch(error => console.error(error))
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      />
      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          style={styles.input}
          placeholder='Type address here...'
          onChangeText={text => setAddress(text)}
          value={address}
        />
        <Button
          title="Show"
          onPress={handlePress}
        />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}
