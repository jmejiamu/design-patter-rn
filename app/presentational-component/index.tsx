import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserCard } from "../../components/UserCard";
const UserCardContainer = () => {
  const router = useRouter();
  const [user, setuser] = React.useState<any>();
  useEffect(() => {
    setTimeout(() => {
      setuser({
        name: "John Doe",
        email: "john@gmail.com",
        avatar: "https://i.pravatar.cc/300",
      });
    }, 1000);
  }, []);
  if (!user)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
        accessibilityRole="button"
      >
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>Container Component</Text>
        <UserCard name={user?.name} email={user?.email} avatar={user?.avatar} />
      </View>
    </SafeAreaView>
  );
};

export default UserCardContainer;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
