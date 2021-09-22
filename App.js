import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from "firebase";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthenticationContextProvider } from "./src/services/Shops/authentication/authentication.context";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";
const firebaseConfig = {
  apiKey: "AIzaSyANaeyQZiip41_zdbUxk5KvZrksiFaYyj8",
  authDomain: "clothshop-f8482.firebaseapp.com",
  projectId: "clothshop-f8482",
  storageBucket: "clothshop-f8482.appspot.com",
  messagingSenderId: "1016348930330",
  appId: "1:1016348930330:web:f01661ead590d9fc6bbca3",
  measurementId: "G-KCRF819JJB",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
