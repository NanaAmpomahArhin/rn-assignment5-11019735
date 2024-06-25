import HomeScreen from "./components/HomeScreen";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("././/assets/home.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
