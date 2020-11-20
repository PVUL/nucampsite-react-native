import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'
import { COMMENTS } from '../shared/comments'

const Campsite = ({ campsite }) =>
  <>
    {!!campsite ? (
      <Card
        featuredTitle={campsite.name}
        image={require('../assets/images/react-lake.jpg')}
      >
        <Text style={{ margin: 10 }}>
          {campsite.description}
        </Text>
      </Card>
    ) : (
      <View />
    )}
  </>

const Comment = ({ item: comment }) =>
  <View style={{ margin: 10 }}>
    <Text style={{ fontSize: 14 }}>{comment.text}</Text>
    <Text style={{ fontSize: 12 }}>{comment.rating} Stars</Text>
    <Text style={{ fontSize: 12 }}> - {comment.author}, {comment.date}</Text>
  </View>

const Comments = ({ comments }) =>
  <Card title='Comments'>
    <FlatList
      data={comments}
      renderItem={Comment}
      keyExtractor={item => item.id.toString()}
    />
  </Card>

const getCampsite = campsiteId => CAMPSITES.find(c => c.id === campsiteId)
const getComments = campsiteId => COMMENTS.filter(c => c.campsiteId === campsiteId)

export class CampsiteInfo extends React.Component {
  static navigationOptions = { title: 'Campsite Information' }

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId')

    return (
      <ScrollView>
        <Campsite campsite={getCampsite(campsiteId)} />
        <Comments comments={getComments(campsiteId)} />
      </ScrollView>
    )
  }
}
