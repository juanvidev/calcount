import { router, useFocusEffect } from 'expo-router';
import { FC, useRef, useState } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Animated } from 'react-native';
import { Card, Text, FAB, } from 'react-native-paper';


const HomeScreen: FC = () => {

    const [isActive, setIsActive] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        isActive && Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useFocusEffect(() => {
        setIsActive(true);
        return () => {
            setIsActive(false);
        };
    });

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <Animated.View style={{
                display: !isActive ? 'flex' : 'none',
                backgroundColor: `rgba(0,0,0,0.4)`,
                position: 'absolute',
                opacity: fadeAnim,
                width: "100%",
                height: "100%",
                zIndex: 9999,
            }} />
            <View style={styles.container}>
                <View style={{ ...styles.box, }}>
                    <Text variant="headlineLarge" style={{ fontWeight: 'bold', letterSpacing: -1, color: "#000", marginTop: 20 }}>
                        Calcoun৳
                    </Text>
                    <Text variant="titleLarge" style={{ letterSpacing: -1, color: "#000", fontSize: 18 }}>
                        Sábado, 05 de agosto de 2006
                    </Text>
                </View>
                <View style={{ ...styles.box, marginTop: 5, flex: 1 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                        <Card mode="outlined" onPress={() => router.push('/123')} style={{ backgroundColor: '#fff', borderRadius: 8 }}>
                            <Card.Content>
                                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text variant="titleLarge" style={{ color: "#000", fontSize: 18 }}>Grupo Judah</Text>
                                        <Text variant="bodyMedium" style={{ color: 'gray' }}>Hmna Alicia</Text>
                                    </View>
                                    <Text variant="bodyMedium" style={{ color: 'gray' }}>12 Sep</Text>
                                </View>
                            </Card.Content>
                            <Card.Actions>
                            </Card.Actions>
                        </Card>
                        <Card mode="outlined" onPress={() => { }} style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 5 }}>
                            <Card.Content>
                                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text variant="titleLarge" style={{ color: "#000", fontSize: 18 }}>Grupo Judah</Text>
                                        <Text variant="bodyMedium" style={{ color: 'gray' }}>Hmna Alicia</Text>
                                    </View>
                                    <Text variant="bodyMedium" style={{ color: 'gray' }}>12 Sep</Text>
                                </View>
                            </Card.Content>
                            <Card.Actions>
                            </Card.Actions>
                        </Card>
                        <Card mode="outlined" onPress={() => { }} style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 5 }}>
                            <Card.Content>
                                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text variant="titleLarge" style={{ color: "#000", fontSize: 18 }}>Grupo Judah</Text>
                                        <Text variant="bodyMedium" style={{ color: 'gray' }}>Hmna Alicia</Text>
                                    </View>
                                    <Text variant="bodyMedium" style={{ color: 'gray' }}>12 Sep</Text>
                                </View>
                            </Card.Content>
                            <Card.Actions>
                            </Card.Actions>
                        </Card>

                    </ScrollView>
                </View>
                <FAB
                    customSize={65}
                    elevation={0}
                    color='#fff'
                    icon="plus"
                    style={styles.fab}
                    onPress={() => {
                        router.push('/question/')
                        fadeIn()
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 9999,
    },
    fadingText: {
        fontSize: 28,
    },
    container: {
        flex: 1,
        color: "#000",
        backgroundColor: '#fff',
        padding: 20,
    },
    box: {
        marginTop: StatusBar.currentHeight,
        height: 130
    },
    fab: {
        position: 'absolute',
        right: "45%",
        bottom: 40,
        borderRadius: 50,
        backgroundColor: '#03DAC5',
        shadowColor: 'trasparent',
        elevation: 0,
    },
});

export default HomeScreen;