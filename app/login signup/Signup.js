import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Signup({navigation}) {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <SafeAreaView style={styles.signup} >
        <View style={styles.container} >
        <View style={{width:'80%',marginTop:30}} >
            <TextInput
                style={styles.selfdetails}
                onChangeText={onChangeText}
                value={text}
                placeholder='Name'
            />
            <TextInput
                style={styles.selfdetails}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Mobile Number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.selfdetails}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Age"
                keyboardType="numeric"
            />
        </View>
        <View style={{width:'100%'}} >
            <View style={ styles.place } >
                <TextInput
                    style={styles.inputplace}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="State"
                />
                <TextInput
                    style={styles.inputplace}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="District"
                />
            </View>
            <View style={ styles.place } >
                <TextInput
                    style={styles.inputplace}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Panchayat"
                />
                <TextInput
                    style={styles.inputplace}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Village"
                />
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('otp')} style={{height:45,backgroundColor:'#0BBF0B',marginTop:50,width:100,alignItems:'center', justifyContent:'center',borderRadius:8}} >
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


export default Signup

