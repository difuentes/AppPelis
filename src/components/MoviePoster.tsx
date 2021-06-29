import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View,Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie ;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie,height =420 ,width = 300,}:Props) => {

    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navegation = useNavigation();

    return (
       
            <TouchableOpacity 
            onPress={()=>navegation.navigate('Detalle',movie)}
            activeOpacity={0.6} 
            style={{width,height,marginHorizontal:5,paddingBottom:10}}
            >
            
                <View style={styles.containerImage}>
                    <Image
                    source={{uri}}
                    style={styles.image} 
                    />
                </View>
            
            </TouchableOpacity>
        
    )
}


//stylos de imagen
const styles = StyleSheet.create({
    image:{
       flex:1,
       borderRadius:20,
    },
    containerImage:{
        flex:1,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 6,
         },
         shadowOpacity: 0.39,
         shadowRadius: 8.30,
         elevation: 13,
    }

})