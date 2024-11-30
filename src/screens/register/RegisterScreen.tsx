import React from "react"
import { Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import NavigationService from "services/NavigationService"

const RegisterScreen = () => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleRegister = () => {
        if (name === "" || email === "" || password === "") {
            alert("Preencha todos os campos")
            return
        }
        if (email === "admin@admin" && password === "admin") {
            alert("Cadastrado com sucesso")
            NavigationService.navigate("Login")
            return
        }
    }

    return (
        <View className="flex-1 flex">
            <SafeAreaView className="flex-1 mt-2 bg-background flex items-center">
                <View className="flex-2 flex  items-center justify-center">
                    <Text className="text-5xl font-bold text-primary">Cupcake Magia</Text>
                    <Text className="text-xl font-bold text-secondary">Faça parter do nosso mundo mágico!</Text>
                </View>
                <View className="flex-4 justify-top flex items-center ">
                    <Image source={require("../../../assets/cupcake.png")} style={{ width: 250, height: 250 }} />
                </View>
                <KeyboardAvoidingView className="w-full" behavior="padding">
                    <View className="flex px-12 w-full space-y-4">
                        <View className="w-full h-14 rounded-full border-primary bg-white border-2 flex justify-center items-center p-4 ">
                            <TextInput
                                onChangeText={(text) => setName(text)}
                                value={name}
                                className="w-full font-bold "
                                placeholder="Digite seu nome"
                                autoCapitalize="none"
                                placeholderTextColor={"#fbb5bf"}
                            />
                        </View>
                        <View className="w-full h-14 rounded-full border-primary bg-white border-2 flex justify-center items-center p-4 ">
                            <TextInput
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                className="w-full font-bold "
                                placeholder="Digite seu e-mail"
                                autoCapitalize="none"
                                placeholderTextColor={"#fbb5bf"}
                            />
                        </View>
                        <View className="w-full h-14 rounded-full border-primary bg-white border-2 flex justify-center items-center p-4 ">
                            <TextInput
                                onChangeText={(text: any) => setPassword(text)}
                                value={password}
                                className="w-full font-bold "
                                placeholder="Crie uma senha"
                                autoCapitalize="none"
                                secureTextEntry={true}
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
                            onPress={() => {
                                handleRegister()
                            }}
                            className="w-full h-14 rounded-full bg-primary flex justify-center items-center"
                        >
                            <Text className="font-semibold text-2xl text-secondary">Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="mt-2 text-primary text-lg font-bold">Esqueceu a senha ?</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default RegisterScreen
