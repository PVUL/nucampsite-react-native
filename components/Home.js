import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

import { CAMPSITES } from '../shared/campsites'
import { PROMOTIONS } from '../shared/promotions'
import { PARTNERS } from '../shared/partners'

const renderItem = item =>
  <>
    {!!item ? (
      <Card
        featuredTitle={item.name}
        image={require('../assets/images/react-lake.jpg')}
      >
        <Text style={{ margin: 10 }}>
          {item.description}
        </Text>
      </Card>
    ) : (
      <View />
    )}
  </>

const featured = items => items.find(i => i.featured)

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campsites: CAMPSITES,
      promotions: PROMOTIONS,
      partners: PARTNERS,
    }
  }

  static navigationOptions = { title: 'Home' }

  render() {
    const {
      campsites,
      promotions,
      partners,
    } = this.state

    return(
      <ScrollView>
        {renderItem(featured(campsites))}
        {renderItem(featured(promotions))}
        {renderItem(featured(partners))}
      </ScrollView>
    )
  }
}
