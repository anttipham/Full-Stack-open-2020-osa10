import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";
import { Searchbar } from "react-native-paper";


const styles = StyleSheet.create({
  searchbar: {
    margin: 20,
    marginBottom: 0,
    borderRadius: 5,
  }
});

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");
  const [filterDebounce] = useDebounce(filter, 500);

  useEffect(() => {
    onFilterChange(filterDebounce);
  }, [filterDebounce]);

  return (
    <Searchbar
      placeholder="Set filter"
      autoCapitalize="none"
      value={filter}
      onChangeText={(value) => setFilter(value)}
      style={styles.searchbar}
    />
  );
};

export default Filter;
