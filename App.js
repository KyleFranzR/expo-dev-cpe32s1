import {StyleSheet, View, FlatList, Alert} from 'react-native';
import {useState} from 'react';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalState from "./components/GoalState";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // For supplementary 1, I want to limit the size of the container until 20 only
    if (courseGoals.length >= 20) {
      Alert.alert("Maximum size limit reached")
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <GoalState count={courseGoals} />
      <View style={styles.goalsListContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (<GoalItem item={itemData.item}/>)
        }} />
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
  goalsListContainer: {
    flex: 5,
  },
});
