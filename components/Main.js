import React, { Component, useState } from 'react'
import {View} from 'react-native'

import { Directory } from './Directory.js'
import { CAMPSITES } from '../shared/campsites'
import { CampsiteInfo } from './CampsiteInfo.js'

export const Main = () => {
  const [campsites] = useState(CAMPSITES)
  const [selectedCampsiteId, setSelectedCampsiteId] = useState(0)

  return (
    <View style={{ flex: 1 }}>
      <Directory
        campsites={campsites}
        onPress={campsiteId => setSelectedCampsiteId(campsiteId)}
      />
      <CampsiteInfo
        campsite={campsites.find(c => c.id === selectedCampsiteId)}
      />
    </View>
  )
}
