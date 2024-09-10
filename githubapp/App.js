import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import RepoList from './RepoList';
import fetchRepos from './api';

export default function App() {
  const [keyWord, setKeyWord] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    fetchRepos(keyWord)
      .then(setKeyWord(""))
      .then(data => setRepos(data.items))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
            style={styles.normalText}
            placeholder='Type keyword here...'
            value={keyWord}
            onChangeText={text => setKeyWord(text)}
          />
          <Button
            title="Search"
            onPress={handleSearch}
          />
      </View>
      <View style={styles.listContainer}>
        {loading ? <ActivityIndicator animating={loading} /> : <RepoList repos={repos} />}
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
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  normalText: {
    fontSize: 20,
  },
  listItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listItemDesc: {
    fontSize: 16,
  }
});
