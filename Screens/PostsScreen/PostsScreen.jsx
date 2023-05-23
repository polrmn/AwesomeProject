import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PostsScreenStyles";

function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={require("../../assets/user.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/PostImage-default.png")}
          style={styles.postImage}
        />
        <Text style={styles.postTitle}>Лес</Text>
        <View style={styles.postDetailsWrapper}>
          <View style={styles.postDetailsWrapper}>
            <Ionicons
              name="chatbubble-outline"
              style={styles.postDetailsIcon}
            />
            <Text style={styles.postDetailsText}>0</Text>
          </View>
          <View style={styles.postDetailsWrapper}>
            <Ionicons name="location-outline" style={styles.postDetailsIcon} />
            <Text style={[styles.postDetailsText, styles.textUnderlined]}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PostsScreen;
