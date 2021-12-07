import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movieFull.interface';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull,
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View style={{ marginHorizontal: 10, paddingBottom: 20 }}>
      {/* Details */}
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="star-outline" size={20} color="grey" />
          <Text style={{ color: 'black', marginLeft: 10, }}>{movieFull.vote_average}</Text>
          <Text style={{ color: 'black', marginLeft: 5 }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>
      {/* Casting */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Historia: </Text>
        <Text style={{ color: 'black' }}>{movieFull.overview}</Text>
      </View>
      {/* Presupuesto */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Presupuesto:</Text>
        <Text style={{ color: 'black' }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
      </View>
      {/* Presupuesto */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Actores:</Text>
        <FlatList
          data={cast}
          renderItem={({ item }: any) => (
            <CastItem actor={item} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  )
}
