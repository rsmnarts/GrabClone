import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon, Button, Text } from 'native-base'

export default class ContainerBottom extends Component {
	render () {
		return (
			<View style={styles.containerBottom}>
				<Text style={[styles.textTitleLogo, {marginTop: 5, fontSize: 15}]}>
					Continue With :
				</Text>
				<View style={styles.containerLogin}>
					<View style={styles.containerFacebookLogin}>
						<Button style={styles.facebookLogin} iconLeft>
							<Icon name='logo-facebook' />
							<Text> Facebook</Text>
						</Button>
					</View>
					<View style={styles.containerGoogleLogin}>
						<Button style={styles.googleLogin} iconLeft>
							<Image source={require('../../img/1/google.png')} class={styles.imgGoogleLogin} />
							<Text style={{ color: '#757575' }}> Google</Text>
						</Button>
					</View>
				</View>
				<View style={[styles.nohpLogin, ]}>
					<TouchableOpacity onPress={ this.props.homeNavigation }>
					<Text>Or   <Text style={{ color: '#488BE4' }}>Use Your Mobile Number</Text></Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textTitleLogo: {
		textAlign: 'center',
		color: '#373B46',
		fontWeight: 'bold',
		fontSize: 18
	},
	containerBottom: {
		flex: 0.3,
		backgroundColor: '#F7F9FB'
	},
	containerLogin: {
		flexDirection: 'row',
		padding: 10,
		margin: 20,
		justifyContent: 'space-around' 
	},
	facebookLogin: {
		backgroundColor: '#4267B2'
	},
	googleLogin: {
		backgroundColor: '#FFF',
		padding: 10
	},
	nohpLogin: {
		alignItems: 'center' 
	}
})