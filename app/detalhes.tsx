import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text, View, StyleSheet, Image } from "react-native";
import { posts } from "../assets/mockups/posts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecd3feff",
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
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default function Index() {
   const { id } = useLocalSearchParams();

   let indice = posts.findIndex(post => post.id === Number(id));
  
   return (
    <View
        style={styles.container}
    >
      <Text style={styles.titulo}>{posts[indice].title}</Text>
      <Text style={styles.text}>{posts[indice].content}</Text>
      <Image source={{ uri: posts[indice].image }} style={styles.imagem} />
    </View>
  );
}
