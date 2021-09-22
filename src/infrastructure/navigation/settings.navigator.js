import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingScreen } from "../../features/settings/screens/setting.screen";
import { BasketScreen } from "../../features/Basket/screen/BasketScreen";
import { OrderScreen } from "../../features/Orders/screens/OrderScreen";
const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingScreen}
      />
      <SettingsStack.Screen name="Basket" component={BasketScreen} />
      <SettingsStack.Screen name="Order" component={OrderScreen} />
    </SettingsStack.Navigator>
  );
};
