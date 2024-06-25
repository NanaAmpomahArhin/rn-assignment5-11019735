import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import MyCards from "./components/MyCards";
import Statistics from "./components/Statistics";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isEnabled ? "#0D0D0D" : "white" },
      ]}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: isEnabled ? "rgba(12, 12, 59, 0.1)" : "white",
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "#666666",
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/home.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
              headerShown: false,
            }}
          >
            {() => <HomeScreen isEnabled={isEnabled} />}
          </Tab.Screen>
          <Tab.Screen
            name="My Cards"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/myCards.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          >
            {() => <MyCards isEnabled={isEnabled} />}
          </Tab.Screen>
          <Tab.Screen
            name="Statistics"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/statictics.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          >
            {() => <Statistics isEnabled={isEnabled} />}
          </Tab.Screen>
          <Tab.Screen
            name="Settings"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/settings.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
              headerShown: false,
            }}
          >
            {() => (
              <SettingsScreen
                isEnabled={isEnabled}
                setIsEnabled={setIsEnabled}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
