import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./CreatePostsScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";

function CreatePostsScreen({navigation}) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const makePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo.uri);
  };

  const publishPost = () => {
    console.log({ photo: photo, title: title });
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.photo}>
          <Image source={{ uri: photo }} style={styles.image} />
        </View>
      ) : (
        <Camera style={styles.camera} ref={setCamera}>
          <TouchableOpacity style={styles.cameIconWrapper} onPress={makePhoto}>
            <Ionicons name="camera" style={styles.cameraIcon} />
          </TouchableOpacity>
        </Camera>
      )}
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput
        placeholder="Назва..."
        style={styles.inputPostTitle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <View style={styles.locationWrapper}>
        <Ionicons name="location-outline" styles={styles.locationIcon} onPress={navigation.navigate('Posts')}/>
        <TextInput
          placeholder="Місцевість..."
          style={styles.inputPostLocation}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={publishPost}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePostsScreen;
