import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserDetail() {
  const { productId } = useLocalSearchParams();
  
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Product ID: {productId}</Text>
    </View>
  );
}
