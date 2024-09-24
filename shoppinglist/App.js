import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { app } from './firebaseconfig';
import { getDatabase, push, ref, onValue } from 'firebase/database';

const database = getDatabase(app);

export default function App() {
	const [product, setProduct] = useState({
		title: "",
		amount: "",
	});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const itemsRef = ref(database, "/items");
		onValue(itemsRef, (snapshot) => {
			const data = snapshot.val();
			setProducts(Object.values(data));
			console.log(data);
		});
	}, []);

	const handleSave = () => {
		push(ref(database, "/items"), product);
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
				renderItem={({ item }) =>
				<View>
						<Text>{item.title}: { item.amount }</Text>
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
});
