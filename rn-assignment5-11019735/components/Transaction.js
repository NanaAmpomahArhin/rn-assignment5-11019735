import { FlatList, Image, Text, View, StyleSheet } from "react-native";

import { transactionData } from "../Data/TransactionData";

export default function Transaction() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headings}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={transactionData}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.brand}>
              <Text style={styles.brandName}>{item.brandName}</Text>
              <Text style={styles.brandAction}>{item.brandAction}</Text>
            </View>
            <View>
              <Text style={styles.cost}>{item.cost}</Text>
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
    top: 100,
  },
  headings: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transaction: {
    fontSize: 26,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#3a3a3a",
  },
  seeAll: {
    fontSize: 22,
    color: "blue",
    fontFamily: "sans-serif",
  },
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E5E5E5",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  brand: {
    flexDirection: "column",
  },
  brandName: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "#2e2e2e",
  },
  brandAction: {
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "grey",
  },
  cost: {
    fontSize: 22,
  },
});
