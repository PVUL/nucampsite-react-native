import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'

const renderCampsite = (campsite) =>
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


export const CampsiteInfo = (props) =>
  <>
    {renderCampsite(props.campsite)}
  </>
