import { Logger, Stadistics } from "@/app/patterns/Observer";
import { GeneratorTicket } from "@/app/services/GeneratorTicket";
import { useStadistics } from "@/app/StadisticsContext";
import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function BuyTickets() {
  const [ticket, setTicket] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

    const stats = useStadistics()

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
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Comprar Ticket</Text>
      <View className="space-y-2">
        <Button
          title="Comprar Ticket VIP ($100)"
          onPress={() => handleTicket("VIP")}
        />
        <Button
          title="Comprar Ticket General ($50)"
          onPress={() => handleTicket("GENERAL")}
        />
      </View>

      {ticket && (
        <View className="mt-4">
          <Text className="text-lg font-bold">Ticket Comprado:</Text>
          <Text>{ticket}</Text>
        </View>
      )}

      <View className="mt-4">
        <Text className="text-lg font-bold">Logs:</Text>
        {logs.map((log, index) => (
          <Text key={index} className="text-sm">
            {log}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
