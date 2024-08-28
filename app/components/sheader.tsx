import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import tailwind from 'twrnc';


const styles = StyleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    flexDirection: 'row'
  },
  logo : {
    borderWidth: 1,
    width: '5%',
    height: 40
  },
  routes : {
    gap: 4,
    borderWidth: 1,
    width: '100%',
    height: 40
  },
  gap : {
    gap: 4
  },
  left: {
    display: 'flex',
    width: '50%'
  },
  right: {
    display: 'flex',
    width: '50%'
  },
});

const SHeader = () => {
  return (
    <TailwindProvider>
    <View style={styles.container}>
      <View style={tailwind`flex flex-row bg-teal-400 w-full`}>
        <View style={styles.logo}>
          <Image source={require('../../assets/images/logo.png')} style={{ height: 40, resizeMode: 'contain' }} />
        </View>

          <View  style={[styles.routes, styles.gap]}>

          </View>

      </View>
    </View>
    </TailwindProvider>
  );
};
export default SHeader;
