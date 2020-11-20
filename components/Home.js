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

const HomeComponent = () =>
  <ScrollView>
    {renderItem(featured(CAMPSITES))}
    {renderItem(featured(PROMOTIONS))}
    {renderItem(featured(PARTNERS))}
  </ScrollView>

const navigationOptions = { title: 'Home' }

export const Home = Object.assign(HomeComponent, { navigationOptions })
