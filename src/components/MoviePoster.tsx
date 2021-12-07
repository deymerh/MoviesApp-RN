import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Movie } from '../interfaces/movieDB.interface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

// interface PropsNavigation extends NativeStackScreenProps<any, any> { };
type homeScreenProps = StackNavigationProp<RootStackParams>;
interface PropsMovie {
  movie: Movie,
  width?: number,
  height?: number
}

export const MoviePoster = ({ movie, width = 300, height = 420, }: PropsMovie) => {
  const navigation = useNavigation<homeScreenProps>();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 10,
        paddingHorizontal: 7
      }}
      onPress={() => navigation.navigate('DetailsScreen', movie)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: 'pink',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    borderRadius: 25
  }
});