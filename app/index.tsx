import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee9d3ff",
  },
  list: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  item: {
    padding: 20,
    margin: 6,
    backgroundColor: "#ff863bff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
  },
  text: {
    fontSize: 14,
    color: "#222222ff",
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default function Index() {

  function irDetalhes(id: number) {
    router.push(`/detalhes?id=${id}`);
  }
  return (
    <View
      style={styles.container}
    >
      <FlatList
      style={styles.list}
      data={lanches}
      renderItem={({ item }) => (
        <TouchableOpacity 
        style={styles.item} 
        onPress={() => irDetalhes(item.id)}
        >
          <Text style={styles.nome}>Nome: {item.nome}</Text>
          <Text style={styles.text}>Ingredientes: {item.ingredientes.join(", ")}</Text>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
        </TouchableOpacity>
      )}
    />
  </View>
);
}
