import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchMovie = ({searchResults}) => {
  return (
    <View>
         <FlatList 
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={{color:'white'}}>{item.title}</Text>
          </View>
        )}
      />    </View>
  )
}

export default SearchMovie

const styles = StyleSheet.create({
    resultItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})