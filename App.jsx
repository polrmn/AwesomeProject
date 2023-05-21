import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/Registration/RegistrationScreen';
import LoginScreen from './Screens/Login/LoginScreen';

export default function App() {
  return (
    <>
      <RegistrationScreen/>
      {/* <LoginScreen /> */}
    </>
  );
}

