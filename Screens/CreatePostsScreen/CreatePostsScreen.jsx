import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./CreatePostsScreenStyles";
import { Ionicons } from "@expo/vector-icons";

function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.newImageWrapper}>
        <View style={styles.cameIconWrapper}>
          <Ionicons name="camera" style={styles.cameraIcon} />
        </View>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." style={styles.inputPostTitle} />
      <View style={styles.locationWrapper}>
        <Ionicons name="location-outline" styles={styles.locationIcon} />
        <TextInput
          placeholder="Місцевість..."
          style={styles.inputPostLocation}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePostsScreen;
