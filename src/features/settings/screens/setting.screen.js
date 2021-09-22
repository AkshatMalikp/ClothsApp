import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, View } from 'react-native';
import { AuthenticationContext } from "../../../services/Shops/authentication/authentication.context";
import { List } from "react-native-paper";
import { StatusBar, StyleSheet } from 'react-native';
import { Image } from "react-native";
import { SettingsNavigator } from "../../../infrastructure/navigation/settings.navigator";
export const SettingScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={styles.container}>
      <List.Section>
        <View>
          <Image style={style.imag} source={require('../../../assets/icon.png')} />
        </View>
        <List.Item
          title="Basket"
          description="View Your added Products"
          left={(props) => <List.Icon {...props} color="black" icon="basket" />}
          onPress={() => navigation.navigate("Basket")}
        />
        <List.Item
          title="Orders"
          description="View Your Previous Orders"
          left={(props) => <List.Icon {...props} color="black" icon="shopping" />}
          onPress={() => navigation.navigate("Order")}
        />
        <List.Item
          title="LogOut"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#ccffff',
  },
  Button1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

const style = StyleSheet.create({
  imag: {
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'row',
    alignSelf:'center'
  },
});
