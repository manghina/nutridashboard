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

const Header = () => {
  return (
    <TailwindProvider>
    <View style={styles.container}>
      <View style={tailwind`flex flex-row bg-teal-400 w-full`}>

        <View>
          <Image source={require('../../assets/images/logo.png')} style={{ height: 40, resizeMode: 'contain' }} />
        </View>

          <View  style={[styles.container, styles.gap]}>
            <Text>Home</Text>
            <Text>Chi Sono</Text>
            <Text>Ricette</Text>
            <Text>Servizi</Text>
            <Text>Contatti</Text>
            <Text>Accesso</Text>
          </View>

      </View>
    </View>
    </TailwindProvider>
  );
};
export default Header;
