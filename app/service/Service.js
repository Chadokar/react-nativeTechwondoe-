import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
const Service = () => {
  return (
  <>
    {/* <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}} >
      <View style={styles.header} >
        <View style={styles.leftheader} >
          <Text style={styles.district} >GriGrow Community</Text>
        </View>
      </View>

      <View style={styles.horizontalbar} >
        <Image source={''} style={{backgroundColor:'pink',width:35,height:35,borderRadius:18}} /> 
        <Image source={''} style={{backgroundColor:'pink',width:35,height:35,borderRadius:18}} /> 
      </View>

      <View style={styles.containerBox} >

      </View>
      <View style={{width:'100%',backgroundColor:'#A1CCA5',alignItems:'center',padding:10,flexDirection:'row'}}>
        <View style={{width:20,height:20,backgroundColor:'#B57DAD',borderRadius:10,marginHorizontal:5}} ></View> 
        <View style={{width:20,height:20,backgroundColor:'#B57DAD',borderRadius:10,marginHorizontal:5}} ></View> 
      </View>
      <View style={{width:'100%',backgroundColor:'#77D17D',alignItems:'center',flexDirection:'row',padding:10,justifyContent:'space-between'}} >
        <View style={{width:80,height:30,backgroundColor:'#D18C77'}} ></View>
        <View style={{width:80,height:30,backgroundColor:'#D18C77'}} ></View>
        <View style={{width:80,height:30,backgroundColor:'#D18C77'}} ></View>
      </View>
      <View style={styles.containerBox} >
        
      </View>
    </View>  */}
    <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}} >
      <View style={styles.header} >
        <View style={styles.leftheader} >
          <Text style={styles.district} >GriGrow Community</Text>
        </View>
      </View>
      <ScrollView 
        contentContainerStyle={{alignContent:'center',alignItems:'center'}} 
        style={styles.listcontainer} 
        automaticallyAdjustKeyboardInsets= {true} 
      >
        <View style={styles.list} ></View>
        <View style={styles.list} ></View>
        <View style={styles.list} ></View>
        <View style={styles.list} ></View>
        <View style={styles.list} ></View>
        <View style={styles.list} ></View>
      </ScrollView>
    </View>
  </>
  )
}


const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:80,
    backgroundColor:'#087821',
    // alignItems:'center',
    flexDirection:'column'
  },
  leftheader:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    justifyContent:'space-between',
    marginLeft:10,
  },
  district:{
    fontSize:22,
    color:'#fff',
    marginTop:8,
  },
  horizontalbar:{
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    height:60,
    backgroundColor:'#F5F5F5',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10
  },
  containerBox:{
    width:'100%',
    height:200,
    backgroundColor:'#A1CCCC'
  },
  listcontainer:{
    width:'100%',
    backgroundColor:'pink',
    padding:10
  },
  list:{
    width:'100%',
    height:120,
    backgroundColor:'blue',
    marginVertical:10,
  }
})


export default Service


// import React, { useState } from 'react'
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// function E_partner() {

//     const [indu,setIndu] = useState(null)

//   return (
//     <>
//     <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}} >
//       <View style={styles.header} >
//         <View style={styles.leftheader} >
//           <Text style={styles.district} >GriGrow Partner</Text>
//         </View>
//         <TouchableOpacity style={styles.leftheader} >
//             <Text style={styles.rightheader} >Call Now</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.viewContainer} >

//       </View>
//       <View style={styles.inputContainer} >
//         <TextInput
//             style={styles.input}
//             onChangeText={setIndu}
//             value={indu}
//             placeholder="useless placeholder"
//         />
//       </View>
//     </View>

//     </>
//   )
// }

// const styles = StyleSheet.create({
//     header:{
//       width:'100%',
//       height:80,
//       backgroundColor:'#087821',
//     //   alignItems:'center',
//       flexDirection:'row',
//       justifyContent:'space-between',
//       paddingRight:10
//     },
//     leftheader:{
//       flexDirection:'row',
//       marginTop:10,
//       marginBottom:10,
//       justifyContent:'space-between',
//       marginLeft:10,
//     },
//     district:{
//       fontSize:22,
//       color:'#fff',
//       marginTop:8,
//     },
//     rightheader:{
//         backgroundColor:'#C4BB10',
//         height:33,
//         textAlignVertical:'center',
//         color:'#fff',
//         fontWeight:'600',
//         borderRadius:7,
//         paddingHorizontal:13,
//         fontSize:15,
//         marginTop:10,
//     },
//     viewContainer:{
//         height:200,
//         width:'100%',
//         backgroundColor:'pink',
//         padding:10
//     },
//     inputContainer:{
//         width:'100%',
//         backgroundColor:'red',
//         alignItems:'center',
//         paddingTop:20,
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
// })

// export default E_partner
