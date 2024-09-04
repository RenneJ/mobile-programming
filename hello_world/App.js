import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
	const [msg, setMsg] = useState("");
	
	const handlePress = () => {
		Alert.alert("Message", "You wrote: " + msg);
	}
	return (
		<View style={styles.container}>
			<TextInput 
				placeholder="Write something..."
				onChangeText={text => setMsg(text)}
				keyboardType="numeric"
			 />
			<Button title="Press me" onPress={handlePress} />
			<Text>Hello World!</Text>
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
