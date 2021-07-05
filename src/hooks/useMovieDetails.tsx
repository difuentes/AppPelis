import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import {CreditsResponse,Cast} from '../interfaces/creditsinterface';

interface MovieDetails{
    isloading:boolean;
    movieFull?: MovieFull;
    cast:Cast[];
}

export const useMovieDetails =  (movieId:number) => {
    //state
    const [ state , setState] = useState<MovieDetails>({
        isloading:true,
        movieFull:undefined,
        cast:[]
    });

    const getMoviesDetails =async()=>{
        
        //Consultas api 
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const CastDetailsPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResponse,CastDetailsResponse] = await Promise.all([movieDetailsPromise,CastDetailsPromise]);

        setState({
            isloading:false,
            movieFull:movieDetailsResponse.data,
            cast:CastDetailsResponse.data.cast
        })
    }
    

    useEffect(() => {
        
        getMoviesDetails();
    
    }, [])

    return{
       ...state
    }

}
