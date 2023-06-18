import React from 'react'
import { View, Button, Text, Animated, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../login signup/Signup';
import Otp from '../login signup/Otp';
import Login from '../login signup/Login';
import Otpsignin from '../login signup/Otpsignin';
import BottomNavigation from './BottomNavigation'

const page1 = require('../accests/images/page1.jpeg')

function Page1({ navigation }) {
  return (
    <TouchableOpacity style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff'}} onPress={() => navigation.navigate('Page2')} > 
      <View style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',}} >
        <Image style={{height:80,width:80,marginRight:20}} source={page1} />
        <Text style={{fontSize:40,fontWeight:'500',color:'#1E871E',}} >GriGrow</Text>
      </View>
    </TouchableOpacity>
  );
}

function Page2({ navigation }) {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }} onPress={() => navigation.navigate('Page3')} >
      <View style={{flex:4,justifyContent:'center',alignItems:'center',}} >
        <Text style={{fontSize:40,color:'#139E13',fontWeight:'600'}} >नमस्ते</Text>
        <Text style={{fontSize:45,color:'#139E13',fontWeight:'600'}} >INDIAN</Text>
        <Text style={{fontSize:45,color:'#139E13',fontWeight:'600',marginLeft:'20%',}} >FARMER</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:20}} ><Text style={{fontSize:45,color:'#088008',}} >बढ़े कदम खेती की और</Text></View>
    </TouchableOpacity>
  );
}

function Page3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff',paddingBottom:50 }}  >
      <View style={{flex:1,justifyContent:'center',alignItems:'center',}} >
        <Image source={page1} style={{height:200,width:200}} />
      </View>
      <View style={{flexDirection:'row',width:'75%',justifyContent:'space-between',alignItems:'center'}} >
        <TouchableOpacity onPress={()=> navigation.navigate('signup')} style={styles.button} >
          <Text style={[styles.buttontext,{textAlignVertical:'bottom',}]} >हिन्दी</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('signup')} style={styles.button} >
          <Text style={[styles.buttontext,{marginTop:10,textAlignVertical:'center'}]} >English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page1"
        component={Page1}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="otp"
        component={Otp}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="otpsignin"
        component={Otpsignin}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="bottomnavigator"
        component={BottomNavigation}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}

function StackNavigation() {
  return (
    <>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    borderRadius:25,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 10,
    minWidth:120
  },
  buttontext:{
    fontSize:23,
    margin:10,
    fontWeight:'500',
    color:'#0BBF0B',
    fontFamily:'Allura-Regular',
    textShadowOffset: {width: 8, height: 4},
    textShadowRadius: 5,
    textShadowColor: '#4FB547',
    width:'100%',
    textAlign:'center',
    
    height:35
    
  }
})

export default StackNavigation
