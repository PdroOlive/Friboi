import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface HeaderProps {
    title: string;
}


export function Header({ title }: HeaderProps) {
    return(
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>{title}</Text>
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
        fontWeight: "bold",
    }
})