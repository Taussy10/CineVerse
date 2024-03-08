import * as React from 'react';
import { View, StyleSheet, Button, Text , TextInput, TouchableOpacity} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'
import Search from './Search';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});




  return (
    <View style={styles.container}>

{/* Put search Here */}


      <Video
        ref={video}
        style={styles.video}
        source={require('../../assets/Videos/Poster.mp4')}

        useNativeControls
        // resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{position:'absolute',  right:125, bottom:0  }}> 
   
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

 
});
