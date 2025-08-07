import { useState } from "react";
import { Text,View,StyleSheet,SafeAreaView } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min,max,exclude){
    const randNum = Math.floor(Math.random()*(max-min)) + min;
    if(randNum == exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return randNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}){

    const initialGuess = generateRandomBetween(minBoundary,maxBoundary,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction){
        // direction=>'lower','greater'
        if(direction==='lower'){
            maxBoundary =  currentGuess;
            generateRandomBetween(minBoundary,maxBoundary,userNumber);
        }

    }

    return <View style={styles.screen}>
         <View>
         <Title>Opponent's Guess</Title>
         <NumberContainer>{currentGuess}</NumberContainer>
         <View>
            <Text>Higher of lower?</Text>
            <View>
            <PrimaryButton onPress={}>+</PrimaryButton>
            <PrimaryButton onPress={}>-</PrimaryButton>
            </View>
         </View>
         </View>
         </View>
    
}

export default GameScreen;

const styles= StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
   
});