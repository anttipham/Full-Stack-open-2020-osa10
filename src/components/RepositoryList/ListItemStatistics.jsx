import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

const ListItemStatistics = ({ item }) => {
  const addSuffix = (num) => {
    if (!num) {
      return num;
    }
    
    const suffixes = ["", "k", "M"];

    // log1000(x) = log10(x) / log10(1000) = log10(x) / 3
    const log1000 = Math.log10(num) / 3; 
    // Delete decimals
    let thousands = Math.floor(log1000);

    // Don't use gigas and teras
    if (thousands > 2) {
      thousands = 2;
    }
    
    if (thousands === 0) {
      return num.toString();
    } else {
      num = num / (1000 * thousands);
      return num.toFixed(1) + suffixes[thousands];
    }
  };
  
  const DisplayStatistics = (...content) => {
    return content.map(([label, num]) => (
      <View key={label}>
        <Text center fontWeight="bold">{addSuffix(num)}</Text>
        <Text center>{label}</Text>
      </View>
    ));
  };
  return (
    <View style={styles.container}>
      {DisplayStatistics(
        ["Stars", item.stargazersCount],
        ["Forks", item.forksCount],
        ["Reviews", item.reviewCount],
        ["Rating", item.ratingAverage]
      )}
    </View>
  );
};

export default ListItemStatistics;
