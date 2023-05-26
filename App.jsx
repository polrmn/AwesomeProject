import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/Registration/RegistrationScreen";
import LoginScreen from "./Screens/Login/LoginScreen";
import Home from "./Screens/Home/Home";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Registration">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{
                title: "Коментарі",
                headerTintColor: "#212121",
                headerTitleAlign: "center",
              }}
            />
            <MainStack.Screen
              name="Map"
              component={MapScreen}
              options={{
                title: "Локація",
                headerTintColor: "#212121",
                headerTitleAlign: "center",
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
