import React from "react";
import { Image, Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PostsScreenStyles";
import { useRoute } from "@react-navigation/native";
import {useSelector} from 'react-redux'

const PostItem = ({ post, navigation, userLocation }) => (
  <View>
    <Image source={post.photo} style={styles.postImage} />
    <Text style={styles.postTitle}>{post.title}</Text>
    <View style={styles.postDetailsWrapper}>
      <View style={styles.postDetailsWrapper}>
        <Ionicons
          name="chatbubble-outline"
          style={styles.postDetailsIcon}
          onPress={() =>
            navigation.navigate("Comments", { postId: post.postId, photo: post.photo })
          }
        />
        <Text style={styles.postDetailsText}>0</Text>
      </View>
      <View style={styles.postDetailsWrapper}>
        <Ionicons
          name="location-outline"
          style={styles.postDetailsIcon}
          onPress={() => navigation.navigate("Map", userLocation)}
        />
        <Text style={[styles.postDetailsText, styles.textUnderlined]}>
          {post.location}
        </Text>
      </View>
    </View>
  </View>
);

function PostsScreen({navigation}) {
  const { params: userLocation } = useRoute();
  const avatar = useSelector(state => state.auth.userAvatar)
  const name = useSelector(state => state.auth.name)
  const email = useSelector(state => state.auth.email)
  const posts = useSelector(state=>state.post.posts)
  console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image source={{ uri: avatar }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PostItem
              post={item}
              navigation={navigation}
              userLocation={userLocation}
            />
          )}
        />
      )}
      {/* <View>
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
              onPress={() => navigation.navigate("Comments")}
            />
            <Text style={styles.postDetailsText}>0</Text>
          </View>
          <View style={styles.postDetailsWrapper}>
            <Ionicons
              name="location-outline"
              style={styles.postDetailsIcon}
              onPress={() => navigation.navigate("Map", location)}
            />
            <Text style={[styles.postDetailsText, styles.textUnderlined]}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View> */}
    </View>
  );
}

export default PostsScreen;
