import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import database from "../services/fakeDatabase";

export default function List() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const cars = database.all();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>List</Text>

        <Link href="/">
          <Text style={{ color: "blue" }}>Link to Index</Text>
        </Link>

        <Button title="Back to Index" onPress={handleBack} />

        {cars.map((car) => (
          <Link
            key={car.id}
            // href={"/cars/" + car.id}
            href={{
              pathname: "/cars/[id]", // ex: /cars/29
              params: {
                id: car.id,
              },
            }}
            style={{ marginTop: 16 }}
          >
            <View>
              <Text>{car.id}</Text>
              <Text>{car.make}</Text>
              <Text>{car.model}</Text>
              <Text>{car.year}</Text>
            </View>
          </Link>
        ))}

        <StatusBar style="auto" />
      </ScrollView>
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
