import { EventUser } from "@/app/types";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function EventCardUser({ event }: EventUser) {
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
        <Link href={"../../views/user/BuyTickets"}>
          <Text className="text-white">Comprar</Text>
        </Link>
      </View>
    </View>
  );
}
