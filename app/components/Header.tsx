import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export function Header() {
    return(
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>SESEV - Serviços e Suporte em Vendas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3b0000",
        padding: 30,
        paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight! + 50,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    title: {
        color: "#fff",
        fontWeight: "bold"
    }
})