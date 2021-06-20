
import React,{useEffect} from 'react'
import { ActivityIndicator, Dimensions, Text, View,FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';


const windowWidth = Dimensions.get('window').width;

export const Home = () => {

    
    const {peliculasCine ,isloading} =useMovies();
    const {top}= useSafeAreaInsets();

    //mostrar spinner mientras carga informacion de api
    if(isloading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color="purple" size={200} />
            </View>
        )
    }

    return (
        <View style={{marginTop:top + 20}}>
            {/*Carosel*/}
            <View style={{height:440}}>
                <Carousel
                data={peliculasCine}
                renderItem={({item}:any)=> <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                itemWidth={300}
                />      
            </View>

            {/*FlatList populares*/}

            <View style={{height:250}}>
                <Text style={{fontSize:25,marginLeft:20,fontWeight:'bold'}}>Populares</Text>
                <FlatList
                data={peliculasCine}
                renderItem={({item}:any)=> (<MoviePoster movie={item} width={140} height={210}/>)}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>
            {/*FlatList En cine*/}
            <View style={{height:250}}>
                <Text style={{fontSize:25,marginLeft:20,fontWeight:'bold'}}>En Cine</Text>
                <FlatList
                data={peliculasCine}
                renderItem={({item}:any)=> (<MoviePoster movie={item} width={140} height={210}/>)}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>
           
        </View>
    )
}
