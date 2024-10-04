import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';

export default function App() {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);

	const speakText = () => {
		switch(index){
			case (0):
				Speech.speak(text, { language: "en-GB" });
				break;
			case (1):
				Speech.speak(text, { language: "fi-FI" });
				break;
			case (2):
				Speech.speak(text, { language: "sv-SE" });
				break;
			default: Speech.speak(text, { language: "en-GB" });
		}
	}

  return (
    <View style={styles.container}>
    	<SegmentedControl
  			style={{
               width: "90%",
               height: 45
             }}
        values={['ENGLISH', 'FINNISH', 'SWEDISH']}
        selectedIndex={index}
        onChange={(event) => {setIndex(event.nativeEvent.selectedSegmentIndex)}}
     	/>
      <TextInput
      	style={{fontSize: 18, marginTop: 15, marginBottom: 15, borderBottomWidth: 1, padding: 5, width: "90%"}}
      	placeholder='Type text here.'
       	onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button
      	title="say it"
       	onPress={speakText}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
