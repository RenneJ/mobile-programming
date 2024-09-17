import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  map: {
    flex: 10,
    width:"100%",
    height: "100%",
  },
  inputContainer: {
    flex: 1,
    width: "95%",
  },
  input: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    padding: 5,
  }
});

export default styles;
