import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'

const DirectoryComponent = ({ navigation: { navigate } }) => {
  const renderDirectoryItem = ({ item }) =>
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{ source: require('../assets/images/react-lake.jpg') }}
      onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
    />

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
