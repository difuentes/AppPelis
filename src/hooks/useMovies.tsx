import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import  React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MobieDBNowPlaying, Movie } from '../interfaces/movieInterface';



export const useMovies = () => {

    //state
    const [peliculasCine, GuardarPeliculasCine] = useState<Movie[]> ([]);
    const [isloading,setIsloading] = useState(true);

    const getMovies = async () =>{

        //consume api 
        const res = await  movieDB.get<MobieDBNowPlaying>('/now_playing')
        //guardar peliculas en variable
        const peliculas = res.data.results;
        //set State peliculas
        GuardarPeliculasCine(peliculas);
        //Set State is loading
        setIsloading(false);
        
    }

    useEffect(() => {
        //trae now_playing
        getMovies();
       
    }, [])


    return {
        peliculasCine,
        isloading
    }
}
