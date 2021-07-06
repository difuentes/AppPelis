import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParams } from '../navigation/Navigation';

import {ScrollView, Image, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { Movie } from '../interfaces/movieInterface';
import {useMovieDetails} from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';


//capturar dimension pantalla
const ScreenHeight= Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootStackParams,'Detalle'>{}

export const  Detalle = ({route,navigation}:Props) => {

    const movie = route.params ;
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {isloading,cast,movieFull} = useMovieDetails(movie.id);

    
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
           
     
            <View style={{ marginHorizontal:20,marginTop:10,}}>
                {
                    isloading 
                    ? <ActivityIndicator size={30} color="purple" style={{marginTop:20}} />
                    : <MovieDetails movieFull={movieFull!} cast={cast}/>
                }

               
            </View>
            {/*Boton Regresar*/}
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={()=> navigation.pop()}
                >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={50}
                    
                    />
                </TouchableOpacity>
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
        
    },
    backButton:{
        position:'absolute',
        zIndex:999,
        elevation:10,
        top:30,
        left:20
    }
})