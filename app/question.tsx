import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';

const QuestionScreen = () => {


    return (
        <View style={styles.container}>
            <Text>
                Question Screen
            </Text>
            <Link href="/modal">
                <Text>Present modal</Text>
            </Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
});


export default QuestionScreen