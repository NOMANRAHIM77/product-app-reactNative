import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetails() {
  const { title, image, price, description } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image as string }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { height: 250, resizeMode: "contain", marginBottom: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  price: { fontSize: 16, color: "#2563eb", marginBottom: 12 },
  description: { fontSize: 14, lineHeight: 20 },
});
