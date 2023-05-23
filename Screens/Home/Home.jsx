import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: { backgroundColor: "#fff" }, showLabel: false }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публикации",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#212121",
            borderBottomWidth: 1,
          },
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={require("../../assets/log-out.png")} />
            </TouchableOpacity>
          ),
          headerLeft: null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="grid-outline"
                  style={{ width: 24, height: 24, fontSize: 24 }}
                />
              </View>
            ) : (
              <Ionicons
                name="grid-outline"
                style={{ width: 24, height: 24, fontSize: 24 }}
              />
            ),
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#212121",
            borderBottomWidth: 1,
          },
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="add"
                  style={{ width: 24, height: 24, fontSize: 24 }}
                />
              </View>
            ) : (
              <Ionicons
                name="add"
                style={{ width: 24, height: 24, fontSize: 24 }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="person-outline"
                  style={{ width: 24, height: 24, fontSize: 24 }}
                />
              </View>
            ) : (
              <Ionicons
                name="person-outline"
                style={{ width: 24, height: 24, fontSize: 24 }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
