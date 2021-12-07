import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'white'
    }}>
      <Animated.View style={{
        backgroundColor: 'lightblue',
        height: 150,
        width: 150,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'green',
        opacity
      }} />
      <TouchableOpacity
        onPress={fadeIn}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 10
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>fadeIn!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={fadeOut}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 10
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>fadeOut!</Text>
      </TouchableOpacity>
    </View>
  )
}
