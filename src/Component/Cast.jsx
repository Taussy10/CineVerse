import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

const Cast = ({data}) => {
  return (
    <View style={{flex:1}}>
        <Text style={{textAlign:'center',  fontSize: 30,}}>Top Cast</Text>

      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View style={{  width: responsiveWidth(33),  flexDirection: 'row',margin:20, }}>
              {/* Adjust this part to display the cast details */}
              <View style={{ borderRadius: 62.5, height: 125, width: 125, borderColor: 'black', borderWidth: 2 ,   }}>
              

   
              {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}` }} style={{ borderRadius: 62.5, height: 125, width: 125, resizeMode: 'stretch' }} /> */}

               {`https://image.tmdb.org/t/p/w500/${item.profile_path}` ? (
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}` }} style={{ borderRadius: 62.5, height: 125, width: 125, resizeMode: 'stretch' }} />
        ) : (
          <Image source={require('../../assets/Images/avatar.png')} style={{ borderRadius: 62.5, height: 125, width: 125, resizeMode: 'stretch' }} />

        )}  
  

                <Text>{item.original_name}</Text>

              </View>

            </View>
          )}
        />
    </View>
  )
}

export default Cast

const styles = StyleSheet.create({})