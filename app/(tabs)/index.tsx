import { View, FlatList, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
import Loader from "../../components/Loader";

export default function HomeScreen() {
  const { products, fetchProducts, refreshing } = useContext(ApiContext);
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Fetch products immediately
  useEffect(() => {
    fetchProducts(true);
  }, []);

  if (refreshing && products.length === 0) {
    return <Loader />;
  }

  const filteredProducts = products.filter((item: any) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: {
                  id: item.id.toString(),
                  title: item.title,
                  image: item.image,
                  price: item.price.toString(),
                  description: item.description,
                },
              })
            }
          />
        )}
        onRefresh={() => fetchProducts(true)}
        refreshing={refreshing}
        onEndReached={() => fetchProducts()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
