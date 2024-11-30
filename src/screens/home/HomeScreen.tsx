import React from "react"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import NavigationService from "services/NavigationService"

const HomeScreen = () => {
    const handleEnter = () => {
        NavigationService.navigate("Login")
    }

    return (
        <View className="flex-1 bg-background flex">
            <SafeAreaView className="flex-1 bg-background flex items-center">
                <Image
                    source={require("../../../assets/top.png")}
                    className="absolute top-0"
                    style={{ width: "100%", height: 350 }}
                />
                <View className="flex-4 justify-end flex items-center">
                    <Image source={require("../../../assets/cupcake.png")} style={{ width: 250, height: 250 }} />
                </View>
                <View className="flex-2 flex  items-center justify-center">
                    <Text className="text-5xl font-bold text-primary">Cupcake Magia</Text>
                    <Text className="text-2xl font-bold text-secondary">Explore nossos deliciosos produtos!</Text>
                </View>
                <View className="flex-2 flex w-full items-center">
                    <View className="flex flex-row w-1/3 h-2 space-x-2">
                        <View className="flex-1 rounded-lg bg-secondary"></View>
                        <View className="flex-3 rounded-lg bg-secondary"></View>
                        <View className="flex-1 rounded-lg bg-secondary"></View>
                    </View>
                    <View className="w-full px-12 mt-3">
                        <TouchableOpacity
                            onPress={() => {
                                handleEnter()
                            }}
                            activeOpacity={0.8}
                            className="w-full h-14 rounded-full bg-primary flex justify-center items-center"
                        >
                            <Text className="font-semibold text-2xl text-secondary">Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text
                        onPress={() => {
                            NavigationService.navigate("Register")
                        }}
                        className="mt-2 text-primary text-lg font-bold"
                    >
                        Não tem uma conta? Cadastre-se!
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen
