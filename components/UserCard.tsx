import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface UserCardProps {
  name: string;
  email: string;
  avatar: string;
  isLoading?: boolean;
}

export const UserCard = ({ name, email, avatar }: UserCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 2,
    gap: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});
