import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const renderDirectoryItem = ({ item }) =>
  <ListItem
    title={item.name}
    subtitle={item.description}
    leftAvatar={{ source: require('./images/react-lake.jpg') }}
  />

export const Directory = (props) =>
  <FlatList
    data={props.campsites}
    renderItem={renderDirectoryItem}
    keyExtractor={item => item.id.toString()}
  />
