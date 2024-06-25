import React from "react";
import { View, Text } from "react-native";

function MyCards({ isEnabled }) {
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
      <Text style={[{ color: isEnabled ? "white" : "black" }]}>My Cards</Text>
    </View>
  );
}

export default MyCards;
