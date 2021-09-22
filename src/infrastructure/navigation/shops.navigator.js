import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ClothsScreen } from "../../features/Cloths/screens/Cloths.screen";

const ShopStack = createStackNavigator();

export const ShopNavigation = () => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="Shops" component={ClothsScreen} />
    </ShopStack.Navigator>
  );
};
