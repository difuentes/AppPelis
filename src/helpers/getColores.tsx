import ImageColors from 'react-native-image-colors';

export const getColores = async(uri:string) =>{
        
        
        const colors = await ImageColors.getColors(uri,{});
        
        let primary;
        let second;

        if (colors.platform === 'android') {
            // Access android properties
            // e.g.
            primary = colors.dominant;
            second = colors.average;
            const averageColor = colors.average
        } else {
            // Access iOS properties
            // e.g.
            primary = colors.primary;
            second = colors.secondary;
            const backgroundColor = colors.background
        }

    return[primary,second]
}