import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    padding: 5,
    gap: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    //alignItems: "center",
    justifyContent: "center",
    gap: 50,
    marginTop: 15,
  },
  textInput: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  historyList: {
    flexGrow: 1,
    justifyContent: "center",
  },
  listItem: {
    fontSize: 20,
  },
  button: {
    width: "20%",
    height: 50,
    fontSize: 40,
  },
});
export default styles;
