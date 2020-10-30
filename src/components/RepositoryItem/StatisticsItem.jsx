import React from "react";
import { View } from "react-native";
import Text from "../Text";

const StatisticsItem = ({ num, children }) => {
  if (num < 0) {
    throw new Error(
      "StatisticsItem component doesn't support negative numbers. " +
      "You'll have to implement it."
    );
  }

  const addSuffix = (num) => {
    if (!num) {
      return num;
    }

    const suffixes = ["", "k", "M"];

    // log1000(x) = log10(x) / log10(1000) = log10(x) / 3
    const log1000 = Math.log10(num) / 3;
    // Delete decimals
    let thousands = Math.floor(log1000);

    if (thousands > 2) {
      // Don't use gigas, teras, petas...
      thousands = 2;
    } else if (thousands < 0) {
      thousands = 0;
    }

    if (thousands === 0) {
      return num.toString();
    } else {
      num = num / (1000 * thousands);
      return num.toFixed(1) + suffixes[thousands];
    }
  };

  return (
    <View>
      <Text center fontWeight="bold" testID="value">{addSuffix(num)}</Text>
      <Text center testID="label">{children}</Text>
    </View>
  );
};

export default StatisticsItem;
