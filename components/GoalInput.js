import {StyleSheet, View, Button, TextInput} from 'react-native';
import {useState} from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Your Course Goal' 
                style={styles.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoalText}/>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b34ab5'/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
});
