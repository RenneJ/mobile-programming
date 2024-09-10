import { StyleSheet, FlatList, View, Text } from "react-native";

export default function RepoList(props) {
  return (
    <FlatList
      data={props.repos}
      renderItem={({item}) =>
        <View style={styles.container}>
          <Text style={styles.listItemName}>{ item.full_name}</Text>
          <Text style={styles.listItemDesc}>{ item.description}</Text>
        </View>}
    />
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
