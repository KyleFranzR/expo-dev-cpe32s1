import {StyleSheet, View, Text} from 'react-native';

function GoalState(props) {
    const goalCount = props.count.length;
    
    return (
        <View style={styles.stateContainer}>
            <Text style={styles.stateText}>
                {goalCount === 0 ? "No goals added yet" 
                : `You have ${goalCount} active goal${goalCount > 1 ? 's' : ''}`}
            </Text>
        </View>
    );
}

export default GoalState;

const styles = StyleSheet.create({
    stateContainer: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    stateText: {
        color: '#b34ab5',
        fontWeight: 'bold',
    },
});