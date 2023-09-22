import { useRouter, } from 'expo-router';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, FAB, } from 'react-native-paper';


const HomeScreen = () => {

    const router = useRouter();

    return (
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
                onPress={() => router.push('/question/')}
            />
        </View >
    )
}

const styles = StyleSheet.create({
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