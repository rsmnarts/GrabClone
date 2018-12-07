import React, { Component } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Container, Content, Text, Icon, View } from 'native-base'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Svg, { Circle } from 'react-native-svg'

const cards = [
	{
		title: 'Car',
		image: require('../img/2/car.png')
	},
	{
		title: 'Bike',
		image: require('../img/2/bike.png')
	},
	{
		title: 'Food',
		image: require('../img/2/food.png')
	}
]

const cardss = [	
	{
		title: 'Delivery',
		image: require('../img/2/delivery.png')
	},
	{
		title: 'Groceries',
		image: require('../img/2/groceries.png')
	},
	{
		title: 'Pulsa',
		image: require('../img/2/pulse.png')
	}
]

const foods = [
	{
		title: 'Mie Aceh',
		reviews: '9973',
		desc: 'Mie Aceh adalah masakan mie pedas khas Aceh di Indonesia...',
		img: require('../img/2/food/1.png'),
		like: '1287'
	},
	{
		title: 'Nasi Padang',
		reviews: '16',
		desc: 'Nasi Padang adalah makanan yang paling populer di...',
		img: require('../img/2/food/2.png'),
		like: '1727'
	},
	{
		title: 'Bakso',
		reviews: '1.2',
		desc: 'Bakso atau baso adalah jenis bola daging yang lazim ditemukan...',
		img: require('../img/2/food/3.png'),
		like: '712'
	},
	{
		title: 'Sate (KBBI: Satai)',
		reviews: '1.2',
		desc: 'Sate (KBBI: Satai) adalah makanan yang terbuat dari potongan...',
		img: require('../img/2/food/4.png'),
		like: '162'
	},
	{
		title: 'Mie Aceh Special',
		reviews: '11276',
		desc: 'Mie Aceh adalah masakan mie pedas dengan irisan daging...',
		img: require('../img/2/food/5.png'),
		like: '172'
	}
]

export default class HomepageScreen extends Component {
	render(){
		return (
			<Container style={{ backgroundColor: '#F7F7F7' }}>
				<Content>
					<View style={ styles.container }>
		        <View style={ styles.containerTop }>
		          <ImageBackground resizeMode='cover' source={require('../img/2/afternoon.jpg')} style={styles.imgBgTop}>
		            <View style={{ flex: 0.10, margin: 15 }}>
		              <TouchableOpacity>
		                <Svg height='50' width='50'>
		                  <Circle style={styles.shadowAvatarHomepage} cx='50%' cy='50%' r='40%' fill='white' />
		                </Svg>
		              </TouchableOpacity>
		            </View>
		            <View style={{ flex: 0.90,justifyContent: 'center', alignItems: 'center'}}>
		              <Text style={{ fontSize: 14 }}>Good Afternoon</Text>
		              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What do you want to do today?</Text>
		            </View>
		          </ImageBackground>
		        </View>
		        <View style={ styles.containerCenterTop }>
		          <View style={ styles.cardTop }>
		            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
		              <Text style={{ fontSize: 16, fontWeight: 'bold', paddingRight: 80 }}>OVO Balance</Text>
		              <View style={styles.saldo}>
		                <Text style={{ fontSize: 12 }}>Rp </Text>
		                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>3.999 <Icon name='angle-right' type='FontAwesome' style={{ fontSize: 20 }}/></Text>
		              </View>
		            </View>
		            <View style={styles.lineStyle}/>
		            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
		              <View style={{ flex: 1 }}>
		                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
		                  <Image source={require('../img/2/1.png')}/>
		                  <Text style={{ padding: 5}}> Pay </Text>
		                </View>
		              </View>
		              <View style={{ flex: 1 }}>
		                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
		                  <Image source={require('../img/2/2.png')}/>
		                  <Text> Top Up </Text>
		                </View>
		              </View>
		              <View style={{ flex: 1 }}>
		                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
		                  <Image source={require('../img/2/3.png')}/>
		                  <Text> Rewards </Text>
		                </View>
		              </View>
		            </View>
		          </View>
		        </View>
		        <View style={ styles.containerExploreCenter }>
		          <View style={ styles.titleExploreGrab }>
		            <Text style={{ fontSize: 25 }}> Explore Grab </Text>
		            <Text style={{ fontSize: 12 }}>   Check out all 6 services </Text>
		          </View>
		          <View style={ styles.cardSixBottom }>
		            {cards.map((card, key) => 
	            		<View style={ styles.gridCardSixBottom } key={key}>
			              <Image style={ styles.imgGridCardSixBottom} source={card.image} />
			              <Text style={ styles.textGridCardSixBottom}>{card.title}</Text>
			            </View>
	            	)}
		          </View>
		          
		          <View style={ styles.cardSixBottom }>
		            {cardss.map((card, key) => 
	            		<View style={ styles.gridCardSixBottom } key={key}>
			              <Image style={ styles.imgGridCardSixBottom} source={card.image} />
			              <Text style={ styles.textGridCardSixBottom}>{card.title}</Text>
			            </View>
	            	)}
		          </View>
		        </View>

		        <View style={[ styles.containerCardBottom, { marginBottom: 50 }]}>
		          <View style={ styles.titleExploreGrab }>
		            <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 5 }}> GrabFood's Best Eats </Text>
		          </View>
		          <View style={{ paddingBottom: 10 }}>
			          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ padding: 10, paddingBottom: 10 }} >
			          	{foods.map((food, key) => 
					          <View style={styles.cardFoods} key={key}>
					          	<View style={{ flex:1 }}>
					          		<Image source={food.img} style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}/>
					          	</View>
					          	<View style={{ flex:1, bottom: 20, padding: 15, paddingBottom: 0 }}>
					          		<Text style={{ fontWeight: 'bold', fontSize: 20, bottom: 5 }}>{food.title}</Text>
			          					<View style={{ marginBottom: 5 }}>
					          				<Text style={{ fontSize: 12, color: 'lightgrey' }}>
					          					<Icon name='star' type='FontAwesome' style={{ fontSize: 11, color: 'gold' }}/>
						          				<Icon name='star' type='FontAwesome' style={{ fontSize: 11, color: 'gold' }}/>
						          				<Icon name='star' type='FontAwesome' style={{ fontSize: 11, color: 'gold' }}/>
						          				<Icon name='star' type='FontAwesome' style={{ fontSize: 11, color: 'gold' }}/>
						          				<Icon name='star' type='FontAwesome' style={{ fontSize: 11, color: 'gold' }}/>  {food.reviews} reviews
					          				</Text>
				          				</View>
					          		<Text style={{ color: 'grey' }}>{food.desc}</Text>
					          		<View style={{ alignItems: 'center', justifyContent: 'center'}}>
					          			<Text style={{ color: '#00A5CF', fontWeight: 'bold', fontSize: 20, margin: 10 }}>Check it Out</Text>
					          		</View>
					          		<View style={{ borderWidth: 0.5, borderColor: 'lightgrey', marginVertical: 7  }} />
					          		<Text style={{ fontWeight: 'bold', color: 'lightgrey', fontSize: 16, margin: 10, marginBottom: 0 }}><Icon name='thumbs-o-up' type='FontAwesome' style={{ fontSize: 16 }} /> {food.like}</Text>
					          	</View>
					          </View>			          		
		          		)}
			          </ScrollView>
			         </View>
		        </View>
		      </View>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7'
  },
  containerTop: {
    flex: 4,
    width: '100%',
    height: '100%'
  },
  imgBgTop: {
    width: '100%',
    height: '130%'
  },
  cardTop: {
  	top: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 100,
      height: 100
    },
    elevation: 3,
    shadowOpacity: 1.0
  },
  saldo: {
    flexDirection: 'row'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: 7
  },
  containerExploreCenter: {
    flex: 6,
    marginTop: 60,
    marginBottom: 30
  },
  containerCardBottom: {
    flex: 6,
    marginBottom: 30
  },
  titleExploreGrab: {
    flex: 2,
    width: 320,
    alignItems: 'flex-start',
  },
  cardSixBottom: {
    flex: 3,
    flexDirection: 'row'
  },
  gridCardSixBottom: {
  	padding: 10,
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    elevation: 2,
    shadowOpacity: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  imgGridCardSixBottom: {
    width: 50,
    height: 50,
    margin: 5
  },
  textGridCardSixBottom: {
    fontSize: 14,
    marginBottom: 2
  },
  avatarHomepage: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 100,
      height: 100
    },
    elevation: 3,
    shadowOpacity: 1.0
  },
  cardFoods: {
  	height: '95%',
  	backgroundColor: '#FFF',
  	borderRadius: 10,
  	maxWidth: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 100,
      height: 100
    },
    elevation: 3,
    shadowOpacity: 1.0,
    marginHorizontal: 10
  }
})