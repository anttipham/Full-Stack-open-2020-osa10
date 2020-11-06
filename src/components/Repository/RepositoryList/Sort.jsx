import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const styles = StyleSheet.create({
  view: {
    // top: -10, //
    marginHorizontal: 20,
  },
});

const Sort = ({ onValueChange }) => {
  const [picker, setPicker] = useState("latest");

  const pickerContent = [
    { label: "Latest repositories", value: "latest" },
    { label: "Highest rated repositories", value: "highestRating" },
    { label: "Lowest rated repositories", value: "lowestRating" },
  ];

  const handlePickerChange = (sortValue) => {
    setPicker(sortValue);
    onValueChange(sortValue);
  };

  return (
    <View style={styles.view}>
      <RNPickerSelect
        items={pickerContent}
        value={picker}
        onValueChange={handlePickerChange}
        placeholder={{}}
      />
    </View>
  );
};

export default Sort;
