import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ComponentCompositionScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
        accessibilityRole="button"
      >
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.header}>Component Composition</Text>

        <Text style={styles.description}>
          Explore how components can be composed to build complex UIs. Tap the
          button below to navigate to the example screen.
        </Text>

        <View style={styles.previewCard}>
          <Text style={styles.cardTitle}>Card Preview</Text>
          <Text style={styles.cardBody}>
            This is a small example of a composed card.
          </Text>
        </View>

        <Pressable
          onPress={() => {
            router.push("/component-composition/bad-card-screen");
          }}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Bad Card Example</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/component-composition/refactor-card-screen");
          }}
          style={({ pressed }) => [
            styles.button,
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
          accessibilityRole="button"
        >
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
            Refactor Card Example
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ComponentCompositionScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7fb",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignSelf: "center",
    width: "100%",
    maxWidth: 720,
  },
  backButton: {
    padding: 12,
    marginLeft: 6,
    marginTop: 6,
    borderRadius: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 20,
    lineHeight: 20,
  },
  previewCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    // subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.03)",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 13,
    color: "#64748b",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // button shadow
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
    marginTop: 12,
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2563eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    elevation: 1,
  },
  buttonPressed: {
    transform: [{ scale: 0.99 }],
    opacity: 0.95,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSecondary: {
    color: "#2563eb",
  },
});
