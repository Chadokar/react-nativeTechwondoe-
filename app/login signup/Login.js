import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Login({navigation}) {

  const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <SafeAreaView style={styles.signup} >
        <View style={styles.container} >
          <Text style={{fontSize:28,color:'#101010',fontWeight:'600',marginBottom:20}} >Login</Text>
          <TextInput
              style={styles.selfdetails}
              onChangeText={onChangeText}
              value={text}
              placeholder='Name'
              // left={}
          />
          <TextInput
              style={styles.selfdetails}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Mobile Number"
              keyboardType="numeric"
          />
          <TouchableOpacity onPress={()=>navigation.navigate('otpsignin')} style={{height:45,backgroundColor:'#0BBF0B',marginTop:50,width:100,alignItems:'center', justifyContent:'center',borderRadius:8}} >
            <Text style={{fontSize:18,fontWeight:'500',color:'#E1E8E1'}} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  signup:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center'
  },
  container:{
      width:'90%',
      alignItems:'center',
      padding:10,
      borderWidth:1,
      borderColor:'#CFD1D1',
      borderRadius:16,
      marginTop:40
  },
  selfdetails:{
      width:'100%',
      borderWidth:1,
      marginBottom:25,
      borderColor:'#CFD1D1',
      borderRadius:5,
      paddingHorizontal:10
  },
  place:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:5,
      marginBottom:10
  },
  inputplace:{
      paddingHorizontal:10,
      height:40,
      maxWidth:'45%',
      minWidth:'35%',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#CFD1D1'
  }
  
  
})


export default Login
