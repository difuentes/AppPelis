import * as React from 'react';
import { createContext,useState } from "react";
import ImageColors from 'react-native-image-colors';


//interface de tipo colores
interface ImageColors {
    primary :string;
    second:string;
}
//interface tipo de datos
interface ContextProps{
    colors:ImageColors;
    prevColors: ImageColors;
    setColorImagen : (colors:ImageColors)=>void;
    setPrevImagen : (colors:ImageColors)=>void;
}

export const GradientContext =  createContext({} as ContextProps);


export const GradientProvider =({children}:any) =>{


    //state 
    const [colors,setColor] = useState<ImageColors>({
        primary:'transparent',
        second: 'transparent'
    });

    const [prevColors,setPrevColor] = useState<ImageColors>({
        primary:'transparent',
        second: 'transparent'
    });

    const setColorImagen =(colors:ImageColors)=>{
        setColor(colors);
    }

    const setPrevImagen =(colors:ImageColors)=>{
        setPrevColor(colors);
    }



    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setColorImagen,
            setPrevImagen,
           
        }}>
            {children}
        </GradientContext.Provider>
    )
}