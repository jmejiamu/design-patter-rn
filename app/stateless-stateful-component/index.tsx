import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CounterDisplay from "../../components/CounterDisplay";

const CounterContainer = () => {
  const router = useRouter();
  const [count, setCount] = React.useState(0);
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
        <Text style={styles.label}>CounterContainer</Text>
        <CounterDisplay count={count} />
        <Button title="Increment Count" onPress={() => setCount(count + 1)} />
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
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
