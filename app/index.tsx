import "./global.css"
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList data={} 
      renderItem={({ item }) => ()} 
      />

    </SafeAreaView>
  );
}