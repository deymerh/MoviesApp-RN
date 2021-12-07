import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Cast } from '../interfaces/credits.interface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.cast}>
      {
        actor.profile_path && <Image source={{ uri }} style={styles.castImage} />
      }
      <View style={styles.castInfo}>
        <Text style={styles.castName}>{actor.name}</Text>
        <Text style={styles.castCharacter}>{actor.character}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cast: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'grey',
    paddingVertical: 1,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    paddingRight: 15
  },
  castImage: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  castInfo: {
    marginLeft: 5
  },
  castName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  castCharacter: {
    fontSize: 16,
    opacity: 0.7,
    color: 'black',
  },
  text: {
    color: 'black'
  }
});