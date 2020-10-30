import React from "react";
import { StyleSheet, View } from "react-native";
import StatisticsItem from "./StatisticsItem";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

const ListItemStatistics = ({ item }) => {
  return (
    <View style={styles.container}>
      <StatisticsItem num={item.stargazersCount}>
        Stars
      </StatisticsItem>
      <StatisticsItem num={item.forksCount}>
        Forks
      </StatisticsItem>
      <StatisticsItem num={item.reviewCount}>
        Reviews
      </StatisticsItem>
      <StatisticsItem num={item.ratingAverage}>
        Rating
      </StatisticsItem>
    </View>
  );
};

export default ListItemStatistics;
