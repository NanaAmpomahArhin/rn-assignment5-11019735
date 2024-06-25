import React from "react";
import { View, Text } from "react-native";

function Statistics({ isEnabled }) {
  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isEnabled ? "rgba(0, 0, 0, 0.9)" : "white",
        },
      ]}
    >
      <Text style={[{ color: isEnabled ? "white" : "black" }]}>Statistics</Text>
    </View>
  );
}

export default Statistics;
