import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {
	const [targetNumber, setTargetNumber] = useState(getRandomInt());
	const [guess, setGuess] = useState(0);
	const [text, setText] = useState("Guess a number between 1-100");
	const [count, setCount] = useState(0);
	
	const handleGuess = () => {
		const nextCount = count + 1
		setCount(nextCount);
		if (guess > targetNumber){
			setText("Your guess " + guess + " is too high.");
		} else if (guess < targetNumber){
			setText("Your guess " + guess + " is too low.");
		} else {
			Alert.alert("You guessed the number in " + nextCount + " guesses");
			setCount(0);
			setText("Guess a number between 1-100");
			setTargetNumber(getRandomInt());
		}
	}
	
	function getRandomInt() {
		const i = Math.floor(Math.random() * 100) + 1;
		return i;
	}

  return (
    <View style={styles.container}>
    	<Text>{text}</Text>
    	<TextInput
				style={styles.textInput}
				onChangeText={guess => setGuess(Number(guess))}
				keyboardType="numeric"
    	/>
     	<Button
				title="Make a guess"
				onPress={handleGuess}
     	/>
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
  textInput: {
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		height: 40,
		width: 80,
		margin: 15,
		padding: 5,
  },
});
