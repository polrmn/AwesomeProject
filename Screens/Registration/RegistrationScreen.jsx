import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./RegistrationStyles";
import { useDispatch } from "react-redux";
import { registerThunk, loginThunk } from "../../redux/auth/authThunk";
import {uploadUserData} from '../../redux/auth/authSlice'
import {useSelector} from 'react-redux'

function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const dispatch = useDispatch();
  const avatarState = useSelector(state=>state.auth.userAvatar)

  const handleAvatarUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.uri);
    }
  };

  const handleRegistration = () => {
    dispatch(uploadUserData({avatar, name}));
    dispatch(registerThunk({ email, password, name, avatar }))
      .unwrap()
      .then(() => dispatch(loginThunk({email, password})).unwrap().then(()=>navigation.navigate("Home")));
    
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/registerBG.png")}
        style={styles.background}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              setIsKeyboard(false);
              setIsFocusName(false);
              setIsFocusPassword(false);
            }}
          >
            <View
              style={{
                ...styles.container,
                paddingBottom: isKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.avatarWrapper}>
                {avatar && (
                  <Image source={{ uri: avatar }} style={styles.avatarImage} />
                )}
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={handleAvatarUpload}
                >
                  <Image
                    source={require("../../assets/plus.png")}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                placeholder="Логин"
                style={[styles.input, isFocusName && styles.focused]}
                value={name}
                onChangeText={(text) => setName(text)}
                onFocus={() => {
                  setIsFocusName(true);
                  setIsKeyboard(true);
                }}
                onBlur={() => {
                  setIsFocusName(false);
                  setIsKeyboard(false);
                }}
              />
              <TextInput
                placeholder="Адрес электронной почты"
                style={[styles.input, isFocusEmail && styles.focused]}
                value={email}
                onChangeText={(text) => setEmail(text)}
                onFocus={() => {
                  setIsFocusEmail(true);
                  setIsKeyboard(true);
                }}
                onBlur={() => {
                  setIsFocusEmail(false);
                  setIsKeyboard(false);
                }}
              />
              <View
                style={[
                  styles.inputPasswordWrapper,
                  isFocusPassword && styles.focused,
                ]}
              >
                <TextInput
                  placeholder="Пароль"
                  style={styles.intupPassword}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  onFocus={() => {
                    setIsFocusPassword(true);
                    setIsKeyboard(true);
                  }}
                  onBlur={() => {
                    setIsFocusPassword(false);
                    setIsKeyboard(false);
                  }}
                />
                <Text
                  onPress={handleTogglePasswordVisibility}
                  style={styles.toggleVisibilityButton}
                >
                  Показать
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleRegistration}
                style={{
                  ...styles.submitButton,
                  display: isKeyboard ? "none" : "flex",
                }}
              >
                <Text style={styles.submitText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.link,
                  display: isKeyboard ? "none" : "flex",
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Уже есть аккаунт? Войти
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;
