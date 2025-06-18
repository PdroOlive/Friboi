import { ClientInfosProps } from "@/data/dataClient";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";



export function ClientInfos({ balance, operation, request }: ClientInfosProps) {
    return(
        <View style={styles.container}>
            <View style={styles.containerRequestAndPending}>
                <View>
                    <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Saldo Pendente:</Text>
                    <Text variant="titleSmall" style={styles.dataText}>{balance.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</Text>
                </View>
                <View>
                    <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Solicitar Mercadoria:</Text>
                    <Pressable>
                        <Text variant="titleSmall" style={[request === true || balance === 0 ? {color: "green"} : {color: "red"}, styles.dataText]}>{request === true || balance === 0 ? "Solicitar" : "Inadimplente"}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerHours}>
                <View>
                    <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Horário de Funcionamento:</Text>
                    <Pressable>
                        <Text variant="titleSmall" style={styles.dataText}>{operation}</Text>
                    </Pressable>
                </View>
            </View>

            {balance > 0 ? (
                <Pressable style={styles.button} onPress={() => router.replace("/(tabs)/payment")}>
                    <Text style={{ color: "#fff" }} variant="titleMedium">Informar Pagamamento</Text>
                </Pressable>

            ) : (
                <Pressable style={[styles.button, styles.buttonDisable]} disabled>
                    <Text style={{ color: "#696969" }} variant="titleMedium">Informar Pagamamento</Text>
                </Pressable>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 20,
        alignItems: "center"
    },
    containerRequestAndPending: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    containerHours: {
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#3b0000",
        padding: 10,
        width: "80%",
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20

    },
    buttonDisable: {
        backgroundColor: "#838383"
    },
    dataText: {
        textAlign: "center"
    }

})