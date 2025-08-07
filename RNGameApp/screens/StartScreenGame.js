                import {TextInput,View,StyleSheet,Alert} from "react-native";
                import { useState } from "react";

                import PrimaryButton from "../components/ui/PrimaryButton";
                import Colors from "../constants/colors";

                function StartScreenGame({onPickedNumber}){
                    const [enteredNumber,setEnteredNumber] = useState('')

                    function numberInputHandler(enteredText){
                        setEnteredNumber(enteredText);
                    }
                    function resetInputHandler(){
                        setEnteredNumber('');
                    }


                    function confirmInputHandler(){
                        const chooseNumber = parseInt(enteredNumber);
                        if(isNaN(chooseNumber) || chooseNumber<=0 || chooseNumber>99){
                            Alert.alert("Invalid number","Number has to be number between 1 and 99",[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
                            return;
                        }

                        onPickedNumber(chooseNumber);

                    }

                    return <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType="number-pad" 
                            autoCapitalize="none" 
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                            />
                        <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                        </View>
                    </View>
                }

                const styles = StyleSheet.create({
                    inputContainer:{
                        padding:16,
                        marginTop:100,
                        backgroundColor:Colors.primary700,
                        marginHorizontal:24,
                        borderRadius:8,
                        elevation:4,
                        shadowColor:"black",
                        shadowOffset:{width:0,height:2},
                        shadowRadius:6,
                        shadowOpacity:0.25,
                        justifyContent:'center',
                        alignItems:'center'
                    },
                    numberInput:{
                        height:55,
                        fontSize:32,
                        borderBottomColor:Colors.primary800,
                        borderBottomWidth:2,
                        color:Colors.primary800,
                        marginVertical:8,
                        fontStyle:'bold',
                        width:50,
                        textAlign:'center'
                    },
                    buttonsContainer:{
                        flexDirection:'row'
                    },
                    buttonContainer:{
                        flex:1
                    }
                });

                export default StartScreenGame;