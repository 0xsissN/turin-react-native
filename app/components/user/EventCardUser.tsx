import { EventUser } from "@/app/types";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function EventCardUser({ event }: EventUser) {
  const route = useRouter();

  const handleTicket = () => {
    route.push({
      pathname: "../../views/user/BuyTickets",
      params: { event: JSON.stringify(event) },
    });
  };

  return (
    <View className="bg-gray rounded-2x1 shadow-lg overflow-hidden shadow-purple-500/50 my-3">
      <Image
        source={
          event.image_url
            ? { uri: event.image_url }
            : require("../../../assets/images/background_profile.png")
        }
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
        <TouchableOpacity
          className="bg-purple-600 py-1 rounded-lg items-center"
          onPress={handleTicket}
        >
          <Text className="text-white font-bold text-lg p-2">Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
