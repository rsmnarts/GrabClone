import React, { Component } from 'react'
import { Container, Header, Left, Body, Button, Content, Text, Icon, View, Card, CardItem, Footer } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

export default class ScheduledScreen extends Component {
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Header style={{ backgroundColor: '#33C066' }}>
					<Left style={{ maxWidth: 70 }}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Icon name='angle-left' type='FontAwesome' style={{ fontSize: 25, color: '#FFF' }}/>
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}> Scheduled </Text>
					</Body>
				</Header>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Icon name='clock' type='Feather' style={{ color: '#BFC6C7', fontWeight: 'bold', fontSize: 70 }} />
					<Text style={{ color: '#BFC6C7', fontWeight: 'bold', fontSize: 20 }}>No advanced bookings yet.</Text>
					<Text style={{ color: '#BFC6C7', fontWeight: 'bold', fontSize: 20 }}>Make one today!</Text>
				</View>
			</Container>
		)
	}
}