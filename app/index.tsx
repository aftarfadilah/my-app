import { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  container: {
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-between",
    width: "80%",
  },
});

export default function Index() {
  const router = useRouter();

  const calculateScore = (score: number) => {
    let predicate: string = "";
    if(score > 85) predicate = "Sangat Baik"
    else if(score > 70) predicate = "Baik"
    else if(score > 55) predicate = "Cukup"
    else if(score <= 55) predicate = "Kurang"
    
    return (
      <Text>Skor anda {score} dengan predikat {predicate}</Text>
    )
  }

  const [myScore, setMyScore] = useState(99)

  const handleAddScore = () => {
    setMyScore(myScore + 5)
  }

  const handleSubScore = () => {
    setMyScore(myScore - 5)
  }

  const [myColors, setMyColors] = useState([255, 0, 0])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text
        style={{
          color: "red",
        }}
      >Aftar Fadilah...</Text>
      {calculateScore(myScore)}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12.0,
          margin: 12
        }}
      >
        <Button 
          onPress={handleAddScore}
          title="+5"
        />
        <Button
          onPress={handleSubScore}
          title="-5"
        />
      </View>
      {/* Start RGB Box */}
      <Text>RGB Box</Text>
      <Text style={{ fontSize:50, backgroundColor:`rgb(${myColors[0]},${myColors[1]},${myColors[2]})` }}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <View style={{flexDirection: "row", gap: 8, margin: 12}}>
        <Button
          onPress={() => setMyColors([myColors[0] + 10, myColors[1], myColors[2]])}
          title="R+"
        />
        <Button
          onPress={() => setMyColors([myColors[0] - 10, myColors[1], myColors[2]])}
          title="R-"
        />
        <Button
          onPress={() => setMyColors([myColors[0], myColors[1] + 10, myColors[2]])}
          title="G+"
        />
        <Button
          onPress={() => setMyColors([myColors[0], myColors[1] - 10, myColors[2]])}
          title="G-"
        />
        <Button
          onPress={() => setMyColors([myColors[0], myColors[1], myColors[2] + 10])}
          title="B+"
        />
        <Button
          onPress={() => setMyColors([myColors[0], myColors[1], myColors[2] - 10])}
          title="B-"
        />
      </View>
      <Text>{myColors[0]}, {myColors[1]}, {myColors[2]}</Text>
      <Button title="Go to About" onPress={() => router.push("/about")} />
      <Button title="Go to Product" onPress={() => router.push("/product")} />

      <Button title="Go to Food" onPress={() => router.push("/food")} />
      <Button title="Go to Movie" onPress={() => router.push("/movie")} />
      <Button title="Go to User Post Screen" onPress={() => router.push("/userpost")} />
    </ScrollView>

  );
}
