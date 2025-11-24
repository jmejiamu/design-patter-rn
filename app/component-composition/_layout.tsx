import { Stack } from "expo-router";

export default function ComponentCompositionLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
