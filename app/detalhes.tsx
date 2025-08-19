import { useLocalSearchParams } from "expo-router/build/hooks";
import { Image, StyleSheet, Text, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee9d3ff",
  },
    nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
  },
  text: {
    fontSize: 14,
    color: "#000000ff",
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default function Index() {
   const { id } = useLocalSearchParams();

   let indice = lanches.findIndex(lanche => lanche.id === Number(id));

   return (
    <View
        style={styles.container}
    >
      <Text style={styles.nome}>{lanches[indice].nome}</Text>
      <Text style={styles.text}>{lanches[indice].ingredientes.join(", ")}</Text>
      <Image source={{ uri: lanches[indice].imagem }} style={styles.imagem} />
      <Text style={styles.text}>Preço: R$ {lanches[indice].preco.toFixed(2)}</Text>
      
    </View>
  );
}
