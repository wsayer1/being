import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Being" }} />
        <Stack.Screen name="profile" options={{ headerTitle: "Profile" }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
