// RenderPropsExample.tsx
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableState from "../../components/PressableState";

const RenderPropsExample = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
        accessibilityRole="button"
      >
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>

      <Text style={styles.label}>Render Props</Text>
      <View style={styles.container}>
        <PressableState>
          {(isPressed) => (
            <View
              style={[
                styles.box,
                isPressed && { backgroundColor: "lightblue" },
              ]}
            >
              <Text style={styles.text}>
                {isPressed ? "Pressed!" : "Press Me"}
              </Text>
            </View>
          )}
        </PressableState>
      </View>
    </SafeAreaView>
  );
};

export default RenderPropsExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 20,
    backgroundColor: "lightgray",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  backButton: {
    marginLeft: 16,
    marginTop: 16,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },
});
