import { Singleton } from "@/app/patterns/Singleton";
import { Event } from "@/app/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const single = Singleton.getInstance();

export default function EditEvent() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const route = useRouter();

  const [event, setEvent] = useState<Event>({
    event_name: "",
    date: "",
    price: "",
    image_url: "",
    description: "",
    id: 0,
  });

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await fetch(`${single.API}/${id}`);
        const data = await res.json();
        setEvent(data);
      } catch (error) {
        console.error("Error obteniendo evento:", error);
      }
    };

    getEvent();
  }, [id]);

  const save = async () => {
    try {
      const res = await fetch(`${single.API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      if (res.ok) {
        Alert.alert("Éxito", "Evento actualizado correctamente");
        route.push("../AdminHome");
      } else {
        Alert.alert("Error", "No se pudo actualizar el evento");
      }
    } catch (error) {
      console.error("Error actualizando evento:", error);
      Alert.alert("Error", "Ocurrió un error al actualizar el evento");
    }
  };

  return (
    <ScrollView className="p-4 bg-black">
      <Text className="text-2x1 font-bold text-white mb-6 text-lg">
        Editar Evento
      </Text>
      <TextInput
        placeholder="Nombre del evento"
        placeholderTextColor="#999"
        value={event.event_name}
        onChangeText={(text) => setEvent({ ...event, event_name: text })}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Fecha (DD/MM/YYYY)"
        placeholderTextColor="#999"
        value={event.date}
        onChangeText={(text) => setEvent({ ...event, date: text })}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Precio"
        placeholderTextColor="#999"
        value={event.price}
        onChangeText={(text) => setEvent({ ...event, price: text })}
        keyboardType="numeric"
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="URL de Imagen"
        placeholderTextColor="#999"
        value={event.image_url}
        onChangeText={(text) => setEvent({ ...event, image_url: text })}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Descripción"
        placeholderTextColor="#999"
        value={event.description}
        onChangeText={(text) => setEvent({ ...event, description: text })}
        multiline
        numberOfLines={4}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />

      <TouchableOpacity
        onPress={save}
        className="bg-purple-600 py-3 rounded-lg items-center"
      >
        <Text className="text-white font-bold text-lg">Guardar Cambios</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-6 bg-gray-700 py-3 rounded-lg items-center"
        onPress={() => route.push("../AdminHome")}
      >
        <Text className="text-white font-bold text-lg">Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
