import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
export const OrderScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>NOTHING ORDERED YET</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#ccffff',

  },
});
