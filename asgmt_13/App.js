import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import * as Contacts from "expo-contacts";

export default function App() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = async() => {
		const { status } = await Contacts.requestPermissionsAsync();
		if (status === 'granted'){
			const { data } = await Contacts.getContactsAsync({
				fields: [Contacts.Fields.PhoneNumbers]
			});
			if (data.length > 0){
				const contactsArray = []
				for (i in data) {
					contactsArray.push(data[i])
				}
				setContacts(contactsArray)
			};
		};
	}

  return (
    <View style={styles.container}>
			<View style={ styles.header}/>
			<View style={styles.listContainer}>
      <FlatList
      	ListEmptyComponent={<Text style={styles.listText}>No contacts to show.</Text>}
      	data={contacts}
					renderItem={({ item }) =>
						// if item has key phoneNumbers render it, else "skip" it
						(item.phoneNumbers
							? <Text>{item.name}: {item.phoneNumbers[0].number}</Text>
							: <View style={{height: 0}}/>
						)
					}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
  	flex: 1,
  },
  listContainer: {
  	flex: 8,
  },
});
