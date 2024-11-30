import { CommonActions } from "@react-navigation/native"

let _navigator: any

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef
}

function navigate(routeName: any, params?: any) {
    _navigator.navigate(routeName, params)
}

function goBack() {
    _navigator.dispatch(CommonActions.goBack())
}

function reset(routeName: any, params?: any) {
    _navigator.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName, params }]
        })
    )
}

function getCurrentRoute() {
    return _navigator.getCurrentRoute()
}

export default {
    navigate,
    setTopLevelNavigator,
    goBack,
    reset,
    getCurrentRoute
}
