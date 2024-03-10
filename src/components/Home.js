import React, { createContext, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Info from './Info';
import Search from './Search';

import { infocontext } from './Context';

const Home = ({setimg}) => {
    const [isinfo,setisinfo]=useState(false);



// console.log(info)




    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor="green"
            // hidden
            // barStyle="light-Content" 
            />
            <View>

                <View>
                    <Text style={{color:"white", fontSize: 25, textAlign: 'center', fontWeight: "bold" }}>
                        Weather App
                    </Text>
                </View>
                <View>
                    <Search  setisinfo={setisinfo} setimg={setimg}/>

                </View>
                <View>
                    
                        <Info  isinfo={isinfo} />

                   
                </View>

            </View>
        </SafeAreaView>

    )
}

export default Home