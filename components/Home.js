import React, { useRef, useCallback, useEffect }  from 'react'
import { View, Text, Animated } from 'react-native'
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

const HomeComponent = () => {
  const scale = React.useRef(new Animated.Value(0)).current;

  const animate = React.useCallback(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  React.useEffect(() => {
    animate()
  }, [animate])

  return (
    <Animated.ScrollView style={{ transform: [{ scale }] }}>
      {renderItem(featured(CAMPSITES))}
      {renderItem(featured(PROMOTIONS))}
      {renderItem(featured(PARTNERS))}
    </Animated.ScrollView>
  )
}

const navigationOptions = { title: 'Home' }

export const Home = Object.assign(HomeComponent, { navigationOptions })
