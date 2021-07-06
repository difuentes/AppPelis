import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsinterface'


interface Props{
    actor: Cast
}

export const CastItem = ({actor}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`


    return (
        <View style={styles.container}>
            {
                actor.profile_path && 
                ( <Image source={{uri}} style={{width:50,height:50,borderRadius:10}}/>)
            }
           
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:15}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:2,
        marginRight:10,
        marginLeft:5,
        backgroundColor:'white',
        borderRadius:20,
        shadowOffset: {
             width: 0,
             height: 3 ,
         },
         shadowOpacity: 0.39,
         shadowRadius: 5.30,
         elevation: 13,
         height:54
    },
    actorInfo:{
        marginLeft:10,
        marginRight:10
    }

})