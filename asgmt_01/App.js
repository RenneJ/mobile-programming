import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	const [result, setResult] = useState(0);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const handleAddition = () => {
		setResult(x + y);
	}

	const handleSubtraction = () => {
		setResult(x - y);
	}
	
  return (
    <View style={styles.container}>
    	<View style={styles.inputContainer}>
	      <Text>Result: {result} </Text>
	      <TextInput
	      	style={styles.textInput}
					placeholder="Choose a number"
					keyboardType="numeric"
					onChangeText={x => setX(Number(x))}
	      />
	      <TextInput
	      	style={styles.textInput}
					placeholder="Choose a number"
					keyboardType="numeric"
					onChangeText={y => setY(Number(y))}
	      />
      </View>
      <View style={styles.buttonContainer}>
	      <Button 
	      	size="large"
					title="+"
					onPress={handleAddition}
	      />
	      <Button
	      	size='lg'
					title="-"
					onPress={handleSubtraction}
	      />
	    </View>
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
  inputContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		padding: 5,
    gap: 20,		
  },
  buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'center',
		gap: 50,
		padding: 5,
  },
  textInput: {
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		height: 40,
  },
});
