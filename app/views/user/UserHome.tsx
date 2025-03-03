import TicketCardUser from "@/app/components/user/TicketCardUser";
import { Ticket } from "@/app/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

const API = "https://67c4a4fcc4649b9551b4358e.mockapi.io/ticket";

export default function UserHome() {
  const [tickets, setTicket] = useState<Ticket[]>([]);

  const getTicket = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTicket(data);
    } catch (error) {
      console.error("Error obteniendo ticket:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getTicket();
    }, [])
  );

  return (
    <View className="flex-1 p-3 bg-black">
      <Text className="text-4xl font-bold text-white mb-4">Eventos</Text>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TicketCardUser ticket={item} />}
        className="px-6"
      />
    </View>
  );
}

