import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Otp({navigation}) {


    const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <SafeAreaView style={styles.otp} >
        <View style={styles.container} >
            <Text style={{fontSize:28,color:'#101010',fontWeight:'600'}} >OTP</Text>
            <TextInput
                style={styles.inputplace} 
                onChangeText={onChangeNumber}
                value={number}
                placeholder="OTP"
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={()=>navigation.navigate('login')} style={{height:45,backgroundColor:'#0BBF0B',marginTop:25,width:100,alignItems:'center', justifyContent:'center',borderRadius:8}} >
                <Text style={{fontSize:18,fontWeight:'500',color:'#E1E8E1'}} >Submit</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({ 
    otp:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        alignItems:'center',
        borderWidth:1,
        borderColor:'#CFD1D1',
        width:'70%',
        borderRadius:5,
        padding:19
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
        minWidth:'85%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#CFD1D1',
        marginTop:19
    }
    
    
})

export default Otp
