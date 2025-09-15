import { offers } from "@/constants";
import "./global.css"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fragment } from "react";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList data={offers} 
      renderItem={({ item, index }) => {
        return (
          <View>
            <Pressable
              className="offer-card"
              style={{ backgroundColor: item.color }}
            >
              {({ pressed }) => (
                <Fragment>
                  <View className={"h-full w-1/2"}>
                    <Image
                      source={item.image}
                      className={"size-full"}
                      resizeMode={"contain"}
                    />
                  </View>

                
                </Fragment>
              )}
            </Pressable>
          </View>
        );
      }} 
      />

    </SafeAreaView>
  );
}