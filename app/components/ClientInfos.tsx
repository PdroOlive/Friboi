import { ClientInfosProps } from "@/data/dataClient";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";



export function ClientInfos({ balance, operation, request }: ClientInfosProps) {
    return(
        <View style={styles.container}>
            <View style={styles.containerRequestAndPending}>
                <View>
                    <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Saldo Pendente:</Text>
                    <Text variant="titleSmall" style={styles.dataText}>{balance}</Text>
                </View>
                <View>
                    <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Solicitar Mercadoria:</Text>
                    <Pressable>
                        <Text variant="titleSmall" style={[request === true ? {color: "green"} : {color: "red"}, styles.dataText]}>{request === true ? "Solicitar" : "Inadimplente"}</Text>
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

            <Pressable style={styles.button}>
                <Text style={{ color: "#fff" }} variant="titleMedium">Informar Pagamamento</Text>
            </Pressable>
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
        padding: 20,
        width: "80%",
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20

    },
    dataText: {
        textAlign: "center"
    }

})