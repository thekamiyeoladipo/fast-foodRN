import "./global.css"
import { Text, View } from "react-native";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-dark-100">
      <Text className="font-quicksand-bold text-5xl font-bold text-blue-500">
        Fast Food!
      </Text>
    </View>
  );
}