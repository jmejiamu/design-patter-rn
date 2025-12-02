import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CounterContainer = () => {
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
      <View style={{ padding: 16, flex: 1 }}>
        <Text>CounterContainer</Text>
      </View>
    </SafeAreaView>
  );
};

export default CounterContainer;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 16,
    marginTop: 16,
  },
});
