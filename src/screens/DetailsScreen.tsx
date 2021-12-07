import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PropsStackScreenDetails extends StackScreenProps<RootStackParams, 'DetailsScreen'> { };
type detailScreenProps = StackNavigationProp<RootStackParams>;

const screenHeight = Dimensions.get('screen').height;

export const DetailsScreen = ({ route }: PropsStackScreenDetails) => {
  const navigation = useNavigation<detailScreenProps>();
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { isLoading, moviFull, cast } = useMovieDetails(movie.id);
  return (
    <ScrollView>
      <View style={styles.ContainerImage}>
        <Image
          source={{ uri }}
          style={styles.posterImage}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subTtitle}>{movie.original_title}</Text>
      </View>
      <View>
        {
          isLoading
            ? <ActivityIndicator size={20} color="grey" style={{ justifyContent: 'center', marginTop: 30 }} />
            : <MovieDetails movieFull={moviFull!} cast={cast} />
        }
      </View>
      <View style={styles.bntGoback}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  ContainerImage: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  },
  posterImage: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  containerTitle: {
    marginTop: 20,
    marginHorizontal: 10
  },
  title: {
    color: 'black',
    fontSize: 16,
    opacity: 0.8
  },
  subTtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  bntGoback: {
    position: 'absolute',
    top: 20,
    left: 10,
    elevation: 9
  }
});
{/* <Button
    onPress={() => navigation.navigate('HomeScreen')}
    title="Ir a DetailScreen"
  /> */}