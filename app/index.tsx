import { router } from "expo-router";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { posts } from "../assets/mockups/posts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecd3feff",
  },
  list: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  item: {
    padding: 20,
    margin: 6,
    backgroundColor: "#e09df9ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#530e8fff",
  },
  text: {
    fontSize: 14,
    color: "#000000ff",
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
      data={posts}
      renderItem={({ item }) => (
        <TouchableOpacity 
        style={styles.item} 
        onPress={() => irDetalhes(item.id)}
        >
          <Text style={styles.titulo}>Título: {item.title}</Text>
          <Text style={styles.text}>Conteúdo: {item.content}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);
}
