import EventCardUser from "@/app/components/user/EventCardUser";
import { Singleton } from "@/app/patterns/Singleton";
import { Event } from "@/app/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

const single = Singleton.getInstance()

export default function UserHome() {
  const [events, setEvent] = useState<Event[]>([]);

  const getEvent = async () => {
    try {
      const res = await fetch(single.API);
      const data = await res.json();
      setEvent(data);
    } catch (error) {
      console.error("Error obteniendo evento:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getEvent();
    }, [])
  );

  return (
    <View className="flex-1 p-5 bg-black">
      <Text className="text-4xl font-bold text-white mb-6">Eventos</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCardUser event={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
