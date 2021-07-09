
import React,{useContext, useEffect} from 'react'
import { ActivityIndicator, ScrollView,Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors'
import Carousel from 'react-native-snap-carousel';
//hooks
import { useMovies } from '../hooks/useMovies';
//Componentes
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { BGrandient } from '../components/BGrandient';
import { getColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';



const windowWidth = Dimensions.get('window').width;

export const Home = () => {
    
    //desTrocturacion de useMovies
    const {nowPlaying,popular,topRanted,upcoming,isloading} =useMovies();
    const {top}= useSafeAreaInsets();

    const {setColorImagen} = useContext(GradientContext);

    //mostrar spinner mientras carga informacion de api
    if(isloading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color="purple" size={200} />
            </View>
        )
    }
    //consulta a helper por colores de la imagen 
    const getPosterColor = async(index:number) =>{

        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        const [primary="white",second="white"] = await getColores(uri);  

        setColorImagen({primary,second});
    }



    return (
        <BGrandient>
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
                    onSnapToItem={index=> getPosterColor(index)}
                    />      
                </View>

                {/*FlatList */}
                <HorizontalSlider title="Populares" movies={popular}/>
                <HorizontalSlider title="Mas Vistas" movies={topRanted}/>
                <HorizontalSlider title="Novedades" movies={upcoming}/>
                {/*FlatList */}
            
                </View>
            </ScrollView>
        </BGrandient>
    )
}
