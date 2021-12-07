import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBacground } from '../components/GradientBacground';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

interface Props extends NativeStackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRtaed, upcoming, isLoading } = useMovies();
  const { setMainColors } = useContext(GradientContext)
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getColors(uri);
    setMainColors({ primary, secondary });
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <GradientBacground>
      <ScrollView>
        <View style={[styles.container, { marginTop: top + 20, }]}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={300}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>
        <HorizontalSlider
          tilte="Up coming"
          movies={upcoming}
        />
        <HorizontalSlider
          tilte="Populate"
          movies={popular}
        />
        <HorizontalSlider
          tilte="Top"
          movies={topRtaed}
        />
        <HorizontalSlider
          tilte="Top"
          movies={topRtaed}
        />
        <HorizontalSlider
          tilte="Top"
          movies={topRtaed}
        />
      </ScrollView>
    </GradientBacground>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 440
  },
  text: {
    color: 'black'
  }
});