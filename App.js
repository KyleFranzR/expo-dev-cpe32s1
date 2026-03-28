import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);

    // For supplementary
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Course Goal' 
          style={styles.textInput} 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}/>
        <Button title='Add Goal' onPress={addGoalHandler} color='#b34ab5'/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, idx) => <Text key={idx} style={styles.goalsList}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#b34ab5',
  },
  textInput: {
    borderWidth: 2,
    color: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 13,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsList: {
    margin: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});
