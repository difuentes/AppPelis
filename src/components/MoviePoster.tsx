import React from 'react'
import { Text, View,Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie ;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie,height =420 ,width = 300}:Props) => {

    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{width,height,marginHorizontal:2}}>
           
            <View style={styles.containerImage}>
                <Image
                source={{uri}}
                style={styles.image} 
                />
            </View>
           
        </View>
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