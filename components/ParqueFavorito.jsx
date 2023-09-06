import { Text, View } from "react-native";
import ParqueItem from "./ParqueItem";

const ParqueFavorito = ({
  getParques,
  handleCardPress,
  saveFavorito,
  removeFavorito,
  fetchedIds,
}) => {
  return (
    <View>
      {fetchedIds?.length === 0 ? (
        <View>
          <Text style={{ color: "#8c8d8e" }}>Nenhum parque favoritado</Text>
        </View>
      ) : (
        fetchedIds?.map((id) => {
          const matchingParks = getParques.filter(
            (item) => item.id === parseInt(id)
          );

          const sortedMatchingParks = matchingParks.sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          return sortedMatchingParks.map((item) => (
            <ParqueItem
              parque={item.id}
              handleCardPress={handleCardPress}
              saveFavorito={saveFavorito}
              removeFavorito={removeFavorito}
              fetchedIds={fetchedIds}
            />
          ));
        })
      )}
    </View>
  );
};

export default ParqueFavorito;
