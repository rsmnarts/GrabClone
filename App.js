/**
 * Created By @rsmnarts
 * Grab Clone
 */

import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import DrawerScreen from './screens/DrawerScreen'

const AppNavigator = createStackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: () => ({
				header: null
			}),
		},
		Drawer: {
			screen: DrawerScreen,
			navigationOptions: () => ({
				header: null
			})
		}
	},
	{
		initialRouteName: 'Login'
	}
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
	render() {
		return (
			<AppContainer />
		)
	}
}