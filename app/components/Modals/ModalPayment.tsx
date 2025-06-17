import { ClientProps } from "@/data/dataClient"
import { AntDesign, FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { Text, TextInput } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export function ModalPayment({ name }: Pick<ClientProps, "name">) {

    const [ visible, setVisible ] = useState<boolean>(false);
    const [ pix, setPix ] = useState<string | null>(null)
    const [ money, setMoney ] = useState<string | null>(null)
    const [ credit, setCredit ] = useState<string | null>(null)
    const [ debit, setDebit ] = useState<string | null>(null)
    const [ check, setCheck ] = useState<string | null>(null)
    
    
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
                <SafeAreaView style={styles.containerSafe}>
                    <Modal
                        visible={visible}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setVisible(false)}
                        >
                            <View style={styles.containerSafe}>

                                <View style={styles.containerModal}>
                                    <View style={styles.childViewModal}>
                                        <Text style={[styles.title, {color: "#000"}]} variant="titleLarge">Enviar Recibo</Text>
                                        <Pressable onPress={() => setVisible(false)}>
                                            <AntDesign name="close" size={24}/>
                                        </Pressable>
                                        
                                    </View>

                                    <View style={styles.containerInput}>
                                        <View style={styles.containerInputChild}>
                                            <TextInput
                                            value={pix!}
                                            label={<FontAwesome6 name="pix" size={24} color="black" />}
                                            placeholder="PIX"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(pixProps) => {
                                                setPix(pixProps)
                                            }}
                                            style={styles.input}
                                            />

                                            <TextInput
                                            value={money!}
                                            label={<FontAwesome6 name="money-bill-1" size={24} color="black" />}
                                            placeholder="DINHEIRO"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(moneyProps) => {
                                                setMoney(moneyProps)
                                            }}
                                            style={styles.input}
                                            />
                                        </View>
                                        <View style={styles.containerInputChild}>
                                            <TextInput
                                            value={check!}
                                            label={<FontAwesome6 name="money-check-dollar" size={24} color="black" />}
                                            placeholder="CHEQUE"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(checkProps) => {
                                                setCheck(checkProps)
                                            }}
                                            style={styles.input}
                                            />
                                            <TextInput
                                            value={credit!}
                                            label={<FontAwesome6 name="credit-card" size={24} color="black" />}
                                            placeholder="CRÉDITO"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(creditProps) => {
                                                setCredit(creditProps)
                                            }}
                                            style={styles.input}
                                            />
                                            
                                            <TextInput
                                            value={debit!}
                                            label={<FontAwesome6 name="credit-card" size={24} color="black" />}
                                            placeholder="DÉBITO"
                                            autoCapitalize="none"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(debitProps) => {
                                                setDebit(debitProps)
                                            }}
                                            style={styles.input}
                                            />
                                        </View>    
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
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#000000b7"
    },
    containerModal: {
        backgroundColor: "#fff",
        padding: 1

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
    input: {
        backgroundColor: "#fff",
        width: "30%"
    },
    containerInput: {
        padding: 15,
        alignItems: "center",
        gap: 10,
        marginTop: 53

        
    },
    containerInputChild: {
        flexDirection: "row",
        gap: 5
    },
})
