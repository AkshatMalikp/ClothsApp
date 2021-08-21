import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar,StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { ClothsScreen } from "./src/features/Cloths/screens/Cloths.screen";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text } from "react-native";
import styled from "styled-components";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Settings = () => <SafeAreaView style={styles.container}><Text>Settings</Text></SafeAreaView>;
const Map = () => <SafeAreaView style={styles.container}><Text>Maps</Text></SafeAreaView>;
const Baskets = () => <SafeAreaView style={styles.container}><Text>Your Basket</Text></SafeAreaView>;
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded){
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
            
         <NavigationContainer>
            <Tab.Navigator
           screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName ;
    
                if (route.name === 'Cloths') {
                  iconName = "shirt";
                } else if (route.name === 'Settings') {
                  iconName = "settings";
                } else if (route.name === 'Map') {
                  iconName =  "map-sharp";
                }
               else if (route.name === 'Basket') {
                iconName =  "basket-sharp";
              }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#1608e9',
              inactiveTintColor: 'gray',
            }}
            >
        <Tab.Screen name="Cloths" component={ClothsScreen} />
        <Tab.Screen name="Basket" component={Baskets} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
          
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight,
  },
});

