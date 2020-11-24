import React from 'react'
import { FlatList } from 'react-native'
import { Tile } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

import { CAMPSITES } from '../shared/campsites'

const DirectoryComponent = ({ navigation: { navigate } }) => {
  const renderDirectoryItem = ({ item }) =>
    <Animatable.View animation='fadeInRightBig' duration={2000}>
      <Tile
        title={item.name}
        caption={item.description}
        imageSrc={require('../assets/images/react-lake.jpg')}
        onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
        featured
      />
    </Animatable.View>

  return (
    <FlatList
      data={CAMPSITES}
      renderItem={renderDirectoryItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const navigationOptions = { title: 'Directory' }

export const Directory = Object.assign(DirectoryComponent, { navigationOptions })
