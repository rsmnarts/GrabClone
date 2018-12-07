import React, { Component } from 'react'
import { Container, Header, Left, Body, Button, Content, Text, Icon, View, Card, CardItem, Footer } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

export default class PaymentScreen extends Component {
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Header style={{ backgroundColor: '#FFF' }}>
					<Left style={{ maxWidth: 70 }}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Icon name='angle-left' type='FontAwesome' style={{ fontSize: 25 }}/>
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}> Payment Methods </Text>
					</Body>
				</Header>
				<Header style={{ backgroundColor: '#FFF' }}>
					<Left style={{ maxWidth: 70 }}>
						<View style={{ borderColor: 'grey', borderWidth: 1, padding: 5 }}>
							<Text>OVO</Text>
						</View>
					</Left>
					<Body>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}> RP 3.999 </Text>
						<Text style={{ fontSize: 14, color: '#BFC6C7' }}> Primary </Text>
					</Body>
				</Header>
				<Content style={{ height: '100%', flex: 1 }}>
					<View style={{ borderColor: '#BFC6C7', borderWidth: 0.2, justifyContent: 'space-around', alignItems: 'center'  }}>
						<Button full info style={{ margin: 15 }}>
							<Text>ADD PAYMENT METHODS</Text>
						</Button>
						<View style={{ flexDirection: 'row', marginBottom: 5  }}>
							<Icon style={{ fontSize: 20, paddingHorizontal: 2 }} name='cc-visa' type='FontAwesome' />
							<Icon style={{ fontSize: 20, paddingHorizontal: 2 }} name='cc-mastercard' type='FontAwesome' />
							<Icon style={{ fontSize: 20, paddingHorizontal: 2 }} name='cc-amex' type='FontAwesome' />
						</View>
					</View>
					
				</Content>
        <View style={{ padding: 5 }}>
        	<Card>
		        <CardItem>
		        	<Left style={{ maxWidth: 70 }}>
		        		<View style={{ backgroundColor: '#1EC76A', borderRadius: 50, padding: 1 }}>
		        			<Icon name='crown' type='MaterialCommunityIcons' style={{ color: '#FFF' }}/>
		        		</View>
		        	</Left>
		          <Body>
		            <Text style={{ fontSize: 15 }}>Rewards Member</Text>
		            <View style={{ flexDirection: 'row'}}>
		            	<Text style={{ fontSize: 12 }}>34 Available Points</Text>
		            	<Text style={{ fontSize: 12, marginLeft:80 }}>Details ></Text>
		            </View>
		            <Text style={{ fontSize: 12 }}>0 My Rewards</Text>
		          </Body>
		        </CardItem>
		      </Card>
        </View>
			</Container>
		)
	}
}