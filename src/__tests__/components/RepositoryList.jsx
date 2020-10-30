import React from "react";
import { render, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      // Helper functions
      const expectTextById = (component, testID, text) => {
        expect(component.getByTestId(testID))
          .toHaveTextContent(text);
      };
      const expectStatisticsNumberByLabel = (component, label, valueAsString) => {
        // StatisticsItem.jsx looks something like this
        //   <View>
        //     <Text testID="value">value</Text>
        //     <Text testID="label">label</Text>
        //   </View>

        // For some reason, I must call the parent twice
        const statisticsItemComponent = within(
          component.getByText(label).parent.parent
        );
        expect(statisticsItemComponent.getByTestId("value"))
          .toHaveTextContent(valueAsString);
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      // Check if the second repository is rendered correctly.
      // Limit scope to only the repository component
      const listItems = getAllByTestId("repositoryItem");
      const listItemComponents = listItems.map(listItem => within(listItem));

      // First check normal text
      expectTextById(listItemComponents[0], "fullName", "jaredpalmer/formik");
      expectTextById(listItemComponents[0], "description", "Build forms in React, without the tears");
      expectTextById(listItemComponents[0], "language", "TypeScript");
      expectTextById(listItemComponents[1], "fullName", "async-library/react-async");
      expectTextById(listItemComponents[1], "description", "Flexible promise-based React data loader");
      expectTextById(listItemComponents[1], "language", "JavaScript");

      // Then check numbers
      expectStatisticsNumberByLabel(listItemComponents[0], "Stars", "21.9k");
      expectStatisticsNumberByLabel(listItemComponents[0], "Forks", "1.6k");
      expectStatisticsNumberByLabel(listItemComponents[0], "Reviews", "3");
      expectStatisticsNumberByLabel(listItemComponents[0], "Rating", "88");
      expectStatisticsNumberByLabel(listItemComponents[1], "Stars", "1.8k");
      expectStatisticsNumberByLabel(listItemComponents[1], "Forks", "69");
      expectStatisticsNumberByLabel(listItemComponents[1], "Reviews", "3");
      expectStatisticsNumberByLabel(listItemComponents[1], "Rating", "72");
    });
  });
});