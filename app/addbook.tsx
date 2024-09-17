import { View, Button, StyleSheet, Image, TextInput, Platform, Alert } from "react-native";
import React from "react";
import { BOOKS } from "./books";

export default function AddBook() {
  const [title, onChangeTitle] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [cover, onChangeCover] = React.useState("");
  const [url, onSubmitCover] = React.useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg");

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    input2: {
      height: 120,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    img: {
      width: 300,
      height: 200,
      marginBottom: 10,
    },
  });

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Judul Buku"
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Deskripsi"
        multiline={true}
        numberOfLines={4}
        maxLength={100}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCover}
        onSubmitEditing={() => onSubmitCover(cover)}
        value={cover}
        placeholder="URL Cover"
      />
      <Image style={styles.img} source={{ uri: url }} />
      <Button
        title="Simpan"
        onPress={() => {
          var id = BOOKS.length + 1;
          BOOKS.push({
            id: id,
            title: title,
            description: description,
            cover: url,
          });

          if (Platform.OS === 'web') {
            alert('Data Buku Tersimpan');
          } else {
            Alert.alert('Data Buku Tersimpan');
          }
        }}
      />
    </View>
  );
}
