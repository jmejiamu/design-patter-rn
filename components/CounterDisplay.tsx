import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Counter Count</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default CounterDisplay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  count: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
