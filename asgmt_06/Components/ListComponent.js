import { FlatList, View , Text, Image} from "react-native";
import styles from '../style';
import ListEmptyComponent from './ListEmptyComponent';

export default function ListComponent(props) {

  return (
      <FlatList
        data={props.recipes}
        ListEmptyComponent={ListEmptyComponent(props.recipes)}
        ItemSeparatorComponent={() => (
          <View style={ styles.separator } />
        )}
        renderItem={({item}) =>
          <View>
            <Text style={styles.listItemName}>{ item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }}
              style={styles.image} />
          </View>}
      />
  )
}
