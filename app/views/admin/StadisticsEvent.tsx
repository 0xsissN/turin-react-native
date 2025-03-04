import { Stadistics } from "@/app/patterns/Observer";
import { useStadistics } from "@/app/StadisticsContext";
import { Text, View } from "react-native";

export default function StadisticsEvent() {
  const stats = useStadistics();

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Estadísticas de Tickets</Text>
      <View className="mt-4">
        <Text className="text-lg font-bold">Total Tickets Vendidos:</Text>
        <Text>{stats.getTotalTickets()}</Text>
      </View>
      <View className="mt-4">
        <Text className="text-lg font-bold">Detalles:</Text>
        {stats.getTicketsSells().map((ticket, index) => (
          <Text key={index} className="text-sm">
            {ticket.details()}
          </Text>
        ))}
      </View>
    </View>
  );
}
