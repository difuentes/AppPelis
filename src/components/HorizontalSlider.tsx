import React from 'react'
import { View ,FlatList,Text} from 'react-native';

import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ({title,movies}:Props) => {
    return (
        <View style={{ height:(title)? 260:250}}>
            {
                title &&  <Text style={{fontSize:25,marginLeft:20,fontWeight:'bold'}}>{title}</Text>
            }
           
            <FlatList
            data={movies}
            renderItem={({item}:any)=> (<MoviePoster movie={item} width={140} height={210}/>)}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
         </View>
    )
}
