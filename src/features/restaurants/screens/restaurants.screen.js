import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View,StyleSheet } from "react-native";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;
const ListContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: lightblue;
`;
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantsInfoCard />
    </ListContainer>
  </SafeAreaView>
);

const styles=StyleSheet.create({
  container:{
    flex: 1,
  marginTop:StatusBar.currentHeight,
  },

})