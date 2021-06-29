
import React,{useEffect} from 'react'
import { ActivityIndicator, ScrollView,Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';



const windowWidth = Dimensions.get('window').width;

export const Home = () => {
    
    const {nowPlaying,popular,topRanted,upcoming,isloading} =useMovies();
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
        <ScrollView>

            <View style={{marginTop:top + 20}}>
            {/*Carosel*/}
            <View style={{height:440}}>
                <Carousel
                data={nowPlaying}
                renderItem={({item}:any)=> <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.6}
                />      
            </View>

            {/*FlatList */}
            <HorizontalSlider title="Populares" movies={popular}/>
            <HorizontalSlider title="Mas Vistas" movies={topRanted}/>
            <HorizontalSlider title="Novedades" movies={upcoming}/>
            {/*FlatList */}
           
           
            </View>
        </ScrollView>
    )
}
