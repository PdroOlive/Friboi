import { ClientProps, clients } from "@/data/dataClient";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, TouchableOpacity, View, StyleSheet, Pressable } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Text } from "react-native-paper"
import { ClientInfos } from "./ClientInfos";


export function ModalComp({ name, currentLocation, infos }: ClientProps) {
    
    const [ visible, setVisible ] = useState<boolean>(false)

    return(
        <View>
            
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <View style={[styles.containerChild]}>
                        <Text style={styles.title} variant="titleLarge">
                            {name}
                        </Text>
                        <AntDesign name="right" size={24} color="#fff" />
                    </View>
                </TouchableOpacity>


            <Modal
            visible={visible}
            animationType="fade"
            onRequestClose={() => setVisible(false)}
            >

                <View style={styles.containerModal}>
                    <View style={styles.childViewModal}>
                        <Text style={styles.titleModal} variant="titleLarge">
                            {name}
                        </Text>
                        <Pressable onPress={() => setVisible(false)}>
                            <AntDesign name="closecircle" size={24}/>
                        </Pressable>
                    </View>

                    <MapView 
                    style={styles.map} 
                    provider={PROVIDER_GOOGLE} 
                    initialRegion={currentLocation} 
                    scrollEnabled={false}
                    pitchEnabled={false}
                    rotateEnabled={false}
                    >
                        <Marker 
                        coordinate={{
                        latitude: currentLocation!.latitude,
                        longitude: currentLocation!.longitude
                        }}

                        />
                    </MapView>
                    <View>
                        <ClientInfos balance={infos.balance} operation={infos.operation} request={infos.request}/>
                    </View>


                </View>


            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    containerChild: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3b0000",
        padding: 10,
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20

    }, 
    title: {
        color: "#fff",
        fontWeight: "bold"
    },
    containerModal: {
        flex: 1,

    },
    childViewModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },

    titleModal: {
        textAlign: "center",
        color: "#000",
        fontWeight: "bold"
    },
    map: {
        width: "100%",
        height: "50%",
    }
})
