import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./screens/Calculator";
import History from "./screens/History";

const Stack = createNativeStackNavigator();

function CalculatorAppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CalculatorAppStack />
    </NavigationContainer>
  );
}
