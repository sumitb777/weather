import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { infocontext } from './Context';
import clouds from '../../assets/clouds.jpg'
import drizzle from '../../assets/drizzle.jpg'
import haze from '../../assets/haze.jpg'
import mist from '../../assets/mist.jpg'
import rain from '../../assets/rain.jpg'
import Smoke from '../../assets/Smoke.jpg'
import splash from '../../assets/splash.png'
import clear from '../../assets/clear.jpg'


const Search = ({ setisinfo,setimg }) => {

    const{setinfo,setref}=useContext(infocontext)
    const apiKey = "24387ba69a6f52309605463e445c75a2";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const [city,setcity]=useState('abc')
    const addinfo =async (v) => {    
        try {
            // let data      
        const  response  = await fetch(url+v+`&appid=${apiKey}`)
                    console.log(response)
                let  data=await response.json();

        if(response.status !== 404){

            setinfo(data)
            setisinfo(true)
            const weather=data.weather[0].main
            if(weather=='Clear'){
                setimg(clear)
            }
            else if(weather=='Clouds'){
                setimg(clouds)
            }
            else if(weather=='Drizzle'){
                setimg(drizzle)
            }
            else if(weather==='Haze'){
                setimg(haze)
            }
            else if(weather==='Mist'){
                setimg(mist)
            }
            else if(weather==='Rain'){
                setimg(rain)
            }
            else if(weather==='Smoke'){
                setimg(Smoke)
            }
            else if(weather==='splash'){
                setimg(splash)
            }
        }
   
        else{
            setisinfo(false)
            setref(true)
            setinfo()
        }     
            // console.log(data)
        } catch (error) {
            setisinfo(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
            color={'white'}     placeholder='Enter City Name'placeholderTextColor={'white'} 
                onChangeText={newcity =>setcity(newcity)}
                style={{ height: 50 ,backgroundColor:'#c7cbc74a' ,paddingLeft:40,fontSize:18,fontWeight:"500"}} Value={city} />
            <Button title='Search' style={{ width: 200 }} onPress={()=>addinfo(city)}/>
            <Text>

            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    }
})
export default Search