import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Otpsignin({navigation}) {

  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <SafeAreaView style={styles.otp} >
        <View style={styles.container} >
            <Text style={styles.otptext} >OTP</Text>

            <TextInput
                style={styles.inputplace} 
                onChangeText={onChangeNumber}
                value={number}
                placeholder="OTP"
                keyboardType="numeric"
                
            />
            <TouchableOpacity onPress={()=>navigation.navigate('bottomnavigator')} style={button.button} >
                <Text style={button.buttontext} >Submit</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({ 
    otp:{
        flex:1,
        backgroundColor:'#FCFCFC',
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
        marginTop:19,
        shadowColor: "rgba(125, 119, 122, 0.72)",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 14,
        backgroundColor:'#FCFCFC'
    },
    otptext:{
        fontSize:28,
        color:'#0BBF0B',
        fontWeight:'600',
        textShadowOffset: {width: 8, height: 3},
        textShadowRadius: 8,
        textShadowColor: '#4FB547',
        minWidth:90,
        textAlign:'center'
    }
    
    
})


const button = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FCFCFC',
        borderRadius:25,
        marginTop:45,
        shadowColor: "#222",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.14,
        shadowRadius: 80,
        elevation: 25,
        minWidth:120
      },
      buttontext:{
        fontSize:20,
        margin:7,
        fontWeight:'600',
        color:'#0BBF0B',
        textShadowOffset: {width: 8, height: 3},
        textShadowRadius: 5,
        textShadowColor: '#4FB547',
        width:'100%',
        textAlign:'center',
        minWidth:100,
        textAlignVertical:'center',
        height:35
        
      }
})

export default Otpsignin
