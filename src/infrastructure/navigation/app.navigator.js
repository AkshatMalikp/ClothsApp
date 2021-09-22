import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from "react-native";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { ShopNavigation } from "./shops.navigator";
import { SettingsNavigator } from './settings.navigator';
import { SettingScreen } from '../../features/settings/screens/setting.screen';
import { ClothsScreen } from "../../features/Cloths/screens/Cloths.screen";
import { BasketScreen } from '../../features/Basket/screen/BasketScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Cloths') {
          iconName = 'shirt';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        } else if (route.name === 'Map') {
          iconName = 'map-sharp';
        } else if (route.name === 'Basket') {
          iconName = 'basket-sharp';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1608e9',
      inactiveTintColor: 'grey',
    }}
  >
    <Tab.Screen name="Cloths" component={ClothsScreen} />
    <Tab.Screen name="Basket" component={BasketScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
