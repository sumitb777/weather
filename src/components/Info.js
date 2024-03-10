import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { infocontext } from './Context'

const Info = ({ isinfo }) => {
    const { info,ref } = useContext(infocontext)
    // console.log(info)
    return (


        <>
            {isinfo ?
                <>


                    <View style={styles.container}>

                        <Text style={styles.infotext}>
                            {info.name}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.infotext}>
                                {" " + Math.round(info.main.temp)}°C
                            </Text>
                            <Text style={styles.infotext}>
                                {" " + info.weather[0].main}
                            </Text>
                        </View>

                        <Text style={styles.infotext}>
                            Feels like
                            {" " + Math.round(info.main.feels_like)}°C
                        </Text>
                        <Text style={[styles.infotext, styles.desctext]} >
                            {" " + info.weather[0].description}
                        </Text>

                        <View style={styles.infobox}>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Humidity
                                </Text>
                                <Text style={styles.infotext}>
                                    {info.main.humidity}%
                                </Text>
                            </View>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Visibility
                                </Text>
                                <Text style={styles.infotext}>
                                    {info.visibility}mt
                                </Text>
                            </View>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Wind
                                </Text>
                                <Text style={styles.infotext}>
                                    {info.wind.speed}km
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infobox}>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Temp Max
                                </Text>
                                <Text style={styles.infotext}>
                                    {Math.round(info.main.temp_min)}°C
                                </Text>
                            </View>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Temp Max
                                </Text>
                                <Text style={styles.infotext}>
                                    {Math.round(info.main.temp_min)}°C
                                </Text>
                            </View>
                            <View style={styles.infofield}>
                                <Text style={styles.infotext}>
                                    Pressure
                                </Text>
                                <Text style={styles.infotext}>
                                    {info.main.pressure}mb
                                </Text>
                            </View>

                        </View>
                    </View>
                </>

                :
                 <>
                 {ref ? <>
                    <View style={{textAlign:'center'}}>
                        <Text style={styles.notf}>
                            City Not Found                      
                              </Text>
                    </View>
                    </>:<></>}
                </>
                }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        color: "white"
    },
    infobox: {

        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        // alignItems:"center"
        color: "white",
        gap: 10


    }, infotext: {
        color: "white",
        fontWeight: "900",
        fontSize: 20,
        textAlign:"center"
        // fontWeight:"bold"

    },
    desctext: {
        marginTop: 20
    },
    infofield: {
        alignItems: "center",
        gap: 5
    },
    notf:{
        color: "white",
        fontWeight: "900",
        fontSize: 20,
        textAlign:"center",
        // displrsay:"none"
    }
})

export default Info
