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
        <Button title="+5" onPress={handleAddScore}>+5</Button>
        <Button title="-5" onPress={handleSubScore}>-5</Button>
      </View>
    </View>
  );
}
