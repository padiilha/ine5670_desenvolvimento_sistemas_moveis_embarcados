import { Stack, useSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const parqueDetalhes = require("../../data/parques.json");

const ParqueDetalhe = () => {
  const params = useSearchParams();
  const [parque, setParque] = useState();

  const parqueDados = parqueDetalhes.filter(
    (parqueDados) => parqueDados.id.toString() === params.id
  );

  useEffect(() => {
    async function loadParque() {
      const parque = await parqueDados[0];
      setParque(parque);
    }
    loadParque();
  }, []);

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
      <ScrollView>
        {/* <View>
          <Text>{parque.nome}</Text>
          <Text>
            {parque.cidade}, {parque.uf}
          </Text>
        </View>
        <View>
          <Text>Site do parque: {parque.site}</Text>
          <Text>Instagram: {parque.instagram}</Text>
          <Text>Comprar ingresso: </Text>
        </View>
        <View>
          <Text>Vídeo: {parque.video}</Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParqueDetalhe;
