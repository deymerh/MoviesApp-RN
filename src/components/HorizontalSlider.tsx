import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieDB.interface';

interface Props {
  tilte?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ movies, tilte }: Props) => {
  return (
    <View style={styles.container}>
      {(tilte) && (<Text style={styles.title}>{tilte}</Text>)}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});