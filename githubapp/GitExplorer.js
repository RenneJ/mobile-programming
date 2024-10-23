import { View, StyleSheet, FlatList } from "react-native";
import { TextInput, Button, Card, Text, IconButton } from "react-native-paper";
import { useState } from "react";
import * as WebBrowser from 'expo-web-browser';

export default function GitExplorer(){
	const [keyword, setKeyword] = useState("");
	const [repositories, setRepositories] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleFetch = () => {
		setLoading(true);
	  fetch(`https://api.github.com/search/repositories?q=${keyword}`)
	  .then(response => {
	    if (!response.ok)
	      throw new Error("Error in fetch: " + response.statusText);

	    return response.json();
	  })
	  .then(data => setRepositories(data.items))
	  .catch(err => console.error(err))
		.finally(() => setLoading(false))
	}

	const handleBrowser = async(url) => {
		try {
			const result = await WebBrowser.openBrowserAsync(url)
		} catch(error) {
			console.error(error);
		}
	}

	return(
	<View style={styles.container}>
		<TextInput
			style={styles.textInput}
			label="Keyword"
			mode="outlined"
			value={keyword}
			placeholder="Search for repositories..."
			onChangeText={text => setKeyword(text)}
		/>
		<Button mode="outlined" icon="search-web" onPress={handleFetch} loading={loading}>
			Search
		</Button>
		<FlatList
			style={styles.list}
			data={repositories}
			renderItem={({item}) =>
				<Card style={styles.listItem}>
					<Card.Title title={item.full_name} />
					<Card.Content>
						<Text variant="bodyMedium">{item.description}</Text>
					</Card.Content>
					<Card.Actions>
						<IconButton icon="web" onPress={() => handleBrowser(item.html_url)}/>
					</Card.Actions>
				</Card>
			}
		/>
	</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInput: {
    width: "90%",
    marginVertical: 10,
  },
  list: {
  	width: "90%",
   marginVertical: 10,
  },
  normalText: {
    fontSize: 20,
  },
  listItem: {
    marginBottom: 10,
  },
  listItemDesc: {
    fontSize: 16,
  }
});
