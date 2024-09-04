import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Button, FlatList, ListHeaderComponent, ListEmptyComponent } from 'react-native';

export default function App() {
	const [shoppingList, setShoppingList] = useState([]);
	const [listItem, setListItem] = useState("");

	const handleAdd = () => {
		setShoppingList([...shoppingList, listItem])
		setListItem("");
	}

	const handleClear = () => {
		setShoppingList([]);
		setListItem("");
	}

  return (
    <View style={styles.container}>
				<TextInput
					style={styles.textInput}
					value={listItem}
					placeholder="Write something..."
					onChangeText={text => setListItem(text)}
				/>
			<View style={styles.buttonContainer}>
				<Pressable>
					<Button
						title="Add"
						onPress={handleAdd}
					/>
				</Pressable>
				<Pressable>
					<Button
						title="Clear"
						onPress={handleClear}
					/>
				</Pressable>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					ListHeaderComponent={<Text style={styles.listHeader}>Shopping List</Text>}
					ListEmptyComponent={<Text style={styles.listItem}>Nothing in list.</Text>}
					data={shoppingList}
					renderItem={ ({item}) => <Text style={styles.listItem}>{item}</Text> }
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
  textInput: {
  	flex: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 100,
    padding: 5,
  },
  buttonContainer: {
		flex: 2,
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 50,
		padding: 5,
  },
  listContainer: {
		flex: 10,
	},
  listHeader: {
  	color: 'blue',
  	fontSize: 15,
  	fontWeight: 'bold',
		alignSelf: 'center',
  },
	listItem: {
		alignSelf: 'center'
	},
});
