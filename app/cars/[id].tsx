import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import database from "../../services/fakeDatabase";

export default function car() {
  const params = useGlobalSearchParams();

  const id = parseInt(params.id as string);

  const car = database.find(id);

  return (
    <View>
      <Text>{car.id}</Text>
      <Text>{car.make}</Text>
      <Text>{car.model}</Text>
      <Text>{car.year}</Text>
    </View>
  );
}
