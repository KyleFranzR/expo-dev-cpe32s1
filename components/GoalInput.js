import {StyleSheet, View, Pressable, Text, TextInput} from 'react-native';
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
            <Pressable onPress={addGoalHandler} style={({pressed}) => [
                styles.button, pressed && {opacity: 0.5}]}>
                <Text style={styles.buttonText}>Add Goal</Text>
            </Pressable>
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
  button: {
    backgroundColor: '#b34ab5',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
});
