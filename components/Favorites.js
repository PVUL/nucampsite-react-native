import React from 'react'
import { Text, FlatList, StyleSheet, View, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import { SwipeRow } from 'react-native-swipe-list-view'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { CAMPSITES } from '../shared/campsites'

const FavoritesComponent = ({ navigation: { navigate } }) => {
  const [favorites, setFavorites] = React.useState(CAMPSITES)

  const removeFavorite = campsiteId => setFavorites(favorites.filter(f => f.id !== campsiteId))

  const handleRemove = item => Alert.alert(
    'Remove Favorite?',
    `Are you sure you wish to remove the favorite campsite ${item.name}?`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => removeFavorite(item.id)
      },
    ],
    { cancelable: false }
  )

  const renderFavoritesItem = ({ item }) =>
    <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
      <View style={styles.deleteView}>
        <TouchableOpacity
          style={styles.deleteTouchable}
          onPress={() => handleRemove(item)}
        >
          <Text style={styles.deleteText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('../assets/images/react-lake.jpg') }}
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
        />
      </View>
    </SwipeRow>

  return (
    <FlatList
      data={favorites}
      renderItem={renderFavoritesItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  deleteView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    width: 100,
  },
})

const navigationOptions = { title: 'Favorites' }

export const Favorites = Object.assign(FavoritesComponent, { navigationOptions })
