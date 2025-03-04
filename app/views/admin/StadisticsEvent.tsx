import { useStadistics } from "@/app/StadisticsContext";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function StadisticsEvent() {
  const stats = useStadistics();
  const router = useRouter();

  return (
    <ScrollView className="p-4 bg-black">
      <Text className="text-2xl font-bold mb-6 text-white">
        Estadísticas de Tickets
      </Text>
      <View className="bg-gray-800 p-4 rounded-lg mb-6">
        <Text className="text-lg font-bold text-white">
          Total Tickets Vendidos:
        </Text>
        <Text className="text-purple-400 text-3x1 font-bold mt-2">
          {stats.getTotalTickets()}
        </Text>
      </View>
      <View className="bg-gray-800 p-4 rounded-lg">
        <Text className="text-lg font-bold text-white mb-4">Detalles:</Text>
        {stats.getTicketsSells().map((ticket, index) => (
          <Text key={index} className="mb-3">
            <Text className="text-sm text-gray-300"> {ticket.details()}</Text>
          </Text>
        ))}
      </View>
      <TouchableOpacity
        className="mt-6 bg-gray-700 py-3 rounded-lg items-center"
        onPress={() => router.push("./AdminHome")}
      >
        <Text className="text-white font-bold text-lg">Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
