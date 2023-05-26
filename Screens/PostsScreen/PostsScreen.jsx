import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PostsScreenStyles";
import { useRoute } from "@react-navigation/native";
import {useSelector} from 'react-redux'

function PostsScreen({navigation}) {
  const {params: location} = useRoute();
  const avatar = useSelector(state => state.auth.userAvatar)
  const name = useSelector(state => state.auth.name)
  const email = useSelector(state => state.auth.email)
  console.log(name);

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={{uri: avatar}}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
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
              onPress={() => navigation.navigate('Comments')}
            />
            <Text style={styles.postDetailsText}>0</Text>
          </View>
          <View style={styles.postDetailsWrapper}>
            <Ionicons name="location-outline" style={styles.postDetailsIcon} onPress={()=>navigation.navigate('Map', location)}/>
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
