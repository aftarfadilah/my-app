import { View, ScrollView, ImageBackground, Text, StyleSheet,Image } from 'react-native';
import React from "react";

export default function About() {
  const styles = StyleSheet.create({
    vparent:{
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 16,
    },
    row: {
      flexDirection: "row",
      marginVertical: 12,
    },
    imgkucing: {
      width: 300,
      height: 400,
      marginHorizontal: 6,
    },
  });


  return (
    <ScrollView>
      <ScrollView horizontal style={styles.row}>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=1'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=2'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=3'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
      </ScrollView>
      <ScrollView horizontal>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=4'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=5'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
        <ImageBackground
          style={styles.imgkucing}
          source={{uri: 'https://placecats.com/300/400?image=6'}}>
          <Image source={require('../assets/missing.png')} />
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
