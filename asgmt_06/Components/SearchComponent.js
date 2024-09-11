import { View, TextInput, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import ListComponent from "./ListComponent";
import styles from "../style";
import fetchRecipes from '../ApiCall';

export default function SearchComponent() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    fetchRecipes(searchText)
      .then(setSearchText(""))
      .then(data => setRecipes(data.meals))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by ingredient."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Search"
          onPress={handleSearch}
        />
      </View>
      <View style={styles.listContainer}>
        {loading ? <ActivityIndicator animating={loading} /> : <ListComponent recipes={recipes} />}
      </View>
    </View>
  );
}
