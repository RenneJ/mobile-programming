import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

export default function StreetMap(props) {
  return(
    <MapView
      style={styles.map}
      region={props.region}
    >
      <Marker
        title={props.address}
        coordinate={props.region}/>
    </MapView>
  )
}
