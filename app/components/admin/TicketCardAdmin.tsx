import { Image, Text, TouchableOpacity, View } from "react-native";
import { TicketAdmin } from "../../types";

export default function TicketCardAdmin({ ticket, onDelete }: TicketAdmin) {
  return (
    <View className="bg-white rounded-2x1 shadow-lg my-2">
      <Image
        source={require("../../../assets/images/profile.png")}
        style={{ width: "100%", height: "100%" }}
      />

      <View className="mt-4 mb-4">
        <Text className="text-lg font-bold mt-2 text-white">
          {ticket.event_name}
        </Text>
        <Text className="text-white">{ticket.date}</Text>
        <Text className="text-white font-semibold">{ticket.price}</Text>
        <Text className="text-white">{ticket.description}</Text>
      </View>

      <TouchableOpacity
        onPress={() => onDelete(ticket.id)}
        className="bg-red-500 px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}
