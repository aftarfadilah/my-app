import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserPost() {
  const { userId, postId } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>User ID: {userId}</Text>
      <Text>Post ID: {postId}</Text>
    </View>
  );
}

