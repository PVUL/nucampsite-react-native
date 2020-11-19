import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

export const Directory = (props) => {

  const renderDirectoryItem = ({ item }) =>
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{ source: require('../assets/images/react-lake.jpg') }}
      onPress={() => props.onPress(item.id)}
    />

  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}
