    import { useState } from "react";
    import { StyleSheet,View,TextInput,Button,Modal,Image } from "react-native"

    function GoalInput(props){

        const [enteredGoalText,setEnteredGoalText] = useState('');

        function goalInputHandler(enteredText){
            setEnteredGoalText(enteredText)
        }

        function addGoalHandler(){
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText('')
        }

        return(
            <Modal visible={props.visible} animationType="slide">
                <View style={styles.inputContainer}>
                    <Image style={styles.image} source={require('../assets/images/red_background.png')}/>
                    <TextInput style={styles.textInput} placeholder='Your Course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style = {styles.buttonContainer}>
                    
                    <View style = {styles.button}>
                        <Button title='Cancel' onPress={props.endAddGoal} color="#f31282"/>
                    </View>
                    <View style = {styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>
                </View>
        </Modal>)
    }

    export default GoalInput

    const styles = StyleSheet.create({
        inputContainer:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            borderBottomWidth:1,
            borderBottomColor:'#cccccc',
            padding:16,
            backgroundColor:'#311b6b'
        
        },
        textInput:{
            borderWidth:1,
            borderColor:'#e4d0ff',
            backgroundColor:'#e4d0ff',
            color:'#120438',
            width:'100%',
            marginEnd:8,
            padding:12,
            borderRadius:6
        
        },
        buttonContainer:{
            flexDirection:'row',
            marginTop:10
        },
        button:{
            width:'40%',
            marginHorizontal:8

        },
        image:{
            width:110,
            height:108,
            margin:20,
            padding:10
        }
    })