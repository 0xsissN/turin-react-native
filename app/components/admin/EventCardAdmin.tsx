import { Image, Text, TouchableOpacity, View } from "react-native";
import { EventAdmin } from "../../types";
import { useRouter } from "expo-router";

export default function EventCardAdmin({ event, onDelete }: EventAdmin) {
  const route = useRouter();
  return (
    <View className="bg-gray rounded-2x1 shadow-lg overflow-hidden shadow-purple-500/50 my-3">
      <Image
        source={require("../../../assets/images/profile.png")}
        className="w-full h-48"
        resizeMode="cover"
      />

      <View className="p-4">
        <Text className="text-xl font-bold mb-2 text-white">
          {event.event_name}
        </Text>
        <Text className="text-gray-400 text-sm mb-1">{event.date}</Text>
        <Text className="text-purple-400 font-bold text-lg mb-2">
          {event.price}
        </Text>
        <Text className="text-gray-300 text-sm mb-4">{event.description}</Text>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity
          className="bg-blue-500 py-2 px-4 rounded-lg flex-1 mr-2 items-center justify-center"
          onPress={() => route.push(`./EditEvent/${event.id}`)}
        >
          <Text className="text-white font-bold">Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 py-2 px-4 rounded-lg flex-1 mr-2 items-center justify-center"
          onPress={() => onDelete(event.id)}
        >
          <Text className="text-white font-bold">Elimirar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
