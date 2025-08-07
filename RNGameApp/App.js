import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import StartScreenGame from './screens/StartScreenGame';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {

  const [userNumber,setUserNumber] = useState()

  function pickedUserNum(pickedNumber){
    setUserNumber(pickedNumber)

  }

  let screen = <StartScreenGame onPickedNumber={pickedUserNum}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber}></GameScreen>
  }

  return (
    <LinearGradient colors={[Colors.primary900,Colors.primary800]}style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.jpg')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootScreen}>
    {screen}
    </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
