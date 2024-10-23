import { StatusBar } from "react-native";
import GitExplorer from "./GitExplorer";
import { PaperProvider, Appbar } from "react-native-paper";

export default function App() {
	return (
		<PaperProvider>
			<Appbar mode="small" elevated>
				<Appbar.Content title="GitExplorer" />
			</Appbar>
				<GitExplorer />
				<StatusBar style="auto" />
		</PaperProvider>
  );
}
