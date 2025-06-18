import { ClientProps } from "@/data/dataClient"
import { AntDesign, FontAwesome6 } from "@expo/vector-icons"
import { router } from "expo-router"
import { RefObject, SetStateAction, useRef, useState } from "react"
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export function ModalPayment({ name, infos }: Pick<ClientProps, "name" | "infos">) {
    const textInputRef = useRef<any>("")
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ pix, setPix ] = useState<string>("")
    const [ money, setMoney ] = useState<string>("")
    const [ credit, setCredit ] = useState<string>("")
    const [ debit, setDebit ] = useState<string >("")
    const [ check, setCheck ] = useState<string>("")
    const [ error, setError ] = useState<string | null>(null)
    
    let total = 0
    let balancePending = infos.balance

    function handleInputPayment() {
        if(!pix || !money || !credit || !debit ||check) {
            setError("Preencha algum método de pagamento")
            return;
        }
    }

    function formatNum(price:number) {
        return price.toLocaleString("pt-BR", {style: 'currency', currency:"BRL"})
    }

    total += Number(pix) + Number(money) + Number(check) + Number(credit) + Number(debit)

    balancePending = balancePending - total

    

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
                                        <Text style={[styles.title, {color: "#000"}]} variant="titleLarge">Comprovante</Text>
                                        <Pressable onPress={() => setVisible(false)}>
                                            <AntDesign name="close" size={24}/>
                                        </Pressable>
                                        
                                    </View>

                                    <Text style={[styles.textModal, { textAlign: "center" }]} variant="headlineMedium">{name}</Text>  
                                    

                                    <View style={styles.containerInput}>

                                        <View style={styles.containerInputChild}>
                                            <TextInput
                                            value={total > infos.balance ? String(total -= infos.balance) : pix}
                                            ref={textInputRef}
                                            label={<FontAwesome6 name="pix" size={24} color="black" />}
                                            placeholder="PIX"
                                            autoCapitalize="none"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(pixProps) => {
                                                setPix(pixProps)
                                                setError(null)
                                            }}
                                            style={styles.input}
                                            disabled={total > infos.balance ? true : false}
                                            />

                                            <TextInput
                                            value={total > infos.balance ? String(total -= infos.balance) : money}
                                            ref={textInputRef}
                                            label={<FontAwesome6 name="money-bill-1" size={24} color="black" />}
                                            placeholder="DINHEIRO"
                                            autoCapitalize="none"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(moneyProps) => {
                                                setMoney(moneyProps)
                                                setError(null)
                                            }}
                                            style={styles.input}
                                            disabled={total > infos.balance ? true : false}
                                            />
                                        </View>
                                        <View style={styles.containerInputChild}>
                                            
                                            <TextInput
                                            value={check}
                                            ref={textInputRef}
                                            label={<FontAwesome6 name="money-check-dollar" size={24} color="black" />}
                                            placeholder="CHEQUE"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(checkProps) => {
                                                setCheck(checkProps)
                                                setError(null)
                                            }}
                                            style={styles.input}
                                            disabled={total > infos.balance ? true : false}
                                            />
                                            <TextInput
                                            value={credit}
                                            ref={textInputRef}
                                            label={<FontAwesome6 name="credit-card" size={24} color="black" />}
                                            placeholder="CRÉDITO"
                                            autoCapitalize="none"
                                            underlineColor="#fff"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(creditProps) => {
                                                setCredit(creditProps)
                                                setError(null)
                                            }}
                                            style={styles.input}
                                            disabled={total > infos.balance ? true : false}
                                            />
                                            
                                            <TextInput
                                            value={debit}
                                            ref={textInputRef}
                                            label={<FontAwesome6 name="credit-card" size={24} color="black" />}
                                            placeholder="DÉBITO"
                                            autoCapitalize="none"
                                            activeOutlineColor="#3b0000"
                                            keyboardType="numeric"
                                            mode="outlined"
                                            onChangeText={(debitProps) => {
                                                setDebit(debitProps)
                                                setError(null)
                                            }}
                                            style={styles.input}
                                            disabled={total > infos.balance ? true : false}
                                            />
                                        </View>

                                        <View style={styles.totalPayment}>
                                            <Text style={styles.textModal} variant="titleMedium">Saldo Pendente: </Text> 
                                            {balancePending < 0 ? (
                                                <Text style={[styles.textModal, {color: "red"}]} variant="titleLarge">{formatNum(0)}</Text> 

                                            ): <Text style={[styles.textModal, {color: "green"}]} variant="titleLarge">{formatNum(balancePending)}</Text> } 
                                             
                                        </View>
                                        <View style={styles.totalPayment}>
                                            <Text style={styles.textModal} variant="titleMedium">Total:</Text>
                                            {total > infos.balance ?
                                                <Text style={[styles.textModal, {color: "red"}]} variant="titleLarge">{formatNum(infos.balance)}</Text>
                                                

                                            : <Text style={[styles.textModal, {color: "green"}]} variant="titleLarge">{formatNum(total)}</Text>}
                                        </View>

                                        {error && (
                                            <Text style={{ color: "red" }}>
                                                <AntDesign name="exclamationcircleo" /> {error}
                                            </Text>
                                        )}  
                                        <Pressable style={styles.button} onPress={handleInputPayment}>
                                            <Text style={{ color: "#fff" }} variant="titleMedium">Enviar Comprovante</Text>
                                        </Pressable>
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
        backgroundColor: "#000000b7",
        padding: 15
        
    },
    containerModal: {
        backgroundColor: "#fff",
        

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
        width: "30%",
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
    textModal: {
        padding: 15,
        fontWeight: "bold",
    },
    totalPayment: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
       

    },
    button: {
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#3b0000",
        padding: 10,
        width: "80%",
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
    },
})
