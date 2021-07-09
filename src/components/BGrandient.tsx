import React, { useContext,useEffect } from 'react'
import { StyleSheet, View,Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const BGrandient = ({children}:Props) => {

    //traer context de colores
    const {colors,prevColors,setColorImagen,setPrevImagen } = useContext(GradientContext);

    const{ opacity,fadeIn ,fadeOut} = useFade();

    useEffect(()=>{
        fadeIn(()=>{
            setPrevImagen(colors);
            fadeOut();
        })

    },[colors])


    return (
        <View style={{flex:1}}>
            <LinearGradient 
                colors={[prevColors.primary,prevColors.second,'transparent']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y:0.1}}
                end={{x:0.5,y:0.7}}
            />

             <Animated.View
                 style={{ 
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
             >  
                <LinearGradient 
                    colors={[colors.primary,colors.second,'transparent']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x:0.1, y:0.1}}
                    end={{x:0.5,y:0.7}}
                />

             </Animated.View>   

            {children}
        </View>
    )
}
