import React, { Component } from 'react'
import { Container } from 'native-base'

import ContainerTop from '../components/1/ContainerTop'
import ContainerBottom from '../components/1/ContainerBottom'

export default class LoginScreen extends Component {
	render () {
		return (
			<Container>
			 	<ContainerTop />
        <ContainerBottom homeNavigation={() => this.props.navigation.navigate('Drawer') }/>
			</Container>
		)
	}
}