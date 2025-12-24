// app/_layout.tsx
import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";
import { ApiProvider } from "../contexts/ApiContext";
import ThemeProvider from "../contexts/ThemeContext";

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ApiProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ApiProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
