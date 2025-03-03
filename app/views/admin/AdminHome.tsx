import TicketCardAdmin from "@/app/components/admin/TicketCardAdmin";
import { Ticket } from "@/app/types";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

const API = "https://67c4a4fcc4649b9551b4358e.mockapi.io/ticket";

export default function AdminHome() {
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

  const deleteTicket = async (id: number) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setTicket(tickets.filter((ticket) => ticket.id !== id));
    } catch (error) {
      console.error("Error eliminando ticket:", error);
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
      <Link
        href={"/views/admin/CreateTicket"}
        className="bg-green-500 p-3 rounded-lg mb-4"
      >
        <Text className="text-white text-center">Agregar Ticket</Text>
      </Link>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TicketCardAdmin ticket={item} onDelete={deleteTicket} />
        )}
        scrollEnabled={false}
        className="px-6"
      />
    </View>
  );
}
