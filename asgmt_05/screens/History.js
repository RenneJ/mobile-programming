import { FlatList, View, Text } from "react-native";
import ListEmptyComponent from "./ListEmptyComponent";
import styles from "./styles";

export default function History({ navigation, route }) {
  const { history } = route.params;
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.historyList}
      />
    </View>
  );
}
