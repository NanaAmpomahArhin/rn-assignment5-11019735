import { FlatList, Image, Text, View, StyleSheet } from "react-native";

import { transactionData } from "../Data/TransactionData";

export default function Transaction({ isEnabled }) {
  const imagesWithWhiteTint = [
    require("./../assets/apple.png"),
    require("./../assets/moneyTransfer.png"),
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headings}>
        <Text
          style={[
            styles.transaction,
            { color: isEnabled ? "white" : "#3a3a3a" },
          ]}
        >
          Transaction
        </Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={transactionData}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View
              style={[
                styles.imageContainer,
                {
                  backgroundColor: isEnabled
                    ? "rgba(75, 60, 153, 0.1)"
                    : "#E5E5E5",
                },
              ]}
            >
              <Image
                style={[
                  styles.image,
                  isEnabled &&
                    imagesWithWhiteTint.includes(item.image) && {
                      tintColor: "white",
                    },
                ]}
                source={item.image}
              />
            </View>
            <View style={styles.brand}>
              <Text
                style={[
                  styles.brandName,
                  { color: isEnabled ? "white" : "#2e2e2e" },
                ]}
              >
                {item.brandName}
              </Text>
              <Text style={styles.brandAction}>{item.brandAction}</Text>
            </View>
            <View style={styles.costContainer}>
              <Text
                style={[
                  styles.cost,
                  isEnabled
                    ? item.cost.startsWith("-")
                      ? { color: "white" }
                      : { color: styles.positiveCost.color }
                    : item.cost.startsWith("-")
                    ? { color: styles.negativeCost.color }
                    : { color: styles.positiveCost.color },
                ]}
              >
                {item.cost}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 90,
    left: 18,
    paddingBottom: 100,
  },
  headings: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 315,
  },
  transaction: {
    fontSize: 26,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 22,
    color: "#4169E1",
    fontFamily: "sans-serif",
  },
  container: {
    flexDirection: "row",
    top: 15,
    marginBottom: 10,
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  brand: {
    flexDirection: "column",
    top: -5,
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  brandAction: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "grey",
    marginTop: -5,
  },
  costContainer: {
    width: 50,
    top: -5,
    left: -50,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cost: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "#2e2e2e",
  },
  negativeCost: {
    color: "#2e2e2e",
  },
  positiveCost: {
    color: "#4169E1",
  },
});
