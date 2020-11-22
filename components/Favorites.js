import React from 'react'
import { Text, ScrollView, FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'

const FavoritesComponent = ({ navigation: { navigate } }) => {
  const renderFavoritesItem = ({ item }) =>
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{ source: require('../assets/images/react-lake.jpg') }}
    />

  return (
    <FlatList
      data={CAMPSITES}
      renderItem={renderFavoritesItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const navigationOptions = { title: 'Favorites' }

export const Favorites = Object.assign(FavoritesComponent, { navigationOptions })
