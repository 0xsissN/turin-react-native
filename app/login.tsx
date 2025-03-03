import { useRouter } from "expo-router";
import { useState } from "react";
import users from "../assets/bd/users.json";
import { Alert, Button, TextInput, View } from "react-native";

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
    <View className="flex-1 justify-center p-5">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <Button title="Iniciar Sesión" onPress={admLogin} />
    </View>
  );
}

export default Login;
