import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem/'
//index might work'


export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
      name = {"Model 3"}
      tagline = {"Order Online For"}
      tagLineCTA = {"Touchless Delivery"}
      image = {require('./assets/Model3.jpeg')}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
