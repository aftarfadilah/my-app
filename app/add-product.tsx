import { View, Text, Button, FlatList, StyleSheet, Image, TextInput, Platform, Alert } from "react-native";
import React from "react";
import { DATA } from "./product";

export default function Product() {

    const [nama, onChangeNama] = React.useState("");
    const [desk, onChangeDesk] = React.useState("");
    const [foto, onChangeFoto] = React.useState("");
    const [url,onSubmitFoto] = React.useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg");

  const styles = StyleSheet.create({
    input:{
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 120,
        borderWidth: 1,
        padding: 10,
    },
    img: {
        width: 300,
        height: 200,
    }
  });


  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNama}
        value={nama}
        placeholder="nama masakan"
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeDesk}
        value={desk}
        placeholder="deskripsi"
        multiline={true}
        numberOfLines={4}
        maxLength={100}
      />

    <TextInput
        style={styles.input}
        onChangeText={onChangeFoto}
        onSubmitEditing={(event) => 
            onSubmitFoto(foto)
        }
        value={foto}
        placeholder="url"/>
    <Image 
        style={styles.img}
        source={{uri: url}}
    />
    <Button
        title="SIMPAN"
        onPress={() => {
            var id=DATA.length+1;
            DATA.push({
                id: id,
                nama: nama,
                desk:desk,
                photo:url
              })

              if (Platform.OS === 'web') {
                alert('Data Resep tersimpan');
              } else {
                Alert.alert('Data Resep tersimpan');
              }            
        }
        }
      />


    </View>
  );
}
