import React from "react"
import { Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import NavigationService from "services/NavigationService"

const ResetScreen = () => {
    const [email, setEmail] = React.useState("")

    const handleReset = () => {
        if (email === "") {
            alert("Preencha todos os campos")
            return
        }

        if (email === "admin@admin") {
            alert("Email para recuperar senha enviado com sucesso")
            NavigationService.navigate("Login")
            return
        } else {
            alert("Email não encontrado na base")
            return
        }
    }

    return (
        <View className="flex-1 flex">
            <SafeAreaView className="flex-1 bg-background flex items-center ">
                <Image
                    source={require("../../../assets/top.png")}
                    className="absolute top-0"
                    style={{ width: "100%", height: 350 }}
                />

                <View className="flex-4 justify-end flex items-center">
                    <Image source={require("../../../assets/lock.png")} style={{ width: 220, height: 220 }} />
                </View>
                <View className="flex-2 flex  items-center justify-center">
                    <Text className="text-5xl font-bold text-primary">Cupcake Magia</Text>
                    <Text className="mt-2 px-8 text-base font-bold text-secondary2 text-center">
                        Digite seu e-mail e enviaremos um link para redefinição de senha
                    </Text>
                </View>
                <KeyboardAvoidingView className="w-full" behavior="padding">
                    <View className="flex px-12 w-full space-y-4">
                        <View className="w-full h-14 rounded-full border-primary bg-white border-2 flex justify-center items-center p-4 placeholder-secondary">
                            <TextInput
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                autoCapitalize="none"
                                className="w-full font-bold "
                                placeholder="Digite seu e-mail"
                                placeholderTextColor={"#fbb5bf"}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View className="flex-2 flex w-full items-center mt-5">
                    <View className="flex flex-row w-1/3 h-2 space-x-2">
                        <View className="flex-1 rounded-lg bg-secondary"></View>
                        <View className="flex-3 rounded-lg bg-secondary"></View>
                        <View className="flex-1 rounded-lg bg-secondary"></View>
                    </View>
                    <View className="w-full px-12 mt-3">
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                handleReset()
                            }}
                            className="w-full h-14 rounded-full bg-primary flex justify-center items-center"
                        >
                            <Text className="font-semibold text-2xl text-secondary">Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="mt-2 text-primary text-lg font-bold">Não compartilhe sua senha!</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ResetScreen
