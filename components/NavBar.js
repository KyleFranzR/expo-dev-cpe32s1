import {StyleSheet, Text, Modal, View, Pressable} from 'react-native';

function NavBar(props) {
    return (
        <Modal
          visible={props.visible}
          animationType='slide'
          transparent={true}
          onRequestClose={props.onClose}>
            <View style= {styles.modalContainer}>
                <View style={styles.navContainer}>
                    <Text style={styles.navHeader}>Hello</Text>
                    <Pressable style={[styles.navLink, styles.endButton]} onPress={props.onClose}>
                        <Text style={styles.endButtonText}>Close Menu</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export default NavBar;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    navContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        padding: 20,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    navHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#b34ab5',
        marginBottom: 30,
    },
    navLink: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    endButton: {
        marginTop: 40,
        backgroundColor: '#b34ab5',
        borderRadius: 8,
        paddingVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    endButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});