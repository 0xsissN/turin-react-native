import { useRouter } from "expo-router";
import { useState } from "react";
import users from "../assets/bd/users.json";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const admLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      if (user.role === "user") {
        router.push("/views/user/UserHome");
      } else if (user.role === "admin") {
        router.push("/views/admin/AdminHome");
      }
    } else {
      Alert.alert("Error", "Credenciales incorrectas");
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-black">
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        className="mb-4 p-3 border border-gray-700 rounded-lg text-white bg-gray-800"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-6 p-3 border border-gray-700 rounded-lg text-white bg-gray-800"
      />
      <TouchableOpacity
        onPress={admLogin}
        className="bg-purple-600 py-3 rounded-lg items-center"
      >
        <Text className="text-white font-bold">Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
