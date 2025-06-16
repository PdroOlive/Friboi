import { Alert, Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from 'react-native-paper'
import { SignOutButton } from "../components/SignOut";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUser } from "@clerk/clerk-expo";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";


export default function ProfileScreen() {
    const { user } = useUser()
    const [selectedImage, setSelectedImage] = useState<any>(null);


    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(status !== "granted") {
            Alert.alert(
                "Permissão necessária",
                "Por favor, conceda permissão de acesso à galeria nas configurações do seu dispositivo para escolher uma foto."
            );
            return;

        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [ 4, 3 ],
            quality: 1
        });


        if(!result.canceled) {
            setSelectedImage()
            
        }
    }

    const onSetImage = (imageData: any) => user?.setProfileImage({ file: imageData }).then(() => user?.reload())
        
 
  return (
    
    <View style={styles.container}>
       
        
        {/* <AntDesign name="user" size={80} /> */}
        <Image 
          alt={user?.primaryEmailAddress?.emailAddress}
          src={user?.imageUrl}
          width={200}
          height={200}
          style={styles.image}
        />
        <TouchableOpacity onPress={() => onSetImage()}><AntDesign name="edit" size={25}/></TouchableOpacity>
        <Text style={styles.textName} variant="displaySmall">{user?.fullName}</Text>
        <SignOutButton />

        
    </View>
  );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    image: {
        borderRadius: 50
    },
    textName: {
    }
})
