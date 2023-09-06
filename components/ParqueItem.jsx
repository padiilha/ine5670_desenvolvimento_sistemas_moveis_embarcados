import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ParqueItem = ({
  parque,
  handleCardPress,
  saveFavorito,
  removeFavorito,
  fetchedIds,
}) => {
  const isFavorito = fetchedIds?.includes(JSON.stringify(parque.id));

  const handleFavoriteClick = () => {
    if (isFavorito) {
      removeFavorito(parque.id);
    } else {
      saveFavorito(parque.id);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => handleCardPress(parque)}
        style={styles.itemParque}
      >
        <Text style={styles.nomeParque}>{parque?.nome}</Text>
        <Text style={styles.localParque}>
          {parque.cidade}, {parque.uf}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: "absolute", right: 0 }}
        onPress={() => handleFavoriteClick()}
      >
        <FontAwesome5
          name="star"
          size={16}
          color={isFavorito ? "orange" : "gray"}
          solid
        />
      </TouchableOpacity>
    </>
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

export default ParqueItem;
