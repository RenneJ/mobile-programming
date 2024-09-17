import MapView, { Marker } from "react-native-maps";

export default function MyMap(props) {
  return (
    <MapView
      style={{ width: "100%", height: "100%"}}
      initialRegion={{
        latitude: 59.900692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}
    >
      <Marker
        coordinate={{
          latitude: 60.201292,
          longitude: 24.934302,
        }}
        title="Haaga-Helia"
        description="Pasila campus"
      />
    </MapView>
  );
}
