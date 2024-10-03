import { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Contacts from "expo-contacts";
import * as Sms from "expo-sms";

export default function SendSms(){
	const [contact, setContact] = useState({});

	const getContact = async() => {
		const { status } = await Contacts.requestPermissionsAsync();
		if (status === "granted") {
			const {data} = await Contacts.getContactsAsync({
				field: [Contacts.Fields.PhoneNumbers]
			})
			if (data) {
				setContact(data[0]);
			}
		};
	}

	const sendSms = async() => {
		const isSmsAvailable = await Sms.isAvailableAsync();

		if (isSmsAvailable){
			await Sms.sendSMSAsync((contact.phoneNumbers[0].number), "message")
		}
	}

	return (
		<View>
			<Text>{contact.name}</Text>
			<Button title="Get Contact" onPress={getContact} />
			<Button title="Send SMS" onPress={sendSms} />

		</View>
	);
}
