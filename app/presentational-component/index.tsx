import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserCard } from "../../components/UserCard";
const UserCardContainer = () => {
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
  if (!user) return <Text>Loading...</Text>;
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text>Container Component</Text>
        <UserCard name={user?.name} email={user?.email} avatar={user?.avatar} />
      </View>
    </SafeAreaView>
  );
};

export default UserCardContainer;
