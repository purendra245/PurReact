  import { useState } from 'react';
  import { StyleSheet, View,FlatList,Pressable,Button } from 'react-native';
  import { StatusBar } from 'expo-status-bar';

  import GoalItem from './components/GoalItem';
  import GoalInput from './components/GoalInput';

  export default function App() {

    
    const [courseGoals,setCourseGoal] = useState([]);
    const[modelIsVisible,setModelISVisible] = useState(false)

    
    function startAddGoalHandler(){
      setModelISVisible(true)
    }

    function endAddGoalHandler(){
      setModelISVisible(false)
    }

    function addGoalHandler(enteredGoalText){
      setCourseGoal(currentCourseGoal=> [...currentCourseGoal,{text:enteredGoalText,id:Math.random().toString()}])
      endAddGoalHandler();

    }

    function deleteGoalHandler(id){
      setCourseGoal(updatedGoal=> {
        return updatedGoal.filter((goal)=> goal.id!=id)
      }
      )
    }


    return (
      <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput visible= {modelIsVisible} onAddGoal={addGoalHandler} endAddGoal={endAddGoalHandler} />
        <View style={styles.goalContainer}>
          <FlatList data={courseGoals} renderItem={ (itemData=> {
            return ( <GoalItem  text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
            );
          })} 
          keyExtractor={(item,index)=> {
            return item.id
          }}>
          </FlatList>
        </View >
        
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    appContainer:{
      flex:1,
      paddingTop:50,
      paddingHorizontal:16
    },
    
    goalContainer:{
      flex:4,
      marginTop:20
    }
    
  });
