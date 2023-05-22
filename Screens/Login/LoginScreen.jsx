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
import styles from "./LoginScreenStyles";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const handleRegistration = () => {
    console.log({ email: email, password: password });
    navigation.navigate("Home");
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
              setIsFocusPassword(false);
            }}
          >
            <View
              style={{
                ...styles.container,
                paddingBottom: isKeyboard ? 32 : 144,
              }}
            >
              <Text style={styles.title}>Войти</Text>
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
                onPress={() => navigation.navigate("Registration")}
              >
                Нет аккаунта? Зарегистрироваться
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;
