import React from "react";
import { SafeAreaView, StatusBar, Platform, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "./Header/Header";
import { Main } from "./Main/ui/Main";

const AppContent = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight : insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <Header />
      <Main />
    </SafeAreaView>
  );
};

export default AppContent;
