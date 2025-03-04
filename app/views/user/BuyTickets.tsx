import { Logger, Stadistics } from "@/app/patterns/Observer";
import { GeneratorTicket } from "@/app/services/GeneratorTicket";
import { useStadistics } from "@/app/StadisticsContext";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function BuyTickets() {
  const [ticket, setTicket] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const router = useRouter();

  const stats = useStadistics();

  const generator = new GeneratorTicket();
  generator.addObserver(new Logger());
  generator.addObserver(stats);

  const handleTicket = (type: string) => {
    const new_ticket = generator.createTicket(type);
    setTicket(new_ticket.details());
    setLogs((prevLogs) => [
      ...prevLogs,
      `Nuevo ticket comprado: ${new_ticket.details()}`,
    ]);
  };

  return (
    <ScrollView className="p-4 bg-black">
      <Text className="text-2xl font-bold text-white mb-6">Comprar Ticket</Text>
      <View className="space-y-4">
        <TouchableOpacity
          className="bg-purple-600 py-3 rounded-lg items-center mb-4"
          onPress={() => handleTicket("VIP")}
        >
          <Text className="text-white font-bold text-lg">
            Comprar Ticket VIP (Bs100)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-purple-600 py-3 rounded-lg items-center"
          onPress={() => handleTicket("GENERAL")}
        >
          <Text className="text-white font-bold text-lg">
            Comprar Ticket General (Bs50)
          </Text>
        </TouchableOpacity>
      </View>

      {ticket && (
        <View className="mt-6 p-4 bg-gray-800 rounded-lg">
          <Text className="text-lg font-bold text-white">Ticket Comprado:</Text>
          <Text className="text-purple-400 font-semibold mt-1">{ticket}</Text>
        </View>
      )}

      <View className="mt-6">
        <Text className="text-lg font-bold text-white mb-2">Logs:</Text>
        <View className="bg-gray-800 p-4 rounded-lg">
          {logs.map((log, index) => (
            <Text key={index} className="text-sm text-gray-300">
              {log}
            </Text>
          ))}
        </View>
      </View>

      <TouchableOpacity
        className="mt-6 bg-gray-700 py-3 rounded-lg items-center"
        onPress={() => router.push("./UserHome")}
      >
        <Text className="text-white font-bold text-lg">Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
