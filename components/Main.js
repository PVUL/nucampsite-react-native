import React, { Component, useState } from 'react'
import { Platform, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { Directory } from './Directory.js'
import { CampsiteInfo } from './CampsiteInfo.js'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

const INITIAL_CAMPSITE_ID = 0

const DirectorNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: 'Directory',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    }
  }
)

const AppNavigator = createAppContainer(DirectorNavigator)

export const Main = () => {
  // const [selectedCampsite, setSelectedCampsite] = useState(CAMPSITES[INITIAL_CAMPSITE_ID])

  // const handlePress = campsiteId => {
  //   setSelectedCampsite(CAMPSITES.find(c => c.id === campsiteId))
  // }

  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
      <AppNavigator />
    </View>
  )
}
