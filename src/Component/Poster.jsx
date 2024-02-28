import * as React from 'react';
import { View, StyleSheet, Button, Text , TextInput, TouchableOpacity} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});




  return (
    <View style={styles.container}>

      <Video
        ref={video}
        style={styles.video}
        source={require('../../assets/Videos/Poster.mp4')}

        useNativeControls
        // resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{position:'absolute',  alignItems:'center' ,   justifyContent:'center', left:13 }}> 
        {/* <LinearGradient  
   colors={['rgba(0,0,0,0.0)', '#000010', 'rgba(0,0,0,0.0)']} 
   style={styles.gradient}
  > */}

<View style={{display:'flex', flexDirection:'row' , justifyContent:'center', marginBottom:270}}> 
        <TextInput style={styles.input} 
         placeholder='Search Movies'
         keyboardType= 'default'
         />
         
         <TouchableOpacity style={{backgroundColor:'green' , justifyContent:'center',  borderTopRightRadius:20,
      borderBottomRightRadius:20, padding:10}}>
         <Text style={{color:'white'}}> Search </Text>  
         </TouchableOpacity>
         </View>
        {/* <Text style={{fontSize: 70 , color:'white',         marginTop:20,
        }}>Welcome</Text> 
         <Text style={{fontSize: 20 , color:'white', marginBottom:50,}}>Watch millions of movies & TV shows</Text>  */}

         {/* </LinearGradient> */}
         <TouchableOpacity
  
          // title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            // style={{backgroundColor:'red', }}
} style={{color:'red', backgroundColor:'black',  width: responsiveWidth(30), height:responsiveHeight(6), alignItems:'center'}}
        >
          <Text style={{color:'white', fontSize:20}}>  {status.isPlaying ? 'Pause' : 'Play'} </Text>

</TouchableOpacity>
      </View>
      <View style={styles.buttons}>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    // width: 320,
    // height: 200,
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    resizeMode: 'cover',
    // backgroundColor:'red',
    // marginLeft:50,
    // justifyContent:'center',
    alignItems:'center',
    borderColor: 'black',
    
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    height:responsiveHeight(6),
    width: responsiveWidth(75),
    padding:12,
    backgroundColor:'white',
    color:'black',
    // borderRadius: 20,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    
  },
 
});
