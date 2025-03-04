import EventCardAdmin from "@/app/components/admin/EventCardAdmin";
import { Event } from "@/app/types";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

const API = "https://67c4a4fcc4649b9551b4358e.mockapi.io/ticket";

export default function AdminHome() {
  const [events, setEvent] = useState<Event[]>([]);

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
    <View className="flex-1 p-3 bg-black">
      <Text className="text-4xl font-bold text-white mb-4">Eventos</Text>
      <Link href={"./CreateEvent"} className="bg-green-500 p-3 rounded-lg mb-4">
        <Text className="text-white text-center">Agregar Evento</Text>
      </Link>
      <Link
        href={"./StadisticsEvent"}
        className="bg-green-500 p-3 rounded-lg mb-4"
      >
        <Text className="text-white text-center">Stats</Text>
      </Link>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCardAdmin event={item} onDelete={deleteEvent} />
        )}
        scrollEnabled={false}
        className="px-6"
      />
    </View>
  );
}
