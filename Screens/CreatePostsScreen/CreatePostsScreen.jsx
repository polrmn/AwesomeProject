import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./CreatePostsScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../redux/posts/postThunk";

function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector(state=>state.post.isLoading)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(coords);
    })();
  }, []);

  const makePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo);
  };

  const publishPost = () => {
    // console.log({ photo: photo, title: title, location: location });
    dispatch(createPostThunk({title, location, photo})).unwrap().then(()=>setPhoto(''));
    navigation.navigate("Posts", userLocation);
  };

  if(isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.photo}>
          <Image source={{ uri: photo.uri }} style={styles.image} />
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
        <Ionicons name="location-outline" styles={styles.locationIcon} />
        <TextInput
          placeholder="Місцевість..."
          style={styles.inputPostLocation}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={publishPost}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePostsScreen;
