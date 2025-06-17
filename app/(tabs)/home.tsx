import { ScrollView, StyleSheet, View } from "react-native";

import { clients } from "@/data/dataClient";
import { useUser } from "@clerk/clerk-expo";
import { Header } from "../components/Header";
import { ModalComp } from "../components/Modals/Modal";


export default function HomeScreen() {
    const { user } = useUser()


  return (
    <View style={styles.container}>
        <Header title="SESEV - Serviços e Suporte em Vendas"/>

        <ScrollView>
            <View style={styles.containerCard}>
                {clients.map((props) => (
                    props.salesperson === user?.fullName &&
                    <ModalComp key={props.name} name={props.name} currentLocation={props.currentLocation} infos={props.infos}/>
                ))} 
            </View>
        </ScrollView>
    </View>
  );
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