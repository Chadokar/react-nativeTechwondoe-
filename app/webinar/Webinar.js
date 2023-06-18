import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7f",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2dd72",
    title: "Fifth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e23d72",
    title: "Sixth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2od72",
    title: "Seventh Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29272",
    title: "Eighth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-105571e29d72",
    title: "Ninth Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Webinar = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState("");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <>
        <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}} >
          <View style={styles.header} >
            <View style={styles.leftheader} >
              <Image source={require('../accests/images/farmerlogo.jpg')} style={{width:45,height:45,borderRadius:25}} />
              <Text style={styles.district} >District</Text>
            </View>
            <View style={styles.rightheader} >
              <Image source={require('../accests/images/rain.png')} style={{width:33,height:33,marginTop:5}} />
              <Text style={{padding:7,backgroundColor:'#fff',height:33,textAlignVertical:'center',marginTop:4,borderRadius:5,color:'#111',fontWeight:'600'}} >Camera</Text> 
              <Text style={{backgroundColor:'#C4BB10',height:43,textAlignVertical:'center',color:'#fff',fontWeight:'600',borderRadius:7,paddingHorizontal:13,fontSize:15,marginTop:1}} >coin</Text> 
            </View>
          </View>
          <ScrollView contentContainerStyle={{alignContent:'center'}} style={{paddingLeft:10}} >
            <View style={styles.aftertop} >
              <TouchableOpacity style={{elevation:6,padding:10,paddingHorizontal:12,width:'35%',backgroundColor:'#fff',borderRadius:8}} ><Text style={{color:'#5C5C59',fontSize:16,fontWeight:'500'}} >Explore</Text></TouchableOpacity>
              <TouchableOpacity style={{elevation:6,padding:10,paddingHorizontal:12,width:'35%',backgroundColor:'#fff',borderRadius:8}} ><Text style={{color:'#5C5C59',fontSize:16,fontWeight:'500'}} >Explore</Text></TouchableOpacity>
            </View>
            <TextInput
                style={styles.selfdetails}
                onChangeText={onChangeText}
                value={text}
                placeholder='Search Your Crop'
            />
            <View style={{marginTop:28,width:'90%',marginBottom:20}} >
              <Text style={{fontSize:18,color:'#5C5C59'}} >Recommended Gaining</Text>
              <SafeAreaView style={{height:170}} >
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id} 
                  extraData={selectedId}
                />
              </SafeAreaView>
            </View>
            <View style={{marginTop:28,width:'90%',marginBottom:20}} >
              <Text style={{fontSize:18,color:'#5C5C59'}} >Top Gaining</Text>
              <SafeAreaView style={{height:170}}> 
                <FlatList 
                  data={DATA} 
                  renderItem={renderItem} 
                  horizontal 
                  showsHorizontalScrollIndicator={false} 
                  keyExtractor={(item) => item.id} 
                  extraData={selectedId} 
                />
              </SafeAreaView>
            </View>
            <View style={{width:'83%',height:150,backgroundColor:'red'}} >

            </View>
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
  rightheader:{
    flexDirection:'row',
    marginTop:10,
    width:'48%',
    justifyContent:'space-between',
    marginRight:10
  },
  district:{
    fontSize:18,
    color:'#fff',
    marginTop:8
  },
  aftertop:{
    width:'83%',
    justifyContent:'space-between',
    marginTop:23,
    flexDirection:'row',
    marginLeft:10
  },
  selfdetails:{
    width:'83%',
    backgroundColor:'#fff',
    marginTop:29,
    elevation:10,
    borderRadius:5,
    paddingHorizontal:10,
    marginLeft:10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})



export default Webinar
