import {StyleSheet, View, FlatList, Alert, Pressable} from 'react-native';
import {useState} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalState from "./components/GoalState";
import NavBar from "./components/NavBar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [barVisible, setBarVisible] = useState(false);

  function Navigation() {
    setBarVisible(!barVisible);
  }

  function addGoalHandler(enteredGoalText) {
    if (courseGoals.length >= 20) {
      Alert.alert("Maximum size limit reached")
      return;
    }

    if (courseGoals.length === 4) {
      Alert.alert("Too much goals can be a burden you know?")
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  };

  function deleteGoalHandler(itemKey) {
    Alert.alert("Confirm Deletion", "Are you sure?", [
        {text: 'No', style: 'cancel'}, 
        {text: 'Yes', style: 'destructive', onPress: () => {
          setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.key !== itemKey);
          });
        },},
      ]
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.barHeader}>
        <Pressable onPress={Navigation} style={({pressed}) => pressed && {opacity: 0.5}}>
          <MaterialIcons name="track-changes" size={24} color="black"/>
        </Pressable>
      </View>
      <NavBar visible={barVisible} onClose={Navigation}/>
      <GoalInput onAddGoal={addGoalHandler}/>
      <GoalState count={courseGoals} />
      <View style={styles.goalsListContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem 
              item={itemData.item} 
              onDeleteItem={deleteGoalHandler}
              itemKey={itemData.item.key}/>
          )
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
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  goalsListContainer: {
    flex: 5,
  },
});
