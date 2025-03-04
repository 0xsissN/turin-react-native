import EventCardAdmin from "@/app/components/admin/EventCardAdmin";
import { Event } from "@/app/types";
import { Link, useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const API = "https://67c4a4fcc4649b9551b4358e.mockapi.io/event";

export default function AdminHome() {
  const [events, setEvent] = useState<Event[]>([]);
  const route = useRouter();

  const getEvent = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setEvent(data);
    } catch (error) {
      console.error("Error obteniendo evento:", error);
    }
  };

  const deleteEvent = async (id: number) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setEvent(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error eliminando evento:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getEvent();
    }, [])
  );

  return (
    <View className="flex-1 p-4 bg-black">
      <Text className="text-4xl font-bold text-white mb-8">Eventos</Text>
      <TouchableOpacity
        className="bg-purple-600 py-3 rounded-lg mb-4 items-center shadow-lg shadow-purple-500/50"
        onPress={() => route.push("./CreateEvent")}
      >
        <Text className="text-white font-bold text-lg">Agregar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-purple-600 py-3 rounded-lg mb-4 items-center shadow-lg shadow-purple-500/50"
        onPress={() => route.push("./StadisticsEvent")}
      >
        <Text className="text-white font-bold text-lg">Estadisticas</Text>
      </TouchableOpacity>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCardAdmin event={item} onDelete={deleteEvent} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
