import { Stack } from "expo-router";
import "../global.css";
import { StadisticsProvider } from "./StadisticsContext";

export default function RootLayout() {
  return (
    <StadisticsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Inicio" }} />
        <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
        <Stack.Screen name="user/UserHome" options={{ title: "Usuario" }} />
        <Stack.Screen name="admin/AdminHome" options={{ title: "Admin" }} />
      </Stack>
    </StadisticsProvider>
  );
}
