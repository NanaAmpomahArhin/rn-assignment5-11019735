import { FlatList, Text, View, StyleSheet, Switch } from "react-native";
import { settingsData } from "../Data/SettingsData";

export default function SettingsScreen({ isEnabled, setIsEnabled }) {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: isEnabled ? "rgba(0, 0, 0, 0.9)" : "white" },
      ]}
    >
      <View style={styles.screenNameContainer}>
        <Text
          style={[
            styles.screenName,
            { color: isEnabled ? "lightgray" : "black" },
          ]}
        >
          Settings
        </Text>
      </View>
      <FlatList
        data={settingsData}
        renderItem={({ item }) => (
          <View style={styles.settingsTypeContainer}>
            <Text
              style={[
                styles.settingsType,
                { color: isEnabled ? "lightgray" : "black" },
              ]}
            >
              {item.name}
            </Text>
            <View style={styles.expandableContainer}>
              <Text style={styles.expandable}>{">"}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.backgroundSwitchContainer}>
        <Text
          style={[styles.theme, { color: isEnabled ? "lightgray" : "black" }]}
        >
          Theme
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "lightgreen" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screenNameContainer: {
    top: 80,
    alignItems: "center",
    marginBottom: 140,
  },
  screenName: {
    fontWeight: "500",
    fontSize: 22,
  },
  settingsTypeContainer: {
    left: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    height: 80,
  },
  settingsType: {
    fontSize: 20,
    fontWeight: "500",
    top: 35,
    width: 164.5,
    height: 45,
  },
  expandableContainer: {
    left: 110,
    top: 25,
    width: 50,
    height: 40,
    alignItems: "flex-end",
  },
  expandable: {
    color: "gray",
    fontSize: 35,
  },
  backgroundSwitchContainer: {
    top: -50,
    left: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  theme: {
    fontSize: 25,
    fontWeight: "bold",
  },
  switch: {
    left: -30,
  },
});
