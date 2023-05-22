import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/Registration/RegistrationScreen";
import LoginScreen from "./Screens/Login/LoginScreen";
import Home from "./Screens/Home/Home";
import { Image, TouchableOpacity } from "react-native";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          // options={({ navigation }) => ({
          //   title: "Публикации",
          //   headerStyle: {
          //     backgroundColor: "#fff",
          //     borderBottomColor: "#212121",
          //     borderBottomWidth: 1,
          //   },
          //   headerTintColor: "#212121",
          //   headerTitleAlign: "center",
          //   headerTitleStyle: {
          //     fontWeight: 500,
          //     fontSize: 17,
          //     lineHeight: 22,
          //   },
          //   headerRight: () => (
          //     <TouchableOpacity
          //       style={{ padding: 10 }}
          //       onPress={() => navigation.navigate("Login")}
          //     >
          //       <Image source={require("./assets/log-out.png")} />
          //     </TouchableOpacity>
          //   ),
          //   headerLeft: null,
          // })}
          options={{
            headerShown: false
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
