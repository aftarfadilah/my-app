import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export const BOOKS = [
  {
    id: 1,
    title: "Jujutsu Kaisen 13",
    description: "Dagon berubah menjadi jurei yang menakutkan! Serangan energi kutukan yang tak ada habisnya pun membanjiri Naobito, Maki, dan Nanami. Di sisi lain, sekelompok jusoshi yang mengabdikan diri pada Geto berusaha untuk mendapatkan kembali tubuh Geto dengan membangkitkan sosok yang paling keji",
    cover: "https://panel.togamas.com/uploads/product/f22b533f218e242a6b2569d94e563408.jpg",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen 09",
    description: "Misi Gojo dan Geto untuk melindungi wadah plasma bintang berubah menjadi buruk saat seorang pembunuh shaman yang mengaku bernama Fushiguro menyerang mereka secara tiba-tiba . Apa hasil akhir dari kejadian di masa lalu tersebut, yang membuat Gojo menjadi yang terkuat dan membuat Geto memberontak!?",
    cover: "https://panel.togamas.com/uploads/product/2bc0ea7d1e86e2a5ec5ffd8749ddb2da.jpg",
  },
];

export default function Books() {
  return (
    <ScrollView>
      {BOOKS.map((book) => (
        <View key={book.id} style={{ padding: 20 }}>
          <Image
            source={{ uri: book.cover }}
            style={{ width: 100, height: 150 }}
          />
          <Text>{book.title}</Text>
          <Text>{book.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
