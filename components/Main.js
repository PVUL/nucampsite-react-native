import React, { Component, useState } from 'react'
import { Platform, View, StyleSheet, Image, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import SafeAreaView from 'react-native-safe-area-view'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import { CampsiteInfo } from './CampsiteInfo.js'
import { Directory } from './Directory.js'
import { Home } from './Home.js'
import { Reservation } from './Reservation.js'

const DirectorNavigator = createStackNavigator(
  {
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={navigation.toggleDrawer}
        />
      })
     },
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
  },
)

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: () => <Icon
          name='home'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={navigation.toggleDrawer}
        />
    })
  },
)

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: () => <Icon
          name='tree'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={navigation.toggleDrawer}
        />
    })
  },
)

const CustomDrawerContent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>NuCamp</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Directory: {
      screen: DirectorNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='list'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='tree'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
  },
  {
    drawerBackgroundColor: '#cec8ff',
    contentComponent: CustomDrawerContent,
  }
)

const AppNavigator = createAppContainer(MainNavigator)

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
})

export const Main = () => {
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
      <AppNavigator />
    </View>
  )
}
