import {StyleSheet, Text} from 'react-native';

function GoalItem(props) {
    return (
        <Text style={styles.goalsList} key={props.item.key}>{props.item.text}</Text>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsList: {
    margin: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});