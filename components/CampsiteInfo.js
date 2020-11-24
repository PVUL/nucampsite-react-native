import React, { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
  Alert,
  PanResponder,
} from 'react-native'
import { Card, Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

import { CAMPSITES } from '../shared/campsites'
import { COMMENTS } from '../shared/comments'

ANIMATION_DELAY = 500
ANIMATION_DURATION = 1000

const Campsite = ({ campsite, isFavorite, toggleFavorite }) => {
  const recognizeDrag = ({ dx }) => dx < -200

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDrag(gestureState)) {
        Alert.alert(
          'Add Favorite',
          `Are you sure you wish to add ${campsite.name} to favorites?`,
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: toggleFavorite,
            }
          ],
          { cancelable: false }
        );
      }
      return true;
    }
  })

  return (
    <>
      {!!campsite ? (
        <Animatable.View
          animation='fadeInDown'
          duration={ANIMATION_DURATION}
          delay={ANIMATION_DELAY}
          {...panResponder.panHandlers}
        >
          <Card
            featuredTitle={campsite.name}
            image={require('../assets/images/react-lake.jpg')}
          >
            <Text style={{ margin: 10 }}>
              {campsite.description}
            </Text>
            <Icon
              name={isFavorite ? 'heart' : 'heart-o'}
              type='font-awesome'
              color='#f50'
              raised
              reverse
              onPress={toggleFavorite}
            />
          </Card>
        </Animatable.View>
      ) : (
        <View />
      )}
    </>
  )
}

const Comment = ({ comment }) =>
  <View style={{ margin: 10 }}>
    <Text style={{ fontSize: 14 }}>{comment.text}</Text>
    <Text style={{ fontSize: 12 }}>{comment.rating} Stars</Text>
    <Text style={{ fontSize: 12 }}> - {comment.author}, {comment.date}</Text>
  </View>

const Comments = ({ comments }) =>
  <Animatable.View animation='fadeInUp' duration={ANIMATION_DURATION} delay={ANIMATION_DELAY}>
    <Card title='Comments'>
      {comments.map(c => <Comment comment={c} key={c.id} />)}
    </Card>
  </Animatable.View>

const getCampsite = campsiteId => CAMPSITES.find(c => c.id === campsiteId)
const getComments = campsiteId => COMMENTS.filter(c => c.campsiteId === campsiteId)

const CampsiteInfoComponent = ({ navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const campsiteId = navigation.getParam('campsiteId')

  return (
    <ScrollView>
      <Campsite
        campsite={getCampsite(campsiteId)}
        isFavorite={isFavorite}
        toggleFavorite={() => setIsFavorite(!isFavorite)}
      />
      <Comments comments={getComments(campsiteId)} />
    </ScrollView>
  )
}

const navigationOptions = { title: 'Campsite Information' }

export const CampsiteInfo = Object.assign(CampsiteInfoComponent, { navigationOptions })
