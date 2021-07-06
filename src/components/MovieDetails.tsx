import React from 'react'
import { View, Text ,FlatList} from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import  Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';


import { Cast } from '../interfaces/creditsinterface';
import { CastItem } from './CastItem';



interface Props{
    movieFull:MovieFull;
    cast:Cast[];
}

export const MovieDetails = ({movieFull,cast}:Props) => {
    return (
       <>
           {/* Detalles*/}
           
           <View>
               <View style={{flexDirection:'row'}}>
                  
                    <Icon
                            name="star-outline"
                            color="purple"
                            size={16}
                    />
                  
                <Text style={{fontSize:16 ,marginLeft:5}}>{movieFull.vote_average}</Text>
             
                <Text style={{fontSize:16 }} > - { movieFull.genres.map(g=>g.name).join(', ')}</Text>
               </View>

               <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>
                   Descripcion
               </Text>
                
                <Text style={{marginTop:5}}>{movieFull.overview}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>Presupuesto</Text>
                <Text style={{marginTop:5,fontSize:18}}>{currencyFormatter.format(movieFull.budget,{code:'USD'}) }</Text>
                    
           
           </View>
           {/* Casting*/}
           <View style={{marginTop:0, marginBottom:100}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>Actores</Text>
               
                <FlatList style={{height:70}} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={({item}) => <CastItem actor={item}/>} data={cast} keyExtractor={(item)=>item.id.toString()}/>
           </View>
           
       </>
    )
}
