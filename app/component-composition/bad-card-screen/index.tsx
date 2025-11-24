import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CardVariant = "primary" | "secondary";

interface BadCardProps {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  showButton?: boolean;
  buttonLabel?: string;
  onPress?: () => void;
  variant?: CardVariant;
}

const BadCard: React.FC<BadCardProps> = ({
  title,
  subtitle,
  image,
  showButton,
  buttonLabel,
  onPress,
  variant = "primary",
}) => {
  return (
    <View
      style={[styles.card, variant === "secondary" && styles.cardSecondary]}
    >
      <Text style={styles.title}>{title}</Text>

      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

      {image ? <Image source={image} style={styles.image} /> : null}

      {showButton && (
        <View style={styles.footer}>
          <Button title={buttonLabel ?? "Press"} onPress={onPress} />
        </View>
      )}
    </View>
  );
};

const BadCardScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={() => router.back()} style={{ padding: 16 }}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>

      <View style={styles.screen}>
        <BadCard
          title="Event Tonight"
          subtitle="Join us at 7PM"
          showButton
          buttonLabel="Join"
          onPress={() => {}}
          variant="primary"
          image={require("../../../assets/images/android-icon-monochrome.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default BadCardScreen;

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
});
