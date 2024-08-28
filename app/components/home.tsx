import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const styles = StyleSheet.create({
  col: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainColor : {
    color: 'rgb(1,174,183)'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flexDirection: 'row'
  },
  title: {
    position: 'absolute',
    bottom: -20,
    color: 'white'
  },
  title2: {
    display: 'flex',
    color: 'rgb(1,174,183)',
  },
  left: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  banner : {
    width: '100%'
  },
  right: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
});

const Home = () => {
  return (
    <TailwindProvider>
    <View>
      <View style={styles.container}>
        <View style={styles.left} >
          <Image source={require('../../assets/images/1.png')} />
          <h1 style={styles.title}>Dieta dimagrante</h1>
        </View>
        <View style={styles.right} >
          <Image source={require('../../assets/images/2.png')} />
          <h1 style={styles.title}>Dieta sportiva</h1>
        </View>
      </View>
      <View style={styles.col}>
        <View style={[styles.container, styles.title2]}>
          <h1>Gli obiettivi</h1>
        </View>
        <View style={styles.container2}>
          <View style={styles.col}>
            <Image source={require('../../assets/images/a.png')} />
            <h1 style={styles.title2}>Mangiare sano</h1>
          </View>
          <View >
            <Image source={require('../../assets/images/b.png')} />
            <h1 style={styles.title2}>Allentamento</h1>
          </View>
          <View >
            <Image source={require('../../assets/images/c.png')} />
            <h1 style={styles.title2}>Benessere</h1>
          </View>
        </View>
      </View>
      <Image style={styles.banner} source={require('../../assets/images/d.png')} />
    </View>
    </TailwindProvider>
  );
};
export default Home;
