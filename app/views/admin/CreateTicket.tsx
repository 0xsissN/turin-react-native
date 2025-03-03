import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const API = "https://67c4a4fcc4649b9551b4358e.mockapi.io/ticket";

export default function CreateTicket() {
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
      alert("Error creando ticket");
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
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_ticket),
      });
      router.back();
    } catch (error) {
      console.error("Error creando ticket:", error);
    }
  };

  return (
    <View>
      <Text className="text-lg font-bold">Crear Ticket</Text>
      <TextInput
        placeholder="Nombre del evento"
        value={eventName}
        onChangeText={setEventName}
        className="border p-2 my-2"
      />
      <TextInput
        placeholder="Fecha"
        value={date}
        onChangeText={setDate}
        className="border p-2 my-2"
      />
      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        className="border p-2 my-2"
      />
      <TextInput
        placeholder="URL de Imagen"
        value={imageUrl}
        onChangeText={setImageUrl}
        className="border p-2 my-2"
      />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        className="border p-2 my-2"
      />

      <TouchableOpacity
        onPress={createTicket}
        className="bg-green-500 p-3 rounded-lg mt-4"
      >
        <Text className="text-white text-center">Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

