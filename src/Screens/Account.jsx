import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import faqData from '../Data/Faq'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Component/Header';

const Account = () => {
  // 1. Created the useState for handling weather to showAnser or not
  // 1.{a}: initialState == null so intial not showing answer
  const [showAnswer, setShowAnser] = useState(null);

  // a function written for toggling 
  const toggleItem = (index) => {
    setShowAnser((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <LinearGradient
       colors={['#141E30', "#243B55",'#243B55']} style={{flex:1}}
       > 
    <SafeAreaView style={{padding: 20,flex:1, }} >

    <ScrollView style={{  flex:1, }}>
  {/* <LinearGradient
       colors={['#141E30', "#243B55",'#243B55']}
       >  */}
    {/* <SafeAreaView style={{padding: 20,flex:1, backgroundColor:'lightblue'}} > */}

    <LinearGradient style={{padding: 20,flex:1,}}
      //  colors={['#141E30', "#243B55",'grey']} 
       colors={['#141E30', "#243B55",'#bdc3c7']} 
      >
        <Header/>

        {/* Person Name and Image container */}
        <View style={{ alignItems:'center', marginBottom:20,}}>
        <Image source={ require("../../assets/Images/actor.webp") } style={styles.image} />
        <Text style={{fontSize:30,color:'white', fontWeight:'600', }}>Name: John Doe</Text>
        </View>
      <FlatList
        data={faqData}
        renderItem={({ item, index }) => (

          <TouchableOpacity onPress={() => toggleItem(index)} style={styles.itemContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:10 }}>
              <Text style={{color:'black', fontSize:20}}>{item.question}</Text>
              <AntDesign
                name={showAnswer === index ? 'caretdown' : 'caretright'}
                size={24}
                color={ showAnswer === index ? "white": "black"}
              />
            </View>
            {showAnswer === index && <Text style={[styles.textColor , {marginLeft:10,fontSize:20}]}>{item.answer}</Text>}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
          </LinearGradient>

    {/* </SafeAreaView> */}
    {/* </LinearGradient> */}

    </ScrollView>
    </SafeAreaView> 
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  answer: {
    marginLeft: 20,
  },
  textColor:{
    color:'white'
  },
  image:{
    height:200, 
    width:200, 
    borderRadius:100,
  resizeMode:'stretch'}
});

export default Account;
