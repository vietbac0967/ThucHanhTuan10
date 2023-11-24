import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./screens/Screen1";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UpdateUser from "./screens/UpdateUser";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Screen1} />
          <Stack.Screen name="Edit" component={UpdateUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
