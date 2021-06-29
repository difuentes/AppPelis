import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import  React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MobieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MovieState {
    nowPlaying:Movie[];
    popular:Movie[];
    topRanted:Movie[];
    upcoming:Movie[];
}

export const useMovies = () => {

    //state
    const [MovieState,setMovieState] = useState<MovieState>({
        nowPlaying:[],
        popular:[],
        topRanted:[],
        upcoming:[]
    });
    const [isloading,setIsloading] = useState(true);

    

    const getMovies = async () =>{

        //consume api multiple
        const nowPlayingPromise= movieDB.get<MobieDBMoviesResponse>('/now_playing')
        const popularPromise   = movieDB.get<MobieDBMoviesResponse>('/popular')
        const topRankedPromise = movieDB.get<MobieDBMoviesResponse>('/top_rated')
        const upcomingPromise  = movieDB.get<MobieDBMoviesResponse>('/upcoming')
        //guardar respuesta de api
        const res = await Promise.all([nowPlayingPromise,popularPromise,topRankedPromise,upcomingPromise])
        //set todas las peticiones 
        setMovieState(
            {
                nowPlaying: res[0].data.results,
                popular:    res[1].data.results,
                topRanted:  res[2].data.results,
                upcoming:   res[3].data.results
            }
        )
        //Set State is loading
        setIsloading(false);
        
    }

    useEffect(() => {
        //trae now_playing
        getMovies();
       
    }, [])


    return {
        ...MovieState,
        isloading
    }
}
