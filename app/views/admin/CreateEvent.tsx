import { Singleton } from "@/app/patterns/Singleton";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const single = Singleton.getInstance();

export default function CreateEvent() {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const createTicket = async () => {
    if (
      !eventName.trim() ||
      !date.trim() ||
      !price.trim() ||
      !description.trim()
    ) {
      alert("Error creando evento");
      return;
    }

    const new_ticket = {
      event_name: eventName,
      date,
      price: price || "Gratis",
      imageUrl: imageUrl,
      description,
    };

    try {
      await fetch(single.API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_ticket),
      });
      router.back();
    } catch (error) {
      console.error("Error creando evento:", error);
    }
  };

  return (
    <ScrollView className="p-4 bg-black">
      <Text className="text-2x1 font-bold text-white mb-6 text-lg">
        Crear Evento
      </Text>
      <TextInput
        placeholder="Nombre del evento"
        placeholderTextColor="#999"
        value={eventName}
        onChangeText={setEventName}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Fecha (DD/MM/YYYY)"
        placeholderTextColor="#999"
        value={date}
        onChangeText={setDate}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Precio"
        placeholderTextColor="#999"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="URL de Imagen"
        placeholderTextColor="#999"
        value={imageUrl}
        onChangeText={setImageUrl}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />
      <TextInput
        placeholder="Descripción"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        className="bg-gray-800 p-3 rounded-lg text-white mb-4"
      />

      <TouchableOpacity
        onPress={createTicket}
        className="bg-purple-600 py-3 rounded-lg items-center"
      >
        <Text className="text-white font-bold text-lg">Guardar Evento</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-6 bg-gray-700 py-3 rounded-lg items-center"
        onPress={() => router.push("./AdminHome")}
      >
        <Text className="text-white font-bold text-lg">Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
