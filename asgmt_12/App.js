import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, FlatList, ListEmptyComponent } from 'react-native';
import { useState, useEffect } from 'react';
import { app } from './firebaseconfig';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

const database = getDatabase(app);

export default function App() {
	const [product, setProduct] = useState({
		title: "",
		amount: "",
	});
	const [products, setProducts] = useState([]);
	// Document references are those auto-generated "record" identifiers
	const [docs, setDocs] = useState({});

	useEffect(() => {
		const itemsRef = ref(database, "/items");
		onValue(itemsRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setProducts(Object.values(data));
				setDocs(data)
			} else {
				setProducts([]);
			}
		});
	}, []);

	const handleSave = () => {
		push(ref(database, "/items"), product);
		setProduct("");
	}

	const handleDelete = (product) => {
		const key = Object.keys(docs).find(key => docs[key] === product);
		console.log(key);
		const path = `/items/${key}`
		remove(ref(database, path));
	}

  return (
    <View style={styles.container}>
    	<TextInput
	     	placeholder='Product'
	      value={product.title}
				onChangeText={text => setProduct({ ...product, title: text })}
			/>
			<TextInput
	     	placeholder='Amount'
	      value={product.amount}
	      onChangeText={text => setProduct({ ...product, amount: text })}
			/>
			<Button
				title="Save"
				onPress={handleSave}
			/>
			<FlatList
				data={products}
				ListEmptyComponent={<Text>Nothing in list.</Text>}
				renderItem={({ item }) =>
					<View style={styles.listContainer}>
						<Text style={styles.listItem}>{item.title}: { item.amount }</Text>
						<Text style={styles.textButton} onPress={() => handleDelete(item) }>DELETE</Text>
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
    marginTop: 100,
  },
  listContainer: {
	 	flex: 1,
	 	flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 20,
  },
  listItem: {
  	fontSize: 16,
  },
  textButton: {
	  fontSize: 16,
	  fontWeight: 'bold',
		color: 'red',
  }
});
