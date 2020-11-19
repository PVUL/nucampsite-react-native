import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'

const renderCampsite = campsite =>
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

export class CampsiteInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { campsites: CAMPSITES }
  }

  static navigationOptions = { title: 'Campsite Information' }

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId')

    return (
      <>
        {renderCampsite(this.state.campsites.find(c => c.id === campsiteId))}
      </>
    )
  }
}
