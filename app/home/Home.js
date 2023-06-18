import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <>
      <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}} >
          <View style={styles.header} >
            <View style={styles.leftheader} >
              <Image source={require('../accests/images/farmerlogo.jpg')} style={{width:45,height:45,borderRadius:25}} />
              <Text style={styles.district} >GriGrow</Text>
            </View>
            <View style={styles.rightheader} >
              {/* <Image source={require('../accests/images/rain.png')} style={{width:33,height:33,marginTop:5}} />
              <Text style={{padding:7,backgroundColor:'#fff',height:37,textAlignVertical:'center',marginTop:4,borderRadius:5,color:'#111',fontWeight:'600'}} >Camera</Text> 
              <Text style={{backgroundColor:'#C4BB10',height:43,textAlignVertical:'center',color:'#fff',fontWeight:'600',borderRadius:7,paddingHorizontal:13,fontSize:15,marginTop:1}} >coin</Text>  */}
              <View style={{height:25,width:65,backgroundColor:'#BFBF11',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:20,paddingHorizontal:8}} >
                <Image source={require('../accests/images/icons8-natural-food-32.png')} style={{width:17,height:17,tintColor:'#BFBF11',backgroundColor:'#087821',borderRadius:10}} />
                <Text style={{color:'black',fontWeight:'500',textAlign:'center',fontSize:12}} >115</Text>
              </View>
                <View style={{backgroundColor:'rgba(255,225,255,0.3)',alignItems:'center',justifyContent:'center',display:'flex',marginBottom:35,padding:5,borderRadius:14}} ><Image source={require('../accests/images/icons8-paper-bag-64.png')} style={{height:15,width:15,tintColor:'#fff',}} /></View>
            </View>
          </View>

          <View style={styles.weaAd} >
            <View style={styles.weaAdleft} >
              <Text style={{fontSize:35,color:'#fff',fontWeight:'300',backgroundColor:'#087821',paddingHorizontal:20,paddingVertical:6,paddingBottom:8,borderRadius:45}} >+</Text>
              <Text style={{color:'#111',marginTop:3}} >Add Farm</Text>
            </View>
            <View style={styles.weaAdright} >
              <Text style={{color:'#111',fontSize:15,marginRight:10}} >Weather Advisory</Text>
              <View style={{backgroundColor:'#3069B3',padding:2,borderRadius:10,marginTop:1}} ><Image source={require('../accests/images/icons8-chevron-right-48.png')} style={{width:12,height:12,tintColor:'#fff'}} /></View>
            </View>
          </View>

          <View style={styles.lock} >
            <View style={{borderRadius:20,padding:5,borderWidth:1.5,borderColor:'#D5B506',paddingBottom:7,marginBottom:8}} ><Image source={require('../accests/images/icons8-lock-50.png')} style={{width:23,height:23}} /></View>
            <Text style={{color:'#111',marginBottom:5}} >Next activity for your farm is ready</Text>
            <View style={{backgroundColor:'#D5B506',marginTop:6,padding:9,width:130,alignItems:'center',borderRadius:5}} ><Text style={{color:'#111'}} >Unlock Now</Text></View>
          </View>

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
    justifyContent:'space-between',
    flexDirection:'row'
  },
  leftheader:{
    flexDirection:'row',
    marginTop:10,
    width:'36%',
    justifyContent:'space-between',
    marginLeft:10
  },
  district:{
    fontSize:18,
    color:'#fff',
    marginTop:8
  },
  rightheader:{
    flexDirection:'row',
    marginTop:20,
    width:'28%',
    justifyContent:'space-between',
    marginRight:10
  },
  weaAd:{
    padding:15,
    backgroundColor:'#fff',
    width:'91%',
    borderRadius:15,
    justifyContent:'space-between',
    flexDirection:'row',
    elevation:3
    
  },
  weaAdleft:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width:'30%'
  },
  weaAdright:{
    backgroundColor:'rgba(78, 183, 199,0.19)',
    justifyContent:'center',
    width:'65%',
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center'
  },
  lock:{
    alignItems:'center',
    padding:20,
    backgroundColor:'#fff',
    marginTop:20,
    width:'90%',
    borderRadius:15,
    elevation:4
  }
})

export default Home
