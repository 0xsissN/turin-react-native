import { EventUser } from "@/app/types";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function EventCardUser({ event }: EventUser) {
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
        <Link href={"../../views/user/BuyTickets"} asChild>
          <TouchableOpacity className="bg-purple-600 py-1 rounded-lg items-center">
            <Text className="text-white font-bold text-lg p-2">Comprar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
