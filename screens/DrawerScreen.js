import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Svg, { Circle } from 'react-native-svg'
import { Icon } from 'native-base'

import HomepageScreen from './HomepageScreen'
import PaymentScreen from './PaymentScreen'
import ScheduledScreen from './ScheduledScreen'

export default class App extends Component {
	render() {
		return (
			<MyApp />
		)
	}
}

const CustomDrawerContentComponent = (props) => (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={styles.containerTop}>
			<View style={{ flex: 6, width: '100%' }}>
				<Svg height='70' width='70'>
					<Circle style={styles.shadowAvatarHomepage} cx='50%' cy='50%' r='50%' fill='white' />
				</Svg>
			</View>
			<View style={{ flex: 4}}>
				<Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold' }}>Risman</Text>
				<Text style={{ color: 'white', fontSize: 14, right: 3 }}> 34 Points | Rewards Member <Icon name='angle-right' type='FontAwesome' style={{ color: 'white', fontSize: 16 }}/></Text>
			</View>
		</View>
		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
		Homepage: {
			screen: HomepageScreen,
			navigationOptions: () => ({
				title: 'Home'
			})
		},
		Payment: {
			screen: PaymentScreen,
			navigationOptions: () => ({
				title: 'Cards'
			})
		},
		Scheduled: {
			screen: ScheduledScreen,
			navigationOptions: () => ({
				title: 'Scheduled'
			})			
		}
	},
	{
		contentComponent: CustomDrawerContentComponent,
		initialRouteName: 'Homepage',
		contentOptions: {
			activeTintColor: '#00B14F',
			itemsContainerStyle: {
				marginVertical: 0
			}
		}
})

const MyApp = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerTop: {
		backgroundColor: '#00B14F',
		padding: 25,
		height: 200,
		justifyContent: 'space-between'
	}
});

