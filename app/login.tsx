import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "expo-router";
import Loader from "../components/Loader";

export default function LoginScreen() {
  const { token, login, loading } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [submitting, setSubmitting] = useState(false);

  // Redirect to home if already logged in
  useEffect(() => {
    if (!loading && token) {
      router.replace("/"); // go to home
    }
  }, [token, loading]);

  const handleLogin = async () => {
    setSubmitting(true);
    await login(email, password); // login from AuthContext
    setSubmitting(false);

    // if login success, token will be set and useEffect above will redirect
  };

  // Show loader while auth context is loading or login in progress
  if (loading || submitting) return <Loader />;

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 12 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 20 }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={submitting}
        style={{
          backgroundColor: "#2563eb",
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontSize: 16 }}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
