import { View, Text, Button, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export const DATA = [
  {
    id: 1,
    nama: "Kwetiau goreng Seafood",
    desk:"Resep kwetiau goreng a la restoran yang mudah dibuat. Simak juga tips cara memasak kwetiau agar tidak mudah hancur dan seafoodnya tidak amis.",
    photo:"https://www.masakapahariini.com/wp-content/uploads/2020/09/kwetiau-goreng-seafood-500x300.jpg"
  },
  {
    id: 2,
    nama: "Ayam Goreng Kalasan",
    desk:"Saatnya bikin ayam goreng Kalasan untuk menu spesial minggu ini. Jangan lupa diamkan daging ayam ungkep selama beberapa jam atau bahkan semalaman supaya bumbunya lebih meresap dan mantap.",
    photo:"https://www.masakapahariini.com/wp-content/uploads/2024/07/Resep-Ayam-Goreng-Kalasan-500x300.jpg"

  },
  {
    id: 3,
    nama: "Semur Daging",
    desk:"Mengolah daging sapi enak tidaklah selalu sulit. Dengan resep semur daging sapi kecap berikut, makan malam siap sekejap untuk keluarga tercinta!",
    photo:"https://www.masakapahariini.com/wp-content/uploads/2018/04/semur-daging-sapi-sederhana-500x300.png"
  },
];

export default function Product() {
  const router = useRouter();

  const styles = StyleSheet.create({
    productListContainer: {
      justifyContent: "center"
    },
    productItem: {
      flexDirection: "column",
      alignItems: "center",
      borderColor: "gray",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 12,
      textAlign: "center",
      marginHorizontal: 12,
      marginVertical: 16,
      padding: 12,
    },
    productTitle: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 16,
    },
    productPhoto: {
      width: 300,
      height: 200,
      marginVertical: 8,
    }
  })

  return (
    <ScrollView>
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

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productTitle}>{item.nama}</Text>
            <Image source={{uri: item.photo}} style={styles.productPhoto} />
            <Text>{item.desk}</Text>
          </View>
        )}
        contentContainerStyle={styles.productListContainer}
      />

    </ScrollView>
  );
}
