import { Stack, useRouter } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Welcome = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.mainContainer(height)}>
        <View style={styles.welcomeContainer(width)}>
          <Text style={styles.welcomeText}>Bem vindo!</Text>
        </View>
        <TouchableOpacity onPress={() => router.push(`/home`)}>
          <FontAwesome5 name="arrow-right" size={20} color="black" solid />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: (height) => ({
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-between",
    height: height,
    paddingTop: 700,
    paddingBottom: 120,
  }),
  welcomeContainer: (width) => ({
    alignItems: "center",
    width: width,
  }),
  welcomeText: {
    fontSize: 24,
  },
});

export default Welcome;
