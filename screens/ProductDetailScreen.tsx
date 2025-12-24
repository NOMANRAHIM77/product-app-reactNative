// src/screens/ProductDetailScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

export default function ProductDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View>
      <Image source={{ uri: item.image }} style={{ height: 200 }} />
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}
