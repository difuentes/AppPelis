import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
//import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

//capturar dimension pantalla
const ScreenHeight= Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootStackParams,'Detalle'>{}

export const  Detalle = ({route}:Props) => {

    const movie = route.params ;
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <ScrollView>    
            <View style={styles.ContenedorImagen}>
                <View style={styles.ImagenBorder}>
                    <Image
                        source={{uri}}
                        style={styles.PosterDetalle}
                    />
                </View>
                
            </View>
            <View style={styles.contenedorDetalle}>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View style={styles.contenedorDetalle}>
               <Icon
                name="star-outline"
                color="black"
                size={20}
               />
            </View>

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    contenedorDetalle:{
        marginHorizontal:20,
        marginTop:20,
        
    },
    ImagenBorder:{
        flex:1,
        borderBottomEndRadius:35,
        borderBottomStartRadius:35,
        overflow:'hidden',
    },
    PosterDetalle:{
        flex:1,
    },
    subtitle:{
        fontSize:20,
    },
    title:{
        fontSize:35,
        fontWeight:'bold'
    },
    ContenedorImagen:{
        width:'100%',
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 6,
         },
         shadowOpacity: 0.39,
         shadowRadius: 8.30,
         elevation: 13,
        height:ScreenHeight*0.7,
        
    }
})