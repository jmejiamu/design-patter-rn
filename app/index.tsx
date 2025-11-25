import { Href, useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Pattern = {
  id: string;
  label: string;
  title: string;
  summary: string;
  route: string;
  stats?: string;
};

const PATTERNS: Pattern[] = [
  {
    id: "component-composition",
    label: "Featured Track",
    title: "Component Composition",
    summary: "Diagnose anti-patterns, then refactor with confidence.",
    route: "/component-composition",
  },
  {
    id: "presentational-component",
    label: "Featured Track",
    title: "Presentational Component",
    summary: "Best practices for managing state in React Native apps.",
    route: "/presentational-component",
  },
];

const PatternCard = ({ pattern }: { pattern: Pattern }) => {
  const router = useRouter();
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(pattern.route as Href)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardLabel}>{pattern.label}</Text>
        <Text style={styles.cardTitle}>{pattern.title}</Text>
        <Text style={styles.cardCopy}>{pattern.summary}</Text>
        {pattern.stats ? (
          <Text style={styles.cardStats}>{pattern.stats}</Text>
        ) : null}
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardAction}>{"Open"}</Text>
      </View>
    </Pressable>
  );
};

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={PATTERNS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PatternCard pattern={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>Design Pattern Hub</Text>
            <Text style={styles.title}>Level up your RN architecture.</Text>
            <Text style={styles.subtitle}>
              Quick playbooks to spot bad patterns and apply better composition.
            </Text>
          </View>
        }
        ListHeaderComponentStyle={styles.headerSpacing}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020617",
  },
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
    gap: 24,
  },
  hero: {
    gap: 12,
  },
  headerSpacing: {
    marginBottom: 16,
  },
  eyebrow: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    color: "#f8fafc",
    fontWeight: "700",
  },
  subtitle: {
    color: "#cbd5f5",
    fontSize: 15,
    lineHeight: 22,
  },
  separator: {
    height: 16,
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.35,
    shadowRadius: 28,
    elevation: 5,
  },
  cardHeader: {
    padding: 20,
    gap: 8,
  },
  cardLabel: {
    color: "#7dd3fc",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  cardTitle: {
    color: "#f8fafc",
    fontSize: 20,
    fontWeight: "600",
  },
  cardCopy: {
    color: "#cbd5f5",
    fontSize: 14,
    lineHeight: 20,
  },
  cardStats: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderColor: "rgba(148,163,184,0.2)",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  cardAction: {
    color: "#38bdf8",
    fontWeight: "700",
    fontSize: 14,
  },
});
