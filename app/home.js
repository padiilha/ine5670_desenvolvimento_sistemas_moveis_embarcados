import { Stack, useRouter } from "expo-router";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const detalhesParque = require("../data/parkDetails.json");

const Home = () => {
  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/ParkDetails/${item.id}`);
  };

  const getParques = detalhesParque
    .slice()
    .sort((a, b) => a.nome.localeCompare(b.nome));

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("parkDetails", { themePark: item })}
      style={styles.itemParque}
    >
      <Text style={styles.nomeParque}>{item.nome}</Text>
      <Text style={styles.localParque}>
        {item.cidade}, {item.uf}
      </Text>
    </TouchableOpacity>
  );

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
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nomeParque: {
    fontSize: 24,
  },
  localParque: {
    fontSize: 16,
  },
  itemParque: {
    paddingVertical: 8,
  },
});

export default Home;
