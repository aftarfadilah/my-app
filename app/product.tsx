import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Product() {
  const router = useRouter();

  return (
    <View>
      <Text>Product</Text>
      <Button
        title="Go to About"
        onPress={() => router.push("/about")}
      />
      <Button
        title="Product 1"
        onPress={() => router.push('/detailproduct/1')}
      />
      <Button
        title="Product 2"
        onPress={() => router.push('/detailproduct/2')}
      />
    </View>
  );
}
