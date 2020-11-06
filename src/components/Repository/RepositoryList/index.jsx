import React, { useState } from "react";
import { FlatList } from "react-native";
import useRepositories from "../../../hooks/useRepositories";
import Separator from "../../Separator";
import Filter from "./Filter";
import ListItem from "./ListItem";
import Sort from "./Sort";

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return (
      <>
        <Filter onFilterChange={this.props.onFilterChange} />
        <Sort onValueChange={this.props.onSortChange} />
      </>
    );
  };

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item }) => <ListItem repository={item} />}
        ItemSeparatorComponent={Separator}
        onEndReached={this.props.onEndReached}
        // onEndReached={() => console.log("O.o")}
        onEndReachedThreshold="0.5"
      />
    );
  }
}

const RepositoryList = () => {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const { repositories, fetchMore } = useRepositories({
    first: 8,
    ...filter,
    ...sort
  });

  const handleFilterChange = (filter) => {
    console.log(filter);
    setFilter({ searchKeyword: filter });
  };

  const handleSortChange = (sortAction) => {
    switch (sortAction) {
      case "latest":
        setSort({
          orderBy: "CREATED_AT",
          orderDirection: "DESC"
        });
        return;
      case "highestRating":
        setSort({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC"
        });
        return;
      case "lowestRating":
        setSort({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC"
        });
        return;
    }
  };

  const handleEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onFilterChange={handleFilterChange}
      onSortChange={handleSortChange}
      onEndReached={handleEndReached}
    />
  );
};

export default RepositoryList;