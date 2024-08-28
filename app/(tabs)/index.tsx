import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import SHeader from '../components/sheader';
import Home from '../components/home';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function HomeScreen() {
  return (
    <TailwindProvider>
      <View  style={styles.container}>
      <SHeader></SHeader>
      <Home></Home>
      </View>
    </TailwindProvider>
  );
}


