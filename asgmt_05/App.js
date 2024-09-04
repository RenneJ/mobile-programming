import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import ListEmptyComponent from "./ListEmptyComponent";

export default function App() {
  const [result, setResult] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [calculations, setCalculations] = useState([]);

  const handleAddition = () => {
    const sum = x + y;
    setResult(sum);
    //let operator = '+';
    handleHistory("+", sum);
  };

  const handleSubtraction = () => {
    const diff = x - y;
    setResult(diff);
    //let operator = '-';
    handleHistory("-", diff);
  };

  const handleHistory = (operator, result) => {
    const calculation = `${x} ${operator} ${y} = ${result}`;
    setCalculations([calculation, ...calculations]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* https://stackoverflow.com/a/5623156 | show 2 decimals if result is not integer */}
        <Text>Result: {result.toFixed(2).replace(/\.00$/, "")} </Text>
        <TextInput
          style={styles.textInput}
          placeholder=" Choose a number "
          keyboardType="numeric"
          onChangeText={(x) => setX(parseFloat(x))}
        />
        <TextInput
          style={styles.textInput}
          placeholder=" Choose a number "
          keyboardType="numeric"
          onChangeText={(y) => setY(parseFloat(y))}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Button title="+" onPress={handleAddition} />
        </Pressable>
        <Pressable style={styles.button}>
          <Button title="-" onPress={handleSubtraction} />
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={calculations}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    padding: 5,
    gap: 20,
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
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
    flex: 3,
  },
  button: {
    width: 80,
    height: 50,
    fontSize: 40,
  },
});
