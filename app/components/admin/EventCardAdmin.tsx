import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { EventAdmin } from "../../types";
import { Link } from "expo-router";

export default function EventCardAdmin({ event, onDelete }: EventAdmin) {
  return (
    <View className="bg-white rounded-2x1 shadow-lg my-2">
      <Image
        source={require("../../../assets/images/profile.png")}
        style={{ width: "100%", height: "100%" }}
      />

      <View className="mt-4 mb-4">
        <Text className="text-lg font-bold mt-2 text-white">
          {event.event_name}
        </Text>
        <Text className="text-white">{event.date}</Text>
        <Text className="text-white font-semibold">{event.price}</Text>
        <Text className="text-white">{event.description}</Text>
      </View>

      <View className="flex-row justify-between mt-4">
        <Link href={`./EditEvent/${event.id}`} asChild>
          <Button title="Editar" color="#3b82f6" />
        </Link>
        <Button title="Eliminar" color="#ef4444" onPress={() => onDelete(event.id)} />
      </View>
    </View>
  );
}
