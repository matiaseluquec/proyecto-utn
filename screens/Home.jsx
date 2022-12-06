import { View, Text, Pressable, ImageBackground } from 'react-native';
import { styles } from '../styles/styles'
import { AntDesign } from '@expo/vector-icons';


import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={[styles.container, styles.gray ]}>
      <Pressable onPress={()=> navigation.navigate('Form')}>
      <AntDesign name="login" size={150} color="blue"/>
      </Pressable>
    </View>
  )
}

export default Home