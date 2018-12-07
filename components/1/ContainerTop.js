/**
 * Created By @rsmnarts
 * Clone Grab Apps
 */

import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { View, Text } from 'native-base';
import Carousel from 'react-native-carousel'
import Svg, { Circle } from 'react-native-svg'

const cards = [
	{
		text: "From doors to destionation with\nSoutheast Asia's largest fleet to drivers",
		image: require('../../img/1/1.png')
	},
	{
		text: "Earn points with dollar spent, and\nenjoy exclusive rewards",
		image: require('../../img/1/2.png')
	},
	{
		text: "Pay with cash, or enjoy the secure\ncashless convenience of GrabPay",
		image: require('../../img/1/3.png')
	}
]

export default class ContainerTop extends Component {

	render() {
		return (
			<View style={styles.containerTopTop}>
		    <Carousel
		    	width={375}
		    	indicatorAtBottom={false}
		    	indicatorColor='#33C066'
		    	inactiveIndicatorColor='#D8D8D8'
		    	indicatorOffset={370}
		    	delay={5000}
		    >
		    	{cards.map((card, key) =>
						<View key={key}>
			        <View style={styles.logoTop}>
				        <Image source={card.image} />
				      </View>
				      <View style={styles.titleLogo}>
				        <Text style={styles.textTitleLogo}>
				         {card.text}
				        </Text>
				      </View>
		  			</View>
		  		)}
		    </Carousel>
		   </View>
		)
	}
}

const styles = StyleSheet.create({
	containerTopTop: {
		flex: 0.7,
    backgroundColor: '#FFFFFF',
	},
  containerTop: {
    flex: 0.7,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTop: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleLogo: {
    marginTop: 30
  },
	textTitleLogo: {
		textAlign: 'center',
		color: '#373B46',
		fontWeight: 'bold',
		fontSize: 18
	},
	containerCaraousel: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
})