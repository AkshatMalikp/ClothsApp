import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,Image,View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
export const BasketScreen = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image style={styles.imagg}  source={require('../../../assets/emptybasket.png')} />
    <Text style={styles.textt} > Sorry Nothing is in your basket right now</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#ccffff',
  },
  imagg:{
    height:250,
    width:250,
    justifyContent:"center",
    alignSelf:"center",

  },
  textt:{
    textAlign:"center",
    fontSize:50,
    fontWeight:"bold",
    fontStyle:"italic",
  }
  

});
