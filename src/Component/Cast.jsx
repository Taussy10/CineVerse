import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

const Cast = ({data,  navigation}) => {
 const nullImage =  <Image source={require('../../assets/Images/avatar.png')} style={{ borderRadius: 62.5, height: 125, width: 125, resizeMode: 'stretch' }} />
  return (
    <View style={{flex:1}}>
        <Text style={{textAlign:'center',  fontSize: 30, color:'lightgrey' , fontWeight:'800', marginTop:10, marginBottom:5,}}>Top Cast</Text>

      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View style={{  width: responsiveWidth(33),  flexDirection: 'row',margin:20, }}>
              {/* Adjust this part to display the cast details */}
              <View style={{ borderRadius: 62.5, height: 125, width: 125, borderColor: 'black', borderWidth: 2 ,   }}>
              

   



             {/* for js code different curly and for uri diffrent curly */}
             <Pressable onPress={()=> navigation.push("CastDetails",
             {
                  data: item,
                  name:"Tausif"
                } 
                ) }>        
           <Image source={ item.profile_path ? { uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}` } : require('../../assets/Images/avatar.png')} style={styles.profileImage} />
           {/* <Image source={{{ item.profile_path ?  uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`: source={require('../../assets/Images/avatar.png') }}} style={{ borderRadius: 62.5, height: 125, width: 125, resizeMode: 'stretch' }} /> */}
           </Pressable>
                <Text style={{color:'white'}}>{item.original_name}</Text>

              </View>

            </View>
          )}
        />
    </View>
  )
}

export default Cast

const styles = StyleSheet.create({
  profileImage:{ 
    borderRadius: 62.5,
     height: 125, 
     width: 125, 
     resizeMode: 'cover' 
    }
  
})