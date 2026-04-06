import {StyleSheet, Text, Pressable, View} from 'react-native';

function GoalItem(props) {
    return (
      <View style={styles.goalsContainer}>
        <Pressable 
          onPress={props.onDeleteItem.bind(this, props.itemKey)}
          style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.goalsList}>{props.item.text}</Text>
            <Text style={styles.subText}>tap to delete</Text>
        </Pressable>
      </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalsList: {
    padding: 8,
  },
  subText: {
    color: '#cccccc',
    fontSize: 12,
    paddingBottom: 8,
    paddingHorizontal: 8,
    fontStyle: 'italic',
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: '#f0f0f0',
  }
});