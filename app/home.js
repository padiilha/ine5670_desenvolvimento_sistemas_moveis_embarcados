import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ParqueItem from "../components/ParqueItem";
import ParqueFavorito from "../components/ParqueFavorito";

const parqueDetalhes = require("../data/parques.json");

const Home = () => {
  const router = useRouter();
  const [fetchedIds, setFetchedIds] = useState();

  const handleCardPress = (item) => {
    router.push(`/parqueDetalhe/${item.id}`);
  };

  const getParques = parqueDetalhes
    .slice()
    .sort((a, b) => a.nome.localeCompare(b.nome));

  useEffect(() => {
    getFavoritos();
  }, []);

  const getFavoritos = async () => {
    try {
      const ids = await AsyncStorage.getAllKeys();
      setFetchedIds(ids);
    } catch (error) {
      console.error("Erro ao retornar os ids:", error);
    }
  };

  const saveFavorito = async (id) => {
    try {
      await AsyncStorage.setItem(JSON.stringify(id), JSON.stringify(id));
      getFavoritos();
    } catch (error) {
      console.error("Erro ao guardar id:");
    }
  };

  const removeFavorito = async (id) => {
    try {
      await AsyncStorage.removeItem(JSON.stringify(id));
      getFavoritos();
    } catch (error) {
      console.error("Erro ao remover id:");
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#0069D0",
          },
          contentStyle: {
            backgroundColor: "white",
            padding: 16,
            paddingTop: 0,
          },
        }}
      />
      <View style={{ marginTop: 32, gap: 16 }}>
        <Text style={{ fontSize: 32 }}>Lista de Parques</Text>
        <FlatList
          data={getParques}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <ParqueItem
              parque={item}
              handleCardPress={handleCardPress}
              saveFavorito={saveFavorito}
              removeFavorito={removeFavorito}
              fetchedIds={fetchedIds}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
