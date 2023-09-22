import { useGlobalSearchParams, Stack, useRouter } from "expo-router"
import { Dimensions, FlatList, Pressable, StatusBar, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

const ResumeScreen = () => {

    const router = useRouter();

    const params = useGlobalSearchParams();
    console.log(params)
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={{ ...styles.box, display: 'flex', alignItems: 'center', }}>
                    <Text variant="bodyLarge" style={{ color: '#424242', fontWeight: '200', letterSpacing: -1, marginTop: 15 }}>
                        Sábado, 05 de agosto de 2023
                    </Text>
                    <Text variant="titleMedium" style={{ color: "#000", fontSize: 24, letterSpacing: -2, marginTop: 20 }}>
                        Debes tener
                    </Text>
                    <Text variant="displayMedium" style={{ color: "#000", fontWeight: '800', letterSpacing: -4 }}>
                        $120.000
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, padding: 30 }}>
                <View style={{ width: Dimensions.get('window').width - 60 }}>
                    <Text variant="titleMedium" style={{ color: "#000", fontSize: 24, textAlign: 'center', letterSpacing: -1, marginBottom: 20 }}>
                        Resume
                    </Text>
                    <FlatList
                        data={[{
                            title: 'Chorizos',
                            value: '98'
                        }, {
                            title: 'Fiados',
                            value: '8'
                        }, {
                            title: 'Vendidos',
                            value: '90'
                        }, {
                            title: 'Subtotal',
                            value: '$120.000'
                        }]}
                        renderItem={({ item }) => (
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                                {
                                    item.title !== 'Subtotal'
                                        ? (
                                            <>
                                                <Text variant="titleMedium" style={{ color: "#000", fontSize: 18, letterSpacing: -1, marginBottom: 5 }}>{item.title}</Text>
                                                <Text variant="titleMedium" style={{ color: "#000", fontSize: 18, letterSpacing: -1 }}>
                                                    {item.value}
                                                    <Text variant="bodyMedium" style={{ color: "#000", letterSpacing: -1 }}>
                                                        &nbsp;u
                                                    </Text>
                                                </Text>
                                            </>
                                        )
                                        : (
                                            <>
                                                <Text variant="titleMedium" style={{ color: "#000", fontSize: 18, letterSpacing: -1, marginBottom: 5 }}>{item.title}</Text>
                                                <Text variant="titleMedium" style={{ color: "#000", fontSize: 18, letterSpacing: -1 }}>
                                                    {item.value}
                                                </Text>
                                            </>
                                        )
                                }
                            </View>
                        )}
                    />
                </View>
            </View>
            <View style={{ height: 120, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50 }}>
                <Pressable
                    style={{
                        borderRadius: 50,
                        borderColor: '#000',
                        borderWidth: 1,
                        width: 120, height: 60, justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => { }}
                >
                    <Text variant="bodyMedium" style={{ color: "#000", fontWeight: 'bold' }}>
                        Finalizar
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: '#000',
                        borderRadius: 50,
                        width: 120,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => { }}
                >
                    <Text variant="bodyMedium" style={{ fontWeight: 'bold', color: 'white' }}>
                        Compartir
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        width: Dimensions.get('window').width,
    },
    box: {
        paddingHorizontal: 20,
        backgroundColor: 'rgba(35,255,231,.4)',
        paddingTop: StatusBar.currentHeight,
        height: 210,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    wrap: {
        backgroundColor: 'rgba(35,255,231,.2)',
        height: 220,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,

    }
});

export default ResumeScreen