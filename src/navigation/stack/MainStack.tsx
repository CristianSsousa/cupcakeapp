import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import LoginScreen from "screens/login/LoginScreen"
import RegisterScreen from "screens/register/RegisterScreen"
import ResetScreen from "screens/resetPassword/ResetPassword"
import NavigationService from "services/NavigationService"
import HomeScreen from "../../screens/home/HomeScreen"

const Stack = createStackNavigator()
const teste = "   "
export default function MainStack() {
    return (
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Reset" component={ResetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
