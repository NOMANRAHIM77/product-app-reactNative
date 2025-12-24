// src/screens/ProductListScreen.js
import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { ApiContext } from "../contexts/ApiContext";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts } = useContext(ApiContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts(true);
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Search..."
        onChangeText={setQuery}
        style={{ padding: 10 }}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate("Details", { item })}
          />
        )}
        onEndReached={() => fetchProducts()}
        refreshing={false}
        onRefresh={() => fetchProducts(true)}
      />
    </View>
  );
}
