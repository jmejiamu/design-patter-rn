import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserCardContainerHOC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <Text style={styles.title}>Higher Order Component</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserCardContainerHOC;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  backButton: {
    marginLeft: 16,
    marginTop: 16,
  },
});
