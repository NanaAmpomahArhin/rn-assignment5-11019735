import { View, StyleSheet, ScrollView } from "react-native";
import Profile from "./Profile";
import Search from "./Search";
import Card from "./Card";
import ActionIcons from "./ActionIcons";
import Transaction from "./Transaction";

export default function HomeScreen({ isEnabled }) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: isEnabled ? "rgba(0, 0, 0, 0.9)" : "white" },
      ]}
    >
      <View style={styles.header}>
        <Profile isEnabled={isEnabled} />
        <Search isEnabled={isEnabled} />
      </View>
      <Card />
      <ActionIcons isEnabled={isEnabled} />
      <Transaction isEnabled={isEnabled} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
  },
});
