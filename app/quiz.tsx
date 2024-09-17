import { Button, Chip, LinearProgress, Text } from "@rneui/themed";
import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import Question from "./question" ;

class Quiz extends Component {
    batas=5;
    state = {
        count: this.batas,
        oneSecInterval : setInterval(() => {
            this.setState({
                count:this.state.count-1
            })

            if(this.state.count==0) {
                if(this.state.nomor==(this.state.quiz.length-1)) {
                    this.setState({
                        // count:this.batas,
                        // nomor:0
                        selesai: true,
                    })
                } else {
                    this.setState({
                        count:this.batas,
                        nomor:this.state.nomor+1
                    })
                }
            }
        }, 1000),   
        quiz : [
            new Question('Not a member of Avenger ', 'Ironman','Spiderman', 'Thor', 'Hulk Hogan', 'Hulk Hogan'),
            new Question("Not a member of Teletubbies", 'Dipsy','Patrick', 'Laalaa', 'Poo', 'Patrick'),
            new Question("Not a member of Justice League", 'Batman', 'Aquades', 'Superman', 'Flash', 'Aquades'),
            new Question("Not a member of BTS", 'Jungkook','Jimin', 'Gong Yoo', 'Suga', 'Gong Yoo'),
        ],
        nomor:0,
        skor:0,
        selesai: false,
    };
    
    toHHMMSS (v:any) {
        const sec_num = parseInt(v, 10); 
        const hours   = Math.floor(sec_num / 3600);
        const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        const seconds = sec_num - (hours * 3600) - (minutes * 60);
        let hours_str=hours.toString()
        let minutes_str=minutes.toString()
        let seconds_str=seconds.toString()
        if (hours   < 10) hours_str   = "0" + hours_str;
        if (minutes < 10) minutes_str = "0"+minutes;
        if (seconds < 10) seconds_str = "0"+seconds;
        return hours_str+':'+minutes_str+':'+seconds_str;
    }
    
    checkAnswer (s:string) {
        var temp2;
        var temp3=this.state.skor;
        if (s == this.state.quiz[this.state.nomor].answer) {
            temp3=this.state.skor + 100;
        }
        temp2=this.state.nomor+1;
        if(temp2>=this.state.quiz.length) this.setState({selesai: true});
        this.setState({
            count:this.batas,
            nomor:temp2,
            skor:temp3
        })
    }

    playAgain () {
        this.setState({
            count: this.batas,
            nomor: 0,
            skor: 0,
            selesai: false
        })
    }

    
    
    render() {
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
          
        if(this.state.selesai==true) {
            return (
                <View style={styles.vparent}>
                    <Text h3>Your Score:</Text>
                    <Chip
                        type="outline"
                        title={this.state.skor.toString()}
                    /> 
                    <br />
                    <Button title={"Main Lagi"} onPress={() => this.playAgain()} />
                </View>
            )
        }
        
        else
        {
            return (
                <View>
                <LinearProgress animation={false} value={1-(this.state.count/this.batas)}
                color="primary" />
                <Text>{this.toHHMMSS(this.state.count)}</Text> 
                <Text h3>{this.state.nomor + 1}. {this.state.quiz[this.state.nomor].question}</Text>
                <View style={styles.vparent}>
                <Button
                    onPress={() =>{this.checkAnswer(this.state.quiz[this.state.nomor].option_a)}}
                    title={"A. "+this.state.quiz[this.state.nomor].option_a} type="outline" 
                />
                <Button
                    onPress={() =>{this.checkAnswer(this.state.quiz[this.state.nomor].option_b)}}
                    title={"B. "+this.state.quiz[this.state.nomor].option_b} type="outline"
                />
                <Button
                    onPress={()=>{this.checkAnswer(this.state.quiz[this.state.nomor].option_c)}}
                    title={"C. "+this.state.quiz[this.state.nomor].option_c} type="outline" 
                />
                <Button
                    onPress={() =>{this.checkAnswer(this.state.quiz[this.state.nomor].option_d)}}
                    title={"D. "+this.state.quiz[this.state.nomor].option_d} type="outline"
                />
                
                </View>
                
                </View>
                
            );
        }
    }
}

export default Quiz;
