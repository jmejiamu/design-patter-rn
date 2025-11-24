import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.header}>{children}</View>
);

const CardBody = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

export const CardWithSlots = Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default function RefactorCard() {
  const router = useRouter();
  const image = require("../../../assets/images/android-icon-monochrome.png");
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.back()} style={{ padding: 16 }}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>
      <Text style={{ margin: 16 }}>Refactored Card Component</Text>

      <CardWithSlots>
        <CardWithSlots.Header>
          <Text style={styles.title}>Card Title</Text>
          <Text style={styles.subtitle}>Card Subtitle</Text>
        </CardWithSlots.Header>
        <CardWithSlots.Body>
          <Image source={image} style={styles.image} />
        </CardWithSlots.Body>
        <CardWithSlots.Footer>
          <Button title={"Join"} onPress={() => {}} />
        </CardWithSlots.Footer>
      </CardWithSlots>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 16,
  },
  cardSecondary: {
    backgroundColor: "#f0f0ff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  footer: {
    marginTop: 8,
  },
  header: {
    marginBottom: 12,
  },
  body: {
    marginBottom: 12,
  },
});
