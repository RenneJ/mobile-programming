import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ListHeaderComponent, ListEmptyComponent, Pressable } from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function App() {
	const [product, setProduct] = useState({title: "", amount: ""});
	const [products, setProducts] = useState([]);

	const db = SQLite.openDatabaseSync('shoppinglistdb');
	const array = [{a:1, b:2}, {c:3, d:4}]
	const initialize = async () => {
	  try {
	    await db.execAsync(`
	      CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY NOT NULL, title TEXT, amount TEXT);
	    `);
			updateList();
	  } catch (error) {
	    console.error('Could not open database', error);
	  }
	}

	useEffect(() => {
		initialize()
	}, [])

	const updateList = async () => {
		try {
			const list = await db.getAllAsync('SELECT * from product');
			setProducts(list);
		} catch (error) {
			console.error('Could not get items', error);
		}
	};

	const handleSave = async() => {
		try {
			await db.runAsync("INSERT INTO product(title, amount) VALUES(?, ?)", product.title, product.amount);
			updateList();
		}
		catch (error) {
			console.error("Adding product failed.", error)
		}
	};

	const handleDelete = async (id) => {
		try {
			await db.runAsync("DELETE FROM product WHERE id = ?", id);
			updateList();
		}
		catch (error) {
			console.error("Failed to delete product.", error);
		}
	};

  return (
    <View style={styles.container}>
    		<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						value={product.title}
						placeholder="Product"
					onChangeText={text => setProduct({ ...product, title: text })}
					/>
					<TextInput
						style={styles.textInput}
						value={product.amount}
						placeholder="Amount"
					onChangeText={text => setProduct({ ...product, amount: text })}
					/>
					<Button
						style={styles.button}
						title="Add"
						onPress={handleSave}
					/>
				</View>
				<FlatList
					 style={styles.listContainer}
					ListEmptyComponent={<Text style={styles.listItem}>Nothing in list.</Text>}
					data={products}
					renderItem={({ item }) =>
						<View style={styles.listContainerer}>
							<Text style={styles.listItem}>{item.title}</Text>
							<Text style={styles.listItem}>{ item.amount }</Text>
							<Text style={styles.textButton} onPress={() => handleDelete(item.id)}>BOUGHT</Text>
						</View>
					}
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
  inputContainer: {
	 	flex: 1,
	  alignItems: 'center',
	  justifyContent: 'flex-end',
		width: '90%',
		gap: 5,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    alignSelf: 'stretch',
    fontSize: 16,
  },
  listContainer: {
		flex: 2,
		paddingTop: 10,
		width: '80%',
	},
 listContainerer: {
	flex: 2,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: 10,
	width: '100%',
},
	listItem: {
		fontSize: 16,
	},
	textButton: {
		fontSize: 16,
		color: 'red',
		fontWeight: 'bold',
	}
});
