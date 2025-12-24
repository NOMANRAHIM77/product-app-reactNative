import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  item: Product;
  onPress: () => void;
};

export default function ProductCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563eb",
  },
});
