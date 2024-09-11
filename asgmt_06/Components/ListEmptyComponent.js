import { Text } from "react-native";
import styles from "../style";

export default function ListEmptyComponent(recipes) {
    if (recipes===null){
      return (
        <Text style={styles.emptyText}>No matches.</Text>
      );
    } else if (recipes.length == 0){
      return (
        <Text style={styles.emptyText}>Start by typing in an ingredient.</Text>
      );
  }
}
