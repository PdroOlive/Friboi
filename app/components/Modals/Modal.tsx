import { ClientProps } from "@/data/dataClient";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Text } from "react-native-paper";
import { ClientInfos } from "../ClientInfos";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


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


             <SafeAreaProvider>
                <SafeAreaView >


                    <Modal
                    visible={visible}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setVisible(false)}
                    >

                        <View style={styles.containerSafe}>
                            <View style={styles.containerModal}>
                                <View style={styles.childViewModal}>
                                    <Text style={styles.titleModal} variant="titleLarge">
                                        {name}
                                    </Text>
                                    <Pressable onPress={() => setVisible(false)}>
                                        <AntDesign name="close" size={24}/>
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
                        </View>


                    </Modal>
                </SafeAreaView>
             </SafeAreaProvider>
            

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
    containerSafe:{
        flex: 1,
        backgroundColor: "#000000b7",
        justifyContent: "center",
        padding: 15
        
    },
    containerModal: {
        backgroundColor: "#fff",
        padding: 20
        
    },
    childViewModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15
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
