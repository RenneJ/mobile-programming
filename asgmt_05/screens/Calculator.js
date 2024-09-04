import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import styles from "./styles";

export default function Calculator({ navigation }) {
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
        <Pressable style={styles.button}>
          <Button
            title="History"
            onPress={() =>
              navigation.navigate("History", { history: calculations })
            }
          />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
