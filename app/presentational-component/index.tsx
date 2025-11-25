// UserCardContainer.tsx (Container)
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const UserCardContainer = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text>Container Component</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserCardContainer;
