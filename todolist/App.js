import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import EmptyListComponent from './EmptyListComponent.js';

export default function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handlePress = () => {
		setTodos([todo, ...todos]);
		setTodo("");
	};
	
  return (
    <View style={styles.container}>
    	<View style={styles.inputComponent}>
				<TextInput
					value={todo}
					placeholder="Enter a new task..."
					onChangeText={text => setTodo(text)}
				/>
				<Button
					title="Add todo"
					onPress={handlePress}
				/>
			</View>
			<View style={styles.listComponent}>
				<FlatList
					data={todos}
					renderItem={ ({item}) => <Text>{item}</Text> }
					ListEmptyComponent={EmptyListComponent}
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
    margin: 60,
  },
  inputComponent: {
  	flex: 1,
  	//backgroundColor: 'red',
  	marginBottom: 20,
		width: 300,
  },
  listComponent: {
		flex: 5,
  },
});
