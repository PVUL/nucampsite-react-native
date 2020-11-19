import React, { Component, useState } from 'react'
import {View} from 'react-native'

import { Directory } from './Directory.js'
import { CAMPSITES } from '../shared/campsites'
import { CampsiteInfo } from './CampsiteInfo.js'

const INITIAL_CAMPSITE_ID = 0

export const Main = () => {
  const [selectedCampsite, setSelectedCampsite] = useState(CAMPSITES[INITIAL_CAMPSITE_ID])

  const handlePress = campsiteId => {
    setSelectedCampsite(CAMPSITES.find(c => c.id === campsiteId))
  }

  return (
    <View style={{ flex: 1 }}>
      <Directory
        campsites={CAMPSITES}
        onPress={handlePress}
      />
      <CampsiteInfo campsite={selectedCampsite} />
    </View>
  )
}
