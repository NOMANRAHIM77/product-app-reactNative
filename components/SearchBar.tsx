import { View, TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search products..."
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
});
