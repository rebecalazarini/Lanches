import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text, View, Button } from "react-native";

export default function Index() {
   const { nome } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{nome}</Text>
    </View>
  );
}
