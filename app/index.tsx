import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
    </View>
  );
}
