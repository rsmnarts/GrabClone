import React, { Component } from 'react'
import { StyleSheet, View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator, withNavigation, DrawerActions } from 'react-navigation'
import { Icon } from 'native-base'
import Svg, { Circle } from 'react-native-svg'

class Homepage extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
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
              <Text style={{ fontSize: 16, fontWeight: 'bold', paddingRight: 100 }}>OVO Balance</Text>
              <View style={styles.saldo}>
                <Text style={{ fontSize: 12 }}>Rp</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>3.999  <Icon name='angle-right' type='FontAwesome' style={{ fontSize: 20 }}/></Text>
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
        <View style={ styles.containerBottom }>
          <View style={ styles.titleExploreGrab }>
            <Text style={{ fontSize: 30 }}> Explore Grab </Text>
            <Text style={{ fontSize: 12 }}>   Check out all 6 services </Text>
          </View>
          <View style={ styles.cardSixBottom }>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/car.png')} />
              <Text style={ styles.textGridCardSixBottom}>Car</Text>
            </View>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/bike.png')} />
              <Text style={ styles.textGridCardSixBottom}>Bike</Text>
            </View>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/food.png')} />
              <Text style={ styles.textGridCardSixBottom}>Food</Text>
            </View>
          </View>
          <View style={ styles.cardSixBottom }>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/delivery.png')} />
              <Text style={ styles.textGridCardSixBottom}>Delivery</Text>
            </View>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/groceries.png')} />
              <Text style={ styles.textGridCardSixBottom}>Groceries</Text>
            </View>
            <View style={ styles.gridCardSixBottom }>
              <Image style={ styles.imgGridCardSixBottom} source={require('../img/2/pulse.png')} />
              <Text style={ styles.textGridCardSixBottom}>Pulsa</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Homepage: {
      screen: Homepage,
    },
  },
  {
    initialRouteName: 'Homepage',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class HomepageScreen extends Component {  
  render() {
    return <AppContainer />
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
    height: '100%'
  },
  cardTop: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 100,
      height: 100
    },
    elevation: 3,
    shadowOpacity: 1.0,
    bottom: 40
  },
  saldo: {
    flexDirection: 'row'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: 7
  },
  containerBottom: {
    flex: 6,
    bottom: 20
  },
  titleExploreGrab: {
    flex: 2,
    width: 320,
    alignItems: 'flex-start',
    bottom: 5
  },
  cardSixBottom: {
    flex: 3,
    flexDirection: 'row'
  },
  gridCardSixBottom: {
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
    alignItems: 'center'
  },
  imgGridCardSixBottom: {
    width: 50,
    height: 50,
    margin: 5
  },
  textGridCardSixBottom: {
    fontSize: 16
  },
  avatarHomepage: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 100,
      height: 100
    },
    elevation: 3,
    shadowOpacity: 1.0,   
  }
})