/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View,Button, Text, TouchableOpacity } from 'react-native';
import { NativeModules, Alert } from 'react-native';
const { SdkAARModule } = NativeModules; 

const handleInitializeAAR = async () => {
  try {
    const result = await SdkAARModule.initMobileKycSDK();
    Alert.alert("Success", result);
    console.log("AAR Initialization Result:", result);
  } catch (error: any) {
    Alert.alert("Error", error.message);
    console.error("AAR Initialization Error:", error.code, error.message);
  }
};

const handleStartKYCAction = async () => {
  try {
    const result = await SdkAARModule.startKYCProcess();
    Alert.alert("Success", result);
    console.log("AAR Action Result:", result);
  } catch (error:any) {
    Alert.alert("Error", error.message);
    console.error("AAR Action Error:", error.code, error.message);
  }
};


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const handleStartKYC = () => {
    handleInitializeAAR();
    handleStartKYCAction();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={handleStartKYC}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start KYC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up full screen height
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#F3F4F6', // Light gray background
    // For dark mode, you would conditionally apply a different background here
    // based on a dark mode state, similar to your original useColorScheme idea.
  },
  card: {
    padding: 24, // Equivalent to p-6
    backgroundColor: 'white',
    borderRadius: 8, // Equivalent to rounded-lg
    shadowColor: '#000', // For shadow-xl
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, // For Android shadow
  },
  button: {
    paddingVertical: 12, // Equivalent to py-3
    paddingHorizontal: 24, // Equivalent to px-6
    backgroundColor: '#2563EB', // Equivalent to bg-blue-600
    borderRadius: 8, // Equivalent to rounded-lg
    shadowColor: '#000', // For shadow-md
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
    // No direct equivalent for hover/focus states in React Native styles,
    // but TouchableOpacity provides touch feedback automatically.
  },
  buttonText: {
    color: 'white', // Equivalent to text-white
    fontWeight: '600', // Equivalent to font-semibold
    textAlign: 'center',
  },
  
});

export default App;
