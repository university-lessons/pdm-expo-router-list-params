import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleGoToList = () => {
    router.push("/list");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome Page (Index)</Text>

      <Link href="/list">
        <Text style={{ color: "blue" }}>Link to List</Text>
      </Link>

      <Button title="Go to List" onPress={handleGoToList} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
