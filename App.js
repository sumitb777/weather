import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import Home from './src/components/Home';
import imge from './assets/underwater.jpg'
import { useContext, useState } from 'react';
import Context, { infocontext } from './src/components/Context';
export default function App() {
  const [img, setimg] = useState(imge)
  return (
    <Context>
     
      <ImageBackground source={img} style={{ width: '100%', height: '100%', flex: 1 }} resizeMode="cover" >


        <View style={styles.container} >

          <Home setimg={setimg} />

        </View>
      </ImageBackground>
    </Context>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    marginTop: 17,
    paddingTop: 13
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
