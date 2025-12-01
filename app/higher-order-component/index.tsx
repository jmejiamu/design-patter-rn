import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserCard } from "../../components/UserCard";
import { withLoading } from "../../hoc/withLoading";

const UserCardWithLoading = withLoading(UserCard);

const UserCardContainerHOC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@gmail.com",
        avatar: "https://i.pravatar.cc/300",
      });
      setIsLoading(false);
    }, 1000);
  }, []);
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
        <Text style={styles.title}>Higher Order Component</Text>
        <UserCardWithLoading
          isLoading={isLoading}
          name={user?.name}
          email={user?.email}
          avatar={user?.avatar}
        />
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
