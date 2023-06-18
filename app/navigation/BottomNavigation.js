import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Agrishop from '../agri shop/Agrishop';
import Home from '../home/Home';
import KrushiBook from '../krushi book/KrushiBook';
import Service from '../service/Service';
import Webinar from '../webinar/Webinar';

const Logo = [
    require('../accests/images/Home.png'),
    require('../accests/images/Add.png'),
    require('../accests/images/call-calling.png'),
    require('../accests/images/l.png'),
    require('../accests/images/translate.png'),
]


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
          initialRouteName={Home}
          screenOptions={({ }) => ({
            tabBarHideOnKeyboard:true,
            tabBarStyle: styles.tabBarstyle,
          })}
          tabBarOptions={{
            activeTintColor: '#6739B7',
            shadowColor:'black',
            textShadowColor:'black',
            inactiveTintColor: '#838B95',
            labelStyle: styles.labledesign,
            tabStyle: styles.tabstyle,
          }}
          
          >
        <Tab.Screen
          options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color,focused }) => (
              <Image style={[styles.tinyLogo , {tintColor:focused? 'red':color, height:22,width:21}]} 
                source={Logo[0]} 
              />
              ),
            }}
         name="Home" component={Home} />
        <Tab.Screen 
          options={{
            headerShown:false,
            tabBarLabel: 'Webinar',
            tabBarIcon: ({ color,focused }) => (
                <Image style={[styles.tinyLogo , {tintColor:focused? 'red':color, height:22,width:21}]} 
                  source={Logo[1]} 
                />
              ),
          }}
          name='Webinar' component={Webinar}/>
          <Tab.Screen 
            options={{
              headerShown:false,
              tabBarLabel: 'Service',
              tabBarIcon: ({ color,focused }) => (
                <Image style={[styles.tinyLogo , {tintColor:focused? 'red':color, height:22,width:21}]} 
                  source={Logo[2]} 
                />
                ),
            }}
            name="Service" component={Service} />
        <Tab.Screen 
          options={{
            headerShown:false,
            tabBarLabel: 'Krushibook',
            tabBarIcon: ({ color,focused }) => (
                <Image style={[styles.tinyLogo , {tintColor:focused? 'red':color, height:22,width:21}]} 
                  source={Logo[3]} 
                />
              ),
            }}
          name='Krushibook' component={KrushiBook}/>
        <Tab.Screen 
          options={{
            headerShown:false,
            tabBarLabel: 'Agrishop',
            tabBarIcon: ({ color,focused }) => (
                <Image style={[styles.tinyLogo , {tintColor:focused? 'red':color, height:22,width:21}]} 
                  source={Logo[4]} 
                />
              ),
            }}
          name='Agrishop' component={Agrishop}/>
      </Tab.Navigator>
    );
  }


const BottomNavigation = () => {
  return (
    <>
      {/* <NavigationContainer> */}
        <MyTabs/>
      {/* </NavigationContainer> */}
    </>
  )
}



const styles = StyleSheet.create({
    navigator:{
        backgroundColor:'black', 
        padding:10,
    },
    tabBarstyle:{
      display:'flex',
      position: 'absolute',
      flexDirection:'row',
      height:90,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      left:'0%',
      right:'0%',
      bottom:0,
      // backgroundColor:'red',
      shadowColor: 'rgba(41, 41, 61, 0.2)',
      shadowOffset: {width: 0, height: 24},
      shadowOpacity: 0.4,
      elevation:14,
      borderRadius:20,
    },
    tinyLogo: {
      width: 22,
      height: 23,
      backgroundColor:'white',
    },
    tabstyle:{
      flex:1,
      width:60,
      height:45,
    },
    labledesign:{
      fontFamily:'CircularStd-Book',
      fontSize:12,
      lineHeight:15,
      textAlign:'center',
      marginTop:5,
    }
})



export default BottomNavigation
