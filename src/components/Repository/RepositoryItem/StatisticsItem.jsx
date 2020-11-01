import React from "react";
import { View } from "react-native";
import addSuffix from "../../../utils/addSuffix";
import Text from "../../Text";

const StatisticsItem = ({ num, children }) => {
  return (
    <View>
      <Text center fontWeight="bold" testID="value">{addSuffix(num)}</Text>
      <Text center testID="label">{children}</Text>
    </View>
  );
};

export default StatisticsItem;
