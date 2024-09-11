import { StyleSheet } from "react-native";

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
    width: '100%',
  },
  inputContainer: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  input: {
    fontSize: 20,
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 4,
    width: '80%',
  },
  listItemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator: {
    backgroundColor: "gray",
    height: 2,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  emptyText: {
    alignSelf: "center",
  }
});

export default styles;
