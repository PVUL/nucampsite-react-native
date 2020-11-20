import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Card, Icon } from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'
import { COMMENTS } from '../shared/comments'

const Campsite = ({ campsite, isFavorite, toggleFavorite }) =>
  <>
    {!!campsite ? (
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
    ) : (
      <View />
    )}
  </>

const Comment = ({ comment }) =>
  <View style={{ margin: 10 }}>
    <Text style={{ fontSize: 14 }}>{comment.text}</Text>
    <Text style={{ fontSize: 12 }}>{comment.rating} Stars</Text>
    <Text style={{ fontSize: 12 }}> - {comment.author}, {comment.date}</Text>
  </View>

const Comments = ({ comments }) =>
  <Card title='Comments'>
    {comments.map(c => <Comment comment={c} key={c.id} />)}
  </Card>

const getCampsite = campsiteId => CAMPSITES.find(c => c.id === campsiteId)
const getComments = campsiteId => COMMENTS.filter(c => c.campsiteId === campsiteId)

export class CampsiteInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false
    }
  }

  toggleFavorite = () => this.setState({ isFavorite: !this.state.isFavorite })

  static navigationOptions = { title: 'Campsite Information' }

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId')

    return (
      <ScrollView>
        <Campsite
          campsite={getCampsite(campsiteId)}
          isFavorite={this.state.isFavorite}
          toggleFavorite={this.toggleFavorite}
        />
        <Comments comments={getComments(campsiteId)} />
      </ScrollView>
    )
  }
}
