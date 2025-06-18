import { ScrollView, StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Header } from "../components/Header";
import { clients } from "@/data/dataClient";
import { ModalPayment } from "../components/Modals/ModalPayment";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";

export default function PaymentScreen() {
    const { user } = useUser()

    return(
        <View style={styles.container}>
                <Header title="PAGAMENTO"/>
            <ScrollView>
                <View style={styles.containerCard}>
                    {clients.map((props) => (
                        props.salesperson === user?.fullName && !props.infos.request &&(<ModalPayment infos={props.infos} key={props.name} name={props.name} />)
                    
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 70
    },
      containerCard: {
        flex: 1,
        gap: 10,
        paddingInline: 20,
     
    
    }
})
