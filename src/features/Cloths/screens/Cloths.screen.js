import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { ClothsInfoCard } from "../components/Cloth-info-card.components";
import styled from "styled-components";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ClothsScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
      ]}
      renderItem={() => <ClothsInfoCard />}
      keyExtractor={(item) => item.name}

      contentContainerStyle={{ padding: 6 }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight,
  },
});
